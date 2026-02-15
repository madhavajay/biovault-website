<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import * as THREE from "three";
	import type ThreeGlobeType from "three-globe";

	interface Testimonial {
		lat: number;
		lng: number;
		quote: string;
		author: string;
		org: string;
		flag: string;
		type: "data-owner" | "researcher";
	}

	interface LabelPosition {
		x: number;
		y: number;
		testimonial: Testimonial;
		visible: boolean;
		index: number;
	}

	interface ArcDatum {
		startLat: number;
		startLng: number;
		endLat: number;
		endLng: number;
		color: string | [string, string];
		altitude: number;
		dashTime: number;
		dashInitialGap: number;
		arcType: "code" | "results";
		stroke: number;
	}

	let {
		testimonials = [] as Testimonial[],
		class: className = "",
		activeIndex = $bindable(0), // Index of currently focused testimonial (Jordan = 0)
		onRotate = (index: number) => {}, // Callback when globe rotates to a testimonial
		backgroundMode = false, // When true, globe auto-spins and hides labels
	} = $props();

	// Track if user has manually interacted - stops auto-play permanently
	let userHasInteracted = $state(false);

	// Expose rotateTo function for external control
	export function rotateTo(index: number) {
		userHasInteracted = true; // User took control, stop auto-play
		if (rotateToFn) rotateToFn(index);
	}

	let container: HTMLDivElement;
	let backgroundCircle: HTMLDivElement;
	let animationId: number;
	let labelPositions = $state<LabelPosition[]>([]);
	let rotateToFn = $state<((index: number) => void) | null>(null);

	// Calculate adjusted positions for hidden flags to prevent overlap
	const minFlagSpacing = 44;
	let adjustedFlagPositions = $derived.by(() => {
		const hidden = labelPositions
			.filter((lp) => !lp.visible)
			.map((lp) => ({ ...lp, adjustedY: lp.y }))
			.sort((a, b) => a.y - b.y);

		// Push apart overlapping flags
		for (let i = 1; i < hidden.length; i++) {
			const prev = hidden[i - 1];
			const curr = hidden[i];
			if (curr.adjustedY - prev.adjustedY < minFlagSpacing) {
				curr.adjustedY = prev.adjustedY + minFlagSpacing;
			}
		}

		return hidden;
	});

	const globeRadius = 100;
	const polygonAltitude = 0.01;
	const pointAltitude = 0.02;
	const globeDataUrl = "/globe-data-min.json";

	const buildArcData = (items: Testimonial[]): ArcDatum[] => {
		if (items.length < 2) return [];
		const arcs: ArcDatum[] = [];

		// Code traveling: bright green, energetic
		const codeColor: [string, string] = [
			"rgba(34, 197, 94, 0.9)",
			"rgba(74, 222, 128, 0.7)",
		];
		// Results returning: softer teal, more subtle
		const resultsColor: [string, string] = [
			"rgba(20, 184, 166, 0.5)",
			"rgba(94, 234, 212, 0.3)",
		];

		let arcIndex = 0;
		for (let i = 0; i < items.length; i += 1) {
			for (let j = i + 1; j < items.length; j += 1) {
				const a = items[i];
				const b = items[j];
				const altitude = 0.15 + Math.random() * 0.06;
				// Stagger different pairs so they don't all fire at once
				const pairOffset = (arcIndex * 0.5) % 3;

				// Code → travels to data (bright, thick)
				arcs.push({
					startLat: a.lat,
					startLng: a.lng,
					endLat: b.lat,
					endLng: b.lng,
					color: codeColor,
					altitude,
					dashTime: 2500,
					dashInitialGap: pairOffset,
					arcType: "code",
					stroke: 0.7,
				});

				// Results ← return (softer, thinner)
				arcs.push({
					startLat: b.lat,
					startLng: b.lng,
					endLat: a.lat,
					endLng: a.lng,
					color: resultsColor,
					altitude: altitude * 0.9, // slightly lower arc
					dashTime: 2000, // slightly faster return
					dashInitialGap: pairOffset + 1.5,
					arcType: "results",
					stroke: 0.35,
				});

				arcIndex++;
			}
		}

		return arcs;
	};

	onMount(() => {
		let globe: ThreeGlobeType | null = null;
		let isMounted = true;

		const sizes = {
			width: container.clientWidth,
			height: container.clientHeight,
		};

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			30,
			sizes.width / sizes.height,
			1,
			1000,
		);
		camera.position.z = 400;
		// Camera Y will be set dynamically based on target latitude
		// Jordan lat is 31.95, using same formula as latToCameraY: -lat * -5 = lat * 5
		camera.position.y = 31.95 * 5; // Start centered on Jordan's latitude

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		container.appendChild(renderer.domElement);

		const circlePointA = new THREE.Vector3();
		const circlePointB = new THREE.Vector3();
		const circlePointC = new THREE.Vector3();
		const circlePointD = new THREE.Vector3();

		const updateBackgroundCircle = () => {
			if (!backgroundCircle) return;
			const baseRadius = (globe?.getGlobeRadius?.() ?? globeRadius) + 2;
			const renderRadius = baseRadius * (1 + polygonAltitude);
			circlePointA.set(renderRadius, 0, 0).project(camera);
			circlePointB.set(-renderRadius, 0, 0).project(camera);
			circlePointC.set(0, renderRadius, 0).project(camera);
			circlePointD.set(0, -renderRadius, 0).project(camera);

			const xA = (circlePointA.x * 0.5 + 0.5) * sizes.width;
			const xB = (circlePointB.x * 0.5 + 0.5) * sizes.width;
			const yC = (-circlePointC.y * 0.5 + 0.5) * sizes.height;
			const yD = (-circlePointD.y * 0.5 + 0.5) * sizes.height;

			const diameter = Math.ceil(
				Math.max(Math.abs(xA - xB), Math.abs(yC - yD)),
			);
			backgroundCircle.style.width = `${diameter}px`;
			backgroundCircle.style.height = `${diameter}px`;
		};

		const pointLight = new THREE.PointLight(0x134e2a, 18, 200);
		pointLight.position.set(-50, 0, 60);
		scene.add(pointLight);
		scene.add(new THREE.HemisphereLight(0xd4edda, 0x0a3622, 1.2));

		const atmosphere = new THREE.Mesh(
			new THREE.SphereGeometry(globeRadius * 1.06, 64, 64),
			new THREE.MeshBasicMaterial({
				color: 0x22c55e,
				transparent: true,
				opacity: 0.08,
				side: THREE.BackSide,
			}),
		);
		scene.add(atmosphere);

		// Start with Jordan centered (lat 31.95, lng 35.93)
		const jordanLat = 31.95;
		const jordanLng = 35.93;
		const initialRotation = -jordanLng * (Math.PI / 180);
		let rotationY = initialRotation;
		let targetRotationY = initialRotation;

		// Camera Y position based on latitude - negative lat needs higher camera Y to look down
		const latToCameraY = (lat: number) => -lat * -5;
		let cameraY = latToCameraY(jordanLat);
		let targetCameraY = cameraY;

		let autoRotate = backgroundMode; // Enable for background mode
		let mouseX = 0;
		let mouseY = 0;
		let testimonialInterval: ReturnType<typeof setInterval>;

		// Visit order: Jordan (0) -> Brazil (1) -> Bermuda (2) -> back to Jordan
		// Start at step 1 since we initialize already on Jordan
		const visitOrder = [0, 1, 2];
		let visitStep = 1;

		// Function to rotate globe to show a specific testimonial
		const rotateToTestimonial = (
			index: number,
			forceLongWay: boolean = false,
		) => {
			const testimonial = testimonials[index];
			if (!testimonial) return;

			// Convert longitude to rotation - center the point on screen
			// rotation.y = 0 means lng 0 faces camera, so to center lng X we need rotation = -X * (PI/180)
			const targetRot = -testimonial.lng * (Math.PI / 180);

			// Tilt camera to center the latitude
			targetCameraY = latToCameraY(testimonial.lat);

			// Calculate raw difference
			let diff = targetRot - rotationY;

			// Normalize diff to -PI to PI range
			while (diff > Math.PI) diff -= 2 * Math.PI;
			while (diff < -Math.PI) diff += 2 * Math.PI;

			if (forceLongWay) {
				// Continue in SAME direction (clockwise/positive) for the long way back
				// The journey Jordan->Brazil->Bermuda goes positive (westward)
				// So long way back to Jordan should also be positive
				if (diff < 0) {
					diff += 2 * Math.PI; // Make it positive (continue clockwise)
				}
			}

			targetRotationY = rotationY + diff;
		};

		rotateToFn = (index: number) => rotateToTestimonial(index, false);

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.3;
			mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3;
		};

		container.addEventListener("mousemove", handleMouseMove);

		// Cycle through testimonials: Jordan -> Brazil -> Bermuda -> (long way) Jordan
		const cycleTestimonial = () => {
			if (testimonials.length === 0) return;

			const currentIndex = visitOrder[visitStep];
			const nextStep = (visitStep + 1) % visitOrder.length;
			const isReturningToStart = visitStep === visitOrder.length - 1;

			// Rotate to current testimonial, use long way when returning to Jordan
			rotateToTestimonial(currentIndex, isReturningToStart);

			// Update active index and notify
			activeIndex = currentIndex;
			onRotate(currentIndex);

			visitStep = nextStep;
		};

		// Auto-play: cycles through testimonials until user interacts (only in interactive mode)
		if (!backgroundMode) {
			setTimeout(() => {
				// Schedule next cycle (only if user hasn't interacted)
				const scheduleNext = () => {
					if (userHasInteracted) return; // Stop permanently once user takes control

					const isLongRotation = visitStep === 0; // Just finished the long way back
					const delay = isLongRotation ? 8000 : 5000; // More time for the scenic route
					testimonialInterval = setTimeout(() => {
						if (userHasInteracted) return; // Check again before cycling
						cycleTestimonial();
						scheduleNext();
					}, delay);
				};

				// Start with first cycle after initial delay
				if (!userHasInteracted) {
					cycleTestimonial();
					scheduleNext();
				}
			}, 3000); // Wait 3s before first auto-advance
		}

		const globeDataPromise = fetch(globeDataUrl)
			.then((res) => res.json())
			.catch(() => null);

		const boot = async () => {
			const [{ default: ThreeGlobe }, globeData] = await Promise.all([
				import("three-globe"),
				globeDataPromise,
			]);
			if (!isMounted) return;

			globe = new ThreeGlobe({ animateIn: false })
				.globeMaterial(
					new THREE.MeshStandardMaterial({
						color: 0x0a3622,
						roughness: 0.7,
						metalness: 0.1,
						emissive: 0x0b3b22,
						emissiveIntensity: 0.25,
					}),
				)
				.showAtmosphere(false)
				.pointsData(testimonials as Testimonial[])
				.pointColor((d: object) =>
					(d as Testimonial).type === "researcher"
						? "#22c55e"
						: "#14b8a6",
				)
				.pointRadius((d: object) =>
					(d as Testimonial).type === "researcher" ? 1.5 : 1.5,
				)
				.pointAltitude((d: object) =>
					(d as Testimonial).type === "researcher" ? 0.03 : 0.03,
				)
				.arcsData(buildArcData(testimonials) as ArcDatum[])
				.arcColor((d: object) => (d as ArcDatum).color)
				.arcAltitude((d: object) => (d as ArcDatum).altitude)
				.arcStroke((d: object) => (d as ArcDatum).stroke)
				.arcDashLength(1)
				.arcDashGap(2)
				.arcDashInitialGap(
					(d: object) => (d as ArcDatum).dashInitialGap,
				)
				.arcDashAnimateTime((d: object) => (d as ArcDatum).dashTime);

			if (globeData?.features) {
				globe
					.polygonsData(globeData.features)
					.polygonCapColor(() => "rgba(34, 197, 94, 0.35)")
					.polygonSideColor(() => "rgba(16, 185, 129, 0.08)")
					.polygonStrokeColor(() => "rgba(20, 184, 166, 0.2)")
					.polygonAltitude(polygonAltitude);
			}

			scene.add(globe);
		};

		void boot();

		const animate = () => {
			animationId = requestAnimationFrame(animate);

			if (autoRotate) {
				targetRotationY += 0.001;
			}
			// Smooth easing to target - lower value = slower, smoother movement
			rotationY += (targetRotationY - rotationY) * 0.03;

			if (globe) {
				globe.rotation.y = rotationY;
				globe.rotation.x = 0.15; // Slight tilt for 3D perspective
			}
			atmosphere.rotation.y = rotationY;
			atmosphere.rotation.x = 0.15;

			// Smooth camera Y for latitude centering
			cameraY += (targetCameraY - cameraY) * 0.03;

			camera.position.x += (mouseX - camera.position.x) * 0.01;
			camera.position.y +=
				(cameraY - mouseY * 0.5 - camera.position.y) * 0.03;
			camera.lookAt(0, 0, 0);
			camera.updateMatrixWorld();

			const newLabelPositions: LabelPosition[] = [];
			const g = globe; // capture for TypeScript
			if (g) {
				g.updateMatrixWorld();
				testimonials.forEach((testimonial, index) => {
					// Use three-globe's own getCoords to get exact point position
					const coords = g.getCoords(
						testimonial.lat,
						testimonial.lng,
						pointAltitude + 0.01,
					);
					const localPos = new THREE.Vector3(
						coords.x,
						coords.y,
						coords.z,
					);
					const worldPos = g.localToWorld(localPos);

					const screenPos = worldPos.clone().project(camera);
					const x = (screenPos.x * 0.5 + 0.5) * sizes.width;
					const y = (-screenPos.y * 0.5 + 0.5) * sizes.height;

					// Check if point faces camera using dot product
					const pointNormal = worldPos.clone().normalize();
					const cameraDir = camera.position.clone().normalize();
					const dotProduct = pointNormal.dot(cameraDir);
					// Asymmetric visibility: appear later from left, disappear earlier on right
					const isOnLeftSide = x < sizes.width / 2;
					const threshold = isOnLeftSide ? 0.45 : 0.7;
					const visible = dotProduct > threshold;

					newLabelPositions.push({
						x,
						y,
						testimonial,
						visible,
						index,
					});
				});
			}
			labelPositions = newLabelPositions;

			updateBackgroundCircle();

			renderer.render(scene, camera);
		};

		animate();

		const handleResize = () => {
			sizes.width = container.clientWidth;
			sizes.height = container.clientHeight;
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();
			renderer.setSize(sizes.width, sizes.height);
			updateBackgroundCircle();
		};

		updateBackgroundCircle();

		window.addEventListener("resize", handleResize);

		return () => {
			isMounted = false;
			clearTimeout(testimonialInterval);
			window.removeEventListener("resize", handleResize);
			container.removeEventListener("mousemove", handleMouseMove);
			renderer.dispose();
			container.innerHTML = "";
		};
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	});
</script>

<div class="relative w-full h-full {className}">
	<div
		bind:this={backgroundCircle}
		aria-hidden="true"
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
		style="background-color: #0a3622;"
	></div>
	<div bind:this={container} class="w-full h-full relative z-10"></div>

	<!-- Hidden testimonial flags - pins popping out from left edge at their latitude -->
	<!-- {#each adjustedFlagPositions as { adjustedY, testimonial, index }}
		<div
			class="absolute z-20 transition-all duration-300"
			style="left: 6px; top: {adjustedY}px; transform: translateY(-50%);"
			title="{testimonial.author} - {testimonial.org}"
		>
			<span
				class="text-2xl block bg-white/80 backdrop-blur-sm rounded-lg px-1.5 py-0.5 shadow-md border border-slate-200/50"
			>
				{testimonial.flag}
			</span>
		</div>
	{/each} -->

	{#if !backgroundMode}
		<!-- Pulsing rings for data-owner nodes (shows data sovereignty) -->
		{#each labelPositions as { x, y, testimonial, visible }}
			{#if testimonial.type === "data-owner"}
				<div
					class="absolute pointer-events-none z-5 transition-opacity duration-300"
					style="left: {x}px; top: {y}px; transform: translate(-50%, -50%); opacity: {visible
						? 1
						: 0};"
				>
					<div class="pulse-ring"></div>
					<div class="pulse-ring pulse-ring-delayed"></div>
				</div>
			{/if}
		{/each}

		<!-- Floating node labels - just flag + company name -->
		{#each labelPositions as { x, y, testimonial, visible, index }, i}
			<div
				class="absolute z-10 transition-opacity duration-300"
				style="left: {x}px; top: {y}px; transform: translate(-50%, -140%); opacity: {visible
					? 1
					: 0}; pointer-events: {visible ? 'auto' : 'none'};"
			>
				<div class="relative">
					<div
						class="bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-slate-200/50 px-2.5 py-1.5 flex items-center gap-1.5"
					>
						<span class="text-base">{testimonial.flag}</span>
						<p
							class="text-xs font-medium text-slate-700 whitespace-nowrap"
						>
							{testimonial.org}
						</p>
					</div>

					<!-- Connector line to node -->
					<div
						class="absolute left-1/2 -translate-x-1/2 top-full w-px h-3 bg-gradient-to-b {testimonial.type ===
						'researcher'
							? 'from-emerald-400/60'
							: 'from-teal-400/60'} to-transparent"
					></div>
				</div>
			</div>
		{/each}
	{/if}
</div>

<style>
	/* Pulsing ring around data-owner nodes - represents data sovereignty */
	.pulse-ring {
		position: absolute;
		width: 24px;
		height: 24px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border: 2px solid rgba(20, 184, 166, 0.6);
		border-radius: 50%;
		animation: pulse-expand 3s ease-out infinite;
	}

	.pulse-ring-delayed {
		animation-delay: 1.5s;
	}

	@keyframes pulse-expand {
		0% {
			width: 8px;
			height: 8px;
			opacity: 0.8;
			border-width: 2px;
		}
		100% {
			width: 40px;
			height: 40px;
			opacity: 0;
			border-width: 1px;
		}
	}
</style>
