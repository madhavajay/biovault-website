<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import { Input } from "$lib/components/ui/input";
	import * as Card from "$lib/components/ui/card";
	import Globe from "$lib/components/Globe.svelte";
	import {
		ArrowRight,
		Shield,
		Globe as GlobeIcon,
		Lock,
		LockKeyhole,
		MousePointer,
		Database,
		Code,
		Users,
		Laptop,
		Server,
		Cloud,
		Microscope,
		Heart,
		Brain,
		Dna,
		Activity,
		Download,
		CheckCircle,
		Eye,
		Terminal,
		FileText,
		Check,
		Workflow,
		CirclePlay,
		Compass,
		Settings,
		X,
		Zap,
		RefreshCw,
		Sparkles,
		Github,
		FileText as PaperIcon,
	} from "@lucide/svelte";
	import { onMount } from "svelte";

	let email = $state("");
	let isSubmitting = $state(false);
	let submitMessage = $state("");

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitMessage = "";

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			submitMessage = "Thanks! We'll be in touch soon.";
			email = "";
		} catch {
			submitMessage = "Something went wrong. Please try again.";
		} finally {
			isSubmitting = false;
		}
	}

	// Rotating words for hero headline
	const rotatingWords = [
		"Power rare disease research",
		"Train diagnostic models",
		"Run a multi-party GWAS",
		"Analyze medical imaging",
		"Explore single-cell profiles",
	];
	let currentWordIndex = $state(0);
	let displayedText = $state("");
	let selectionLength = $state(0);
	let isSelecting = $state(false);
	let showCursor = $state(false);
	let wordQueue: number[] = [];

	// Shuffle array using Fisher-Yates
	function shuffleArray<T>(arr: T[]): T[] {
		const result = [...arr];
		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}
		return result;
	}

	// Create a shuffled queue of all word indices, ensuring excludeFirst isn't first
	function createShuffledQueue(excludeFirst: number): number[] {
		let indices = rotatingWords.map((_, i) => i);
		indices = shuffleArray(indices);
		// If the excluded index ended up first, swap it with another position
		if (indices[0] === excludeFirst && indices.length > 1) {
			const swapIdx =
				1 + Math.floor(Math.random() * (indices.length - 1));
			[indices[0], indices[swapIdx]] = [indices[swapIdx], indices[0]];
		}
		return indices;
	}

	// Get next word from queue, refill if empty
	function getNextWordIndex(currentIndex: number): number {
		if (wordQueue.length === 0) {
			wordQueue = createShuffledQueue(currentIndex);
		}
		return wordQueue.shift()!;
	}

	onMount(() => {
		const typeSpeed = 45;
		const selectSpeed = 10;
		const basePause = 2000;
		const pauseAfterSelect = 300;
		const pauseBeforeType = 0;

		// Get last shown word from localStorage
		const lastIndex = parseInt(
			localStorage.getItem("bv-hero-word") ?? "-1",
			10,
		);
		// Initialize queue and get first word
		wordQueue = createShuffledQueue(lastIndex);
		currentWordIndex = wordQueue.shift()!;
		localStorage.setItem("bv-hero-word", String(currentWordIndex));

		// Calculate max length for consistent timing
		const maxLength = Math.max(...rotatingWords.map((w) => w.length));
		const totalVisibleTime = maxLength * typeSpeed + basePause;

		let timeout: ReturnType<typeof setTimeout>;

		function tick() {
			const currentWord = rotatingWords[currentWordIndex];

			if (isSelecting) {
				// Selecting - drag cursor from end to start
				selectionLength--;
				if (selectionLength <= 0) {
					// Fully selected, delete after pause
					timeout = setTimeout(() => {
						displayedText = "";
						selectionLength = 0;
						isSelecting = false;
						showCursor = false;
						// Get next word from shuffled queue
						currentWordIndex = getNextWordIndex(currentWordIndex);
						localStorage.setItem(
							"bv-hero-word",
							String(currentWordIndex),
						);
						timeout = setTimeout(tick, pauseBeforeType);
					}, pauseAfterSelect);
					return;
				}
				timeout = setTimeout(tick, selectSpeed);
				return;
			}

			// Typing
			displayedText = currentWord.slice(0, displayedText.length + 1);

			if (displayedText === currentWord) {
				// Calculate pause so total visible time is consistent
				const typingTime = currentWord.length * typeSpeed;
				const pauseBeforeDelete = totalVisibleTime - typingTime;

				// Finished typing, pause then start selecting from end
				timeout = setTimeout(() => {
					showCursor = true;
					isSelecting = true;
					selectionLength = currentWord.length;
					tick();
				}, pauseBeforeDelete);
				return;
			}

			timeout = setTimeout(tick, typeSpeed);
		}

		// Start typing immediately
		tick();

		return () => clearTimeout(timeout);
	});

	// Interactive demo state
	let demoTab = $state<"researcher" | "dataowner">("researcher");

	// Testimonials with geographic data for the globe
	type Testimonial = {
		lat: number;
		lng: number;
		quote: string;
		author: string;
		org: string;
		flag: string;
		type: "data-owner" | "researcher";
	};

	const testimonials: Testimonial[] = [
		{
			lat: 31.95,
			lng: 35.93,
			quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
			author: "Research Partner",
			org: "Jordan",
			flag: "🇯🇴",
			type: "data-owner" as const,
		},
		{
			lat: -15.79,
			lng: -47.88,
			quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
			author: "Research Partner",
			org: "Brazil",
			flag: "🇧🇷",
			type: "data-owner" as const,
		},
		{
			lat: 32.3,
			lng: -64.75,
			quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
			author: "Research Partner",
			org: "Bermuda",
			flag: "🇧🇲",
			type: "data-owner" as const,
		},
	];

	// Globe scroll animation - starts behind demo section
	let globeScale = $state(0.3);
	let globeOpacity = $state(0);
	let globeFixed = $state(true);
	let globeTopPosition = $state(0);

	// Smooth easing function
	const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

	onMount(() => {
		let targetScale = 0.3;
		let targetOpacity = 0;
		let rafId: number;

		const lerp = (start: number, end: number, factor: number) =>
			start + (end - start) * factor;

		const animate = () => {
			// Smooth interpolation toward target values
			globeScale = lerp(globeScale, targetScale, 0.06);
			globeOpacity = lerp(globeOpacity, targetOpacity, 0.06);
			rafId = requestAnimationFrame(animate);
		};

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			// Start appearing after scrolling past 0.3 viewport height
			const startThreshold = windowHeight * 0.3;
			// Stop following at 1.2 viewport heights
			const stopThreshold = windowHeight * 1.2;

			if (scrollY < startThreshold) {
				// Before threshold - globe invisible
				targetScale = 0.3;
				targetOpacity = 0;
				globeFixed = true;
			} else if (scrollY < stopThreshold) {
				// Between start and stop - gradually appear and grow
				const scrollProgress =
					(scrollY - startThreshold) /
					(stopThreshold - startThreshold);
				const easedProgress = easeOutCubic(scrollProgress);
				// Scale from 0.3 to 1.1 gradually
				targetScale = 0.3 + easedProgress * 0.8;
				// Opacity from 0 to 0.3
				targetOpacity = easedProgress * 0.3;
				globeFixed = true;
			} else {
				// After stopThreshold - convert to absolute positioning
				globeFixed = false;
				globeTopPosition = stopThreshold;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Initial call
		rafId = requestAnimationFrame(animate);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.1 },
		);

		document.querySelectorAll(".animate-on-scroll").forEach((el) => {
			observer.observe(el);
		});

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
			cancelAnimationFrame(rafId);
		};
	});
</script>

{#snippet notebookMockup()}
	<div
		class="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden h-full pointer-events-none select-none"
	>
		<div
			class="flex items-center px-4 py-2.5 bg-slate-100 border-b border-slate-200"
		>
			<div class="flex gap-1.5 w-12">
				<div class="w-3 h-3 rounded-full bg-red-500/60"></div>
				<div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
				<div class="w-3 h-3 rounded-full bg-green-500/60"></div>
			</div>
			<div class="flex-1 flex items-center justify-center gap-1.5">
				<Microscope class="h-3.5 w-3.5 text-teal-600" />
				<span class="text-xs font-medium text-slate-700"
					>Researcher</span
				>
			</div>
			<div class="w-12"></div>
		</div>
		<div
			class="flex items-center gap-1 px-3 py-1.5 bg-slate-50 border-b border-slate-200"
		>
			<div class="p-1.5 rounded">
				<svg
					class="w-4 h-4 text-slate-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					></path></svg
				>
			</div>
			<div class="p-1.5 rounded">
				<svg
					class="w-4 h-4 text-slate-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
					></path><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path></svg
				>
			</div>
			<div class="p-1.5 rounded">
				<svg
					class="w-4 h-4 text-slate-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
					></path></svg
				>
			</div>
			<div class="w-px h-4 bg-slate-300 mx-2"></div>
			<select
				class="text-xs bg-white border border-slate-300 rounded px-2 py-1 text-slate-600"
			>
				<option>Code</option>
			</select>
			<div class="flex-1"></div>
			<div class="flex items-center gap-1.5 text-xs text-slate-500">
				<div class="w-2 h-2 rounded-full bg-emerald-500"></div>
				<span>Python 3</span>
			</div>
		</div>
		<div class="bg-white">
			<div class="border-l-4 border-teal-400/50 bg-teal-50">
				<div class="flex">
					<div
						class="w-12 py-2.5 text-right pr-2 text-xs text-slate-500 font-mono"
					>
						[1]:
					</div>
					<div
						class="flex-1 py-2.5 pr-3 font-mono text-xs sm:text-sm text-slate-800"
					>
						<p>
							<span class="text-purple-600">import</span> biovault
							<span class="text-purple-600">as</span> bv
						</p>
						<p>
							<span class="text-purple-600">import</span> pandas
							<span class="text-purple-600">as</span> pd
						</p>
					</div>
				</div>
			</div>
			<div class="border-l-4 border-transparent">
				<div class="flex">
					<div
						class="w-12 py-2.5 text-right pr-2 text-xs text-slate-500 font-mono"
					>
						[2]:
					</div>
					<div
						class="flex-1 py-2.5 pr-3 font-mono text-xs sm:text-sm text-slate-800"
					>
						<p>bv.discover()</p>
					</div>
				</div>
				<div class="flex pb-2">
					<div class="w-12"></div>
					<div
						class="flex-1 pr-3 font-mono text-xs sm:text-sm text-slate-600 bg-slate-100 rounded-md mx-3 p-2.5"
					>
						<p class="text-slate-800 mb-1">
							Available mock datasets:
						</p>
						<p class="ml-2">
							• jordan-biobank-mock <span class="text-slate-500"
								>(1,247)</span
							>
						</p>
						<p class="ml-2">
							• brazil-genomics-mock <span class="text-slate-500"
								>(2,103)</span
							>
						</p>
					</div>
				</div>
			</div>
			<div class="border-l-4 border-transparent">
				<div class="flex">
					<div
						class="w-12 py-2.5 text-right pr-2 text-xs text-slate-500 font-mono"
					>
						[3]:
					</div>
					<div
						class="flex-1 py-2.5 pr-3 font-mono text-xs sm:text-sm text-slate-800"
					>
						<p>result = bv.submit(</p>
						<p class="ml-4">
							pipeline=<span class="text-emerald-500">"gwas"</span
							>,
						</p>
						<p class="ml-4">
							target=<span class="text-emerald-500"
								>"jordan-biobank-mock"</span
							>
						</p>
						<p>)</p>
					</div>
				</div>
				<div class="flex pb-3">
					<div class="w-12"></div>
					<div
						class="flex-1 pr-3 font-mono text-xs sm:text-sm bg-slate-100 rounded-md mx-3 p-2.5"
					>
						<p class="text-amber-600">→ Packaging code...</p>
						<p class="text-emerald-600">✓ Request submitted</p>
						<p class="text-slate-500 mt-1">
							Waiting for approval...
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/snippet}

{#snippet dashboardMockup()}
	<div
		class="rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden h-full flex flex-col pointer-events-none select-none"
	>
		<div
			class="flex items-center px-4 py-2.5 bg-slate-100 border-b border-slate-200"
		>
			<div class="flex gap-1.5 w-12">
				<div class="w-3 h-3 rounded-full bg-red-500/60"></div>
				<div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
				<div class="w-3 h-3 rounded-full bg-green-500/60"></div>
			</div>
			<div class="flex-1 flex items-center justify-center gap-1.5">
				<Database class="h-3.5 w-3.5 text-emerald-600" />
				<span class="text-xs font-medium text-slate-700"
					>Data Owner</span
				>
			</div>
			<div class="w-12"></div>
		</div>
		<div class="flex flex-1">
			<!-- Sidebar -->
			<div
				class="w-10 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-3 gap-3"
			>
				<div class="w-5 h-5 rounded flex items-center justify-center">
					<Compass class="h-3 w-3 text-slate-400" />
				</div>
				<div class="w-5 h-5 rounded flex items-center justify-center">
					<Workflow class="h-3 w-3 text-slate-400" />
				</div>
				<div class="w-5 h-5 rounded flex items-center justify-center">
					<Database class="h-3 w-3 text-slate-400" />
				</div>
				<div
					class="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center"
				>
					<Users class="h-3 w-3 text-emerald-600" />
				</div>
				<div
					class="mt-auto w-5 h-5 rounded flex items-center justify-center"
				>
					<Settings class="h-3 w-3 text-slate-400" />
				</div>
			</div>
			<!-- Main content -->
			<div class="flex-1 p-3 bg-white space-y-3">
				<!-- Stats row -->
				<div class="flex gap-3 text-xs">
					<span class="text-teal-600 font-medium">1 pending</span>
					<span class="text-slate-400">·</span>
					<span class="text-slate-500">8 approved</span>
				</div>

				<!-- Request card -->
				<div
					class="rounded-lg border border-slate-200 p-3 space-y-2.5 bg-slate-50"
				>
					<div class="flex items-center justify-between">
						<span class="text-xs font-medium text-slate-700"
							>Visitation Request</span
						>
						<span
							class="text-[10px] text-teal-600 bg-teal-100 px-1.5 py-0.5 rounded"
							>Pending</span
						>
					</div>
					<p class="text-xs text-slate-500">researcher@mit.edu</p>
					<p class="text-xs text-slate-700 leading-relaxed">
						"Looking for chr6 variants linked to disease risk"
					</p>
					<div
						class="flex items-start gap-1.5 text-[11px] text-slate-500"
					>
						<Sparkles
							class="h-3 w-3 text-purple-500 mt-0.5 shrink-0"
						/>
						<span
							>Reads VCF, filters chr6, returns p-values · ~12 min</span
						>
					</div>
					<div class="flex gap-1.5 pt-1">
						<div
							class="h-7 flex-1 text-[11px] flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700"
						>
							Run on Mock
						</div>
						<div
							class="h-7 flex-1 text-[11px] flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700"
						>
							Inspect Code
						</div>
						<div
							class="bg-emerald-500 text-white h-7 flex-1 text-[11px] flex items-center justify-center rounded-md"
						>
							Approve
						</div>
					</div>
				</div>

				<!-- Recent activity -->
				<div class="text-[10px] text-slate-500 uppercase tracking-wide">
					Recent
				</div>
				<div
					class="rounded-lg border border-slate-200 p-2.5 flex items-center justify-between bg-slate-100"
				>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-3 w-3 text-emerald-500" />
						<span class="text-xs text-slate-700">harvard@edu</span>
					</div>
					<span class="text-[10px] text-slate-500">2h ago</span>
				</div>
			</div>
		</div>
	</div>
{/snippet}

<svelte:head>
	<title>BioVault - Privacy-First Biomedical Collaboration</title>
	<meta
		name="description"
		content="Open-source infrastructure for privacy-preserving biomedical collaboration. Your data stays with you, only insights travel."
	/>
</svelte:head>

<div class="min-h-screen bg-background relative">
	<!-- Background Globe -->
	<div
		class="z-0 pointer-events-none flex items-center justify-center {globeFixed
			? 'fixed inset-0'
			: 'absolute left-0 right-0'}"
		style="opacity: {globeOpacity}; transform: scale({globeScale}); will-change: transform, opacity; {globeFixed
			? ''
			: `top: ${globeTopPosition}px; height: 100vh;`}"
	>
		<Globe backgroundMode={true} class="w-full h-full" />
	</div>

	<!-- Navigation -->
	<nav
		class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
	>
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center gap-2">
					<img
						src="/logo.png"
						alt="BioVault"
						class="h-8 w-8 rounded-lg"
					/>
					<span class="text-lg font-semibold text-white"
						>BioVault</span
					>
				</div>
				<div class="hidden md:flex items-center gap-6">
					<a
						href="#how-it-works"
						class="text-sm text-white/70 hover:text-white transition-colors"
						>Docs</a
					>
					<a
						href="#demos"
						class="text-sm text-white/70 hover:text-white transition-colors"
						>Examples</a
					>
					<a
						href="#features"
						class="text-sm text-white/70 hover:text-white transition-colors"
						>Features</a
					>
				</div>
				<div class="flex items-center gap-3">
					<a
						href="#contact"
						class="text-sm text-white/70 hover:text-white transition-colors"
					>
						Contact
					</a>
					<Button
						size="sm"
						class="bg-bv-green text-white hover:bg-bv-green/90 h-7 text-xs"
					>
						Download
					</Button>
				</div>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="relative pt-16 overflow-hidden z-10">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
			<div class="flex flex-col items-center text-center gap-6 lg:gap-8">
				<!-- Top: Text content -->
				<div class="w-full max-w-3xl space-y-6">
					<h1
						class="text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-foreground"
					>
						<span
							class="whitespace-nowrap relative font-bold pl-[0.25em]"
							>{#if isSelecting}<span
									>{displayedText.slice(
										0,
										selectionLength,
									)}</span
								><span class="bg-bv-green text-white"
									>{displayedText.slice(
										selectionLength,
									)}</span
								>{:else}<span>{displayedText}</span>{/if}<span
								class="inline-block w-0 overflow-visible {isSelecting
									? 'opacity-0'
									: 'animate-blink'} text-bv-green text-[0.85em] relative -top-1"
								>|</span
							></span
						>
						<br />
						<span
							class="text-2xl sm:text-3xl lg:text-4xl text-foreground/70"
							>Without sharing your raw data</span
						>
					</h1>
					<div class="pt-8 flex flex-wrap gap-3 justify-center">
						<Button
							size="lg"
							class="bg-bv-green text-white hover:bg-bv-green/90 h-12 px-6 text-base"
						>
							<Download class="h-5 w-5 mr-2" />
							Download for macOS
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="h-12 px-5 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
							href="https://github.com/biovault/biovault"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github class="h-5 w-5 mr-2" />
							GitHub
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="h-12 px-5 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
							href="https://arxiv.org/abs/0000.00000"
							target="_blank"
							rel="noopener noreferrer"
						>
							<PaperIcon class="h-5 w-5 mr-2" />
							Read Paper
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Demo -->
	<section id="how-it-works" class="py-12 overflow-hidden relative z-10">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<!-- Mobile: Tab buttons -->
			<div class="flex justify-center mb-4 md:hidden">
				<div class="inline-flex rounded-lg bg-muted p-1">
					<button
						onclick={() => (demoTab = "researcher")}
						class="px-5 py-2 rounded-md text-sm font-medium transition-all {demoTab ===
						'researcher'
							? 'bg-background text-foreground shadow-sm'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						<Microscope
							class="h-4 w-4 inline-block mr-1.5 -mt-0.5"
						/>
						Researcher
					</button>
					<button
						onclick={() => (demoTab = "dataowner")}
						class="px-5 py-2 rounded-md text-sm font-medium transition-all {demoTab ===
						'dataowner'
							? 'bg-background text-foreground shadow-sm'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						<Database class="h-4 w-4 inline-block mr-1.5 -mt-0.5" />
						Data Owner
					</button>
				</div>
			</div>

			<!-- Mobile: Single mockup -->
			<div class="md:hidden">
				{#if demoTab === "researcher"}
					{@render notebookMockup()}
				{:else}
					{@render dashboardMockup()}
				{/if}
			</div>

			<!-- Desktop: Dark container with both mockups -->
			<div
				class="hidden md:block rounded-2xl overflow-hidden shadow-2xl"
				style="background: linear-gradient(135deg, #0a1f14 0%, #0d2a1a 50%, #122e1f 100%);"
			>
				<!-- macOS menu bar -->
				<div
					class="flex items-center justify-between px-4 py-1.5 bg-black/30 backdrop-blur-sm"
				>
					<div class="flex items-center gap-4">
						<svg
							class="h-4 w-4 text-white/80"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
							/>
						</svg>
						<span class="text-white/70 text-xs font-medium"
							>BioVault</span
						>
					</div>
					<div class="text-white/50 text-xs">
						{new Date().toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "2-digit",
						})}
					</div>
				</div>

				<!-- Both mockups side by side -->
				<div class="grid grid-cols-2 gap-6 p-6 items-stretch">
					{@render notebookMockup()}
					{@render dashboardMockup()}
				</div>
			</div>

			<!-- Caption -->
			<p class="text-center text-muted-foreground text-sm mt-6">
				Code travels to data. Data stays sovereign.
			</p>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-16 relative z-10">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4 text-foreground">
					Trusted by research partners worldwide
				</h2>
				<p class="text-muted-foreground">
					BioVault enables researchers across the globe to collaborate
					as equal partners.
				</p>
			</div>

			<!-- Testimonial cards in a grid -->
			<div class="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
				{#each testimonials as testimonial}
					<Card.Root class="h-full">
						<Card.Header class="p-4 pb-2">
							<div class="flex items-center gap-3">
								<span class="text-2xl">{testimonial.flag}</span>
								<div class="min-w-0">
									<Card.Title
										class="text-sm font-semibold truncate"
									>
										{testimonial.org}
									</Card.Title>
									<Card.Description class="text-xs">
										{testimonial.author}
									</Card.Description>
								</div>
							</div>
						</Card.Header>
						<Card.Content class="px-4 pb-4 pt-0">
							<p class="text-sm text-muted-foreground italic">
								"{testimonial.quote}"
							</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<!-- Demo Apps Section -->
	<section id="demos" class="py-16 relative z-10">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4 text-foreground">
					Demos speak louder than words
				</h2>
				<p class="text-muted-foreground">
					BioVault powers demanding biomedical workflows across the
					globe.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
				{#each [{ title: "GWAS Analysis", desc: "Cross-border genetic studies", color: "from-emerald-500 to-teal-500", icon: Dna }, { title: "Single Cell", desc: "Remote scRNA-seq analysis", color: "from-teal-500 to-cyan-500", icon: Microscope }, { title: "Medical Imaging", desc: "Federated radiology AI", color: "from-cyan-500 to-blue-500", icon: Brain }, { title: "Variant Analysis", desc: "Rare disease interpretation", color: "from-blue-500 to-indigo-500", icon: Activity }] as demo}
					<div
						class="group rounded-xl border border-border bg-card overflow-hidden hover:border-bv-green/50 hover:shadow-lg transition-all cursor-pointer"
					>
						<div
							class="aspect-[4/3] bg-gradient-to-br {demo.color} p-4 flex items-center justify-center relative overflow-hidden"
						>
							<div class="absolute inset-0 bg-white/5"></div>
							<demo.icon class="h-12 w-12 text-white/80" />
						</div>
						<div class="p-4">
							<h3
								class="font-semibold text-foreground group-hover:text-bv-green transition-colors"
							>
								{demo.title}
							</h3>
							<p class="text-sm text-muted-foreground">
								{demo.desc}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-16 relative z-10">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="max-w-xl mx-auto text-center">
				<h2 class="text-3xl font-bold mb-4 text-foreground">
					Get started
				</h2>
				<p class="text-muted-foreground mb-8">
					Download BioVault and start collaborating without
					compromising data sovereignty.
				</p>

				<Button
					size="lg"
					class="bg-bv-green text-white hover:bg-bv-green/90 h-12 px-6"
				>
					<Download class="h-5 w-5 mr-2" />
					Download for macOS
				</Button>

				<div class="max-w-md mx-auto mt-10">
					<p class="text-sm text-muted-foreground mb-3">
						Or get notified about updates:
					</p>
					<form onsubmit={handleSubmit} class="flex gap-2">
						<Input
							type="email"
							placeholder="Enter your email"
							bind:value={email}
							required
							class="h-10"
						/>
						<Button
							type="submit"
							disabled={isSubmitting}
							class="bg-bv-green text-white hover:bg-bv-green/90 h-10 px-4"
						>
							{isSubmitting ? "..." : "Subscribe"}
						</Button>
					</form>
					{#if submitMessage}
						<p
							class="text-sm mt-2 {submitMessage.includes(
								'Thanks',
							)
								? 'text-bv-green'
								: 'text-destructive'}"
						>
							{submitMessage}
						</p>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-border py-8 relative z-10 bg-background">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div
				class="flex flex-col md:flex-row items-center justify-between gap-4"
			>
				<div class="flex items-center gap-2">
					<img
						src="/logo.png"
						alt="BioVault"
						class="h-7 w-7 rounded-lg"
					/>
					<span class="font-semibold text-foreground">BioVault</span>
				</div>
				<p class="text-sm text-foreground/60">
					© 2026 BioVault · Apache 2.0 License
				</p>
				<div class="flex items-center gap-4">
					<a
						href="/docs"
						class="text-sm text-foreground/60 hover:text-foreground"
						>Docs</a
					>
					<a
						href="https://github.com/biovault"
						target="_blank"
						rel="noopener"
						class="text-sm text-foreground/60 hover:text-foreground"
						>GitHub</a
					>
				</div>
			</div>
		</div>
	</footer>
</div>
