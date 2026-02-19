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
		Mail,
		Quote,
	} from "@lucide/svelte";
	import { onMount } from "svelte";
	import { contactOpen } from "$lib/stores/contact";

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

	// Globe - fixed full size, detaches after scrolling past
	let globeFixed = $state(true);
	let globeTopPosition = $state(0);

	onMount(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const stopThreshold = windowHeight * 1.2;

			if (scrollY < stopThreshold) {
				globeFixed = true;
			} else {
				globeFixed = false;
				globeTopPosition = stopThreshold;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Initial call

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
		};
	});
</script>

{#snippet notebookMockup()}
	<div
		class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] shadow-none overflow-hidden h-full pointer-events-none select-none"
	>
		<!-- Window chrome - hidden on mobile -->
		<div
			class="hidden md:block px-4 py-2.5 bg-slate-100 dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-700"
		>
			<div class="flex items-center">
				<div class="flex gap-1.5 w-12">
					<div class="w-3 h-3 rounded-full bg-red-500/60"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
					<div class="w-3 h-3 rounded-full bg-green-500/60"></div>
				</div>
				<div class="flex-1 flex items-center justify-center gap-1.5">
					<Microscope class="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
					<span class="text-xs font-medium text-slate-700 dark:text-slate-300"
						>Researcher</span
					>
				</div>
				<div class="w-12"></div>
			</div>
			<p class="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-1">
				Write code from anywhere. Your analysis travels to the data.
			</p>
		</div>
		<!-- Mobile compact header -->
		<div class="md:hidden px-3 py-2 bg-slate-100 dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-700">
			<p class="text-[11px] text-slate-500 dark:text-slate-400 text-center">
				Write code from anywhere. Your analysis travels to the data.
			</p>
		</div>
		<!-- Toolbar - hidden on mobile -->
		<div
			class="hidden md:flex items-center gap-1 px-3 py-1.5 bg-slate-50 dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-700"
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
			<div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-2"></div>
			<select
				class="text-xs bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-600 rounded px-2 py-1 text-slate-600 dark:text-slate-400"
			>
				<option>Code</option>
			</select>
			<div class="flex-1"></div>
			<div class="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
				<div class="w-2 h-2 rounded-full bg-emerald-500"></div>
				<span>Python 3</span>
			</div>
		</div>
		<div class="bg-white dark:bg-[#111827]">
			<div class="border-l-4 border-teal-400/50 dark:border-blue-500/50 bg-teal-50 dark:bg-[#1a1f2e]">
				<div class="flex">
					<div
						class="hidden md:block w-12 py-2.5 text-right pr-2 text-xs text-slate-500 dark:text-slate-500 font-mono"
					>
						[1]:
					</div>
					<div
						class="flex-1 py-2 md:py-2.5 px-3 md:px-0 md:pr-3 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200"
					>
						<p>
							<span class="text-purple-600 dark:text-green-400">import</span> biovault
							<span class="text-purple-600 dark:text-green-400">as</span> bv
						</p>
						<p>
							<span class="text-purple-600 dark:text-green-400">import</span> pandas
							<span class="text-purple-600 dark:text-green-400">as</span> pd
						</p>
					</div>
				</div>
			</div>
			<div class="border-l-4 border-transparent">
				<div class="flex">
					<div
						class="hidden md:block w-12 py-2.5 text-right pr-2 text-xs text-slate-500 dark:text-slate-500 font-mono"
					>
						[2]:
					</div>
					<div
						class="flex-1 py-2 md:py-2.5 px-3 md:px-0 md:pr-3 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200"
					>
						<p>bv.discover()</p>
					</div>
				</div>
				<div class="flex pb-2">
					<div class="hidden md:block w-12"></div>
					<div
						class="flex-1 pr-3 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#1a1f2e] rounded-md mx-3 p-2"
					>
						<p class="text-slate-800 dark:text-slate-200 mb-1">
							Available mock datasets:
						</p>
						<p class="ml-2">
							• jordan-biobank-mock <span class="text-slate-500 dark:text-slate-500"
								>(1,247)</span
							>
						</p>
						<p class="ml-2">
							• brazil-genomics-mock <span class="text-slate-500 dark:text-slate-500"
								>(2,103)</span
							>
						</p>
					</div>
				</div>
			</div>
			<div class="border-l-4 border-transparent">
				<div class="flex">
					<div
						class="hidden md:block w-12 py-2.5 text-right pr-2 text-xs text-slate-500 dark:text-slate-500 font-mono"
					>
						[3]:
					</div>
					<div
						class="flex-1 py-2 md:py-2.5 px-3 md:px-0 md:pr-3 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200"
					>
						<p>result = bv.submit(</p>
						<p class="ml-4">
							pipeline=<span class="text-emerald-500 dark:text-sky-400">"gwas"</span
							>,
						</p>
						<p class="ml-4">
							target=<span class="text-emerald-500 dark:text-sky-400"
								>"jordan-biobank-mock"</span
							>
						</p>
						<p>)</p>
					</div>
				</div>
				<div class="flex pb-2 md:pb-3">
					<div class="hidden md:block w-12"></div>
					<div
						class="flex-1 pr-3 font-mono text-xs sm:text-sm bg-slate-100 dark:bg-[#1a1f2e] rounded-md mx-3 p-2"
					>
						<p class="text-amber-600 dark:text-amber-400">→ Packaging code...</p>
						<p class="text-emerald-600 dark:text-emerald-400">✓ Request submitted</p>
						<p class="text-slate-500 dark:text-slate-400 mt-1">
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
		class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] shadow-none overflow-hidden h-full flex flex-col pointer-events-none select-none"
	>
		<!-- Window chrome - hidden on mobile -->
		<div
			class="hidden md:block px-4 py-2.5 bg-slate-100 dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-700"
		>
			<div class="flex items-center">
				<div class="flex gap-1.5 w-12">
					<div class="w-3 h-3 rounded-full bg-red-500/60"></div>
					<div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
					<div class="w-3 h-3 rounded-full bg-green-500/60"></div>
				</div>
				<div class="flex-1 flex items-center justify-center gap-1.5">
					<Database class="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
					<span class="text-xs font-medium text-slate-700 dark:text-slate-300"
						>Data Owner</span
					>
				</div>
				<div class="w-12"></div>
			</div>
			<p class="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-1">
				Stay in control. Review, approve, or reject every request.
			</p>
		</div>
		<!-- Mobile compact header -->
		<div class="md:hidden px-3 py-2 bg-slate-100 dark:bg-[#1f2937] border-b border-slate-200 dark:border-slate-700">
			<p class="text-[11px] text-slate-500 dark:text-slate-400 text-center">
				Stay in control. Review, approve, or reject every request.
			</p>
		</div>
		<div class="flex flex-1">
			<!-- Sidebar - hidden on mobile -->
			<div
				class="hidden md:flex w-10 bg-slate-50 dark:bg-[#1f2937] border-r border-slate-200 dark:border-slate-700 flex-col items-center py-3 gap-3"
			>
				<div class="w-5 h-5 rounded flex items-center justify-center">
					<Compass class="h-3 w-3 text-slate-400 dark:text-slate-500" />
				</div>
				<div class="w-5 h-5 rounded flex items-center justify-center">
					<Workflow class="h-3 w-3 text-slate-400 dark:text-slate-500" />
				</div>
				<div class="w-5 h-5 rounded flex items-center justify-center">
					<Database class="h-3 w-3 text-slate-400 dark:text-slate-500" />
				</div>
				<div
					class="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center"
				>
					<Users class="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
				</div>
				<div
					class="mt-auto w-5 h-5 rounded flex items-center justify-center"
				>
					<Settings class="h-3 w-3 text-slate-400 dark:text-slate-500" />
				</div>
			</div>
			<!-- Main content -->
			<div class="flex-1 p-2.5 md:p-3 bg-white dark:bg-[#111827] space-y-2.5 md:space-y-3">
				<!-- Stats row -->
				<div class="flex gap-3 text-xs">
					<span class="text-teal-600 dark:text-teal-400 font-medium">1 pending</span>
					<span class="text-slate-400 dark:text-slate-600">·</span>
					<span class="text-slate-500 dark:text-slate-400">8 approved</span>
				</div>

				<!-- Request card -->
				<div
					class="rounded-lg border border-slate-200 dark:border-slate-700 p-2.5 md:p-3 space-y-2 md:space-y-2.5 bg-slate-50 dark:bg-[#1a1f2e]"
				>
					<div class="flex items-center justify-between">
						<span class="text-xs font-medium text-slate-700 dark:text-slate-300"
							>Visitation Request</span
						>
						<span
							class="text-[10px] text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/40 px-1.5 py-0.5 rounded"
							>Pending</span
						>
					</div>
					<p class="text-xs text-slate-500 dark:text-slate-400">researcher@mit.edu</p>
					<p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
						"Looking for chr6 variants linked to disease risk"
					</p>
					<div
						class="flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400"
					>
						<Sparkles
							class="h-3 w-3 text-purple-500 dark:text-purple-400 mt-0.5 shrink-0"
						/>
						<span
							>Reads VCF, filters chr6, returns p-values · ~12 min</span
						>
					</div>
					<div class="flex gap-1.5 pt-1">
						<div
							class="h-7 flex-1 text-[11px] flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300"
						>
							<span class="hidden md:inline">Run on Mock</span><span class="md:hidden">Mock</span>
						</div>
						<div
							class="h-7 flex-1 text-[11px] flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#111827] text-slate-700 dark:text-slate-300"
						>
							<span class="hidden md:inline">Inspect Code</span><span class="md:hidden">Code</span>
						</div>
						<div
							class="bg-emerald-500 text-white h-7 flex-1 text-[11px] flex items-center justify-center rounded-md"
						>
							Approve
						</div>
					</div>
				</div>

				<!-- Recent activity -->
				<div class="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
					Recent
				</div>
				<div
					class="rounded-lg border border-slate-200 dark:border-slate-700 p-2.5 flex items-center justify-between bg-slate-100 dark:bg-[#1a1f2e]"
				>
					<div class="flex items-center gap-2">
						<CheckCircle class="h-3 w-3 text-emerald-500 dark:text-emerald-400" />
						<span class="text-xs text-slate-700 dark:text-slate-300">harvard@edu</span>
					</div>
					<span class="text-[10px] text-slate-500 dark:text-slate-400">2h ago</span>
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
	<!-- Background Globe (commented out) -->
	<!-- <div
		class="z-0 pointer-events-none flex items-center justify-center overflow-hidden {globeFixed
			? 'fixed inset-0'
			: 'absolute left-0 right-0'}"
		style="opacity: 0.25; transform: translateY(5%); {globeFixed
			? ''
			: `top: ${globeTopPosition}px; height: 100vh;`}"
	>
		<Globe backgroundMode={true} class="w-full h-full" />
	</div> -->

	<!-- Hero Section -->
	<section class="relative pt-24 overflow-hidden z-10">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8">
			<div class="flex flex-col items-center text-center gap-5 lg:gap-8">
				<!-- Top: Text content -->
				<div class="w-full max-w-3xl space-y-4 sm:space-y-6">
					<h1
						class="text-4xl max-[340px]:text-[1.9rem] sm:text-4xl lg:text-5xl tracking-tight leading-tight text-foreground"
					>
						<span
							class="relative font-bold pl-[0.1em] sm:pl-[0.25em] block min-h-[2.5em] sm:min-h-0"
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
						<span
							class="block mt-2 sm:mt-1 text-xl sm:text-2xl lg:text-3xl text-foreground/80 -mx-2 sm:mx-0"
							>Without sharing your raw data</span
						>
					</h1>
					<p class="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto">
						A free, open-source data visitation platform for equitable global collaboration in biomedicine. Whether you hold data or need access to it, we're looking for partners to shape what we build.
					</p>
					<div class="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center w-full max-w-xs sm:max-w-none mx-auto">
						<Button
							size="lg"
							class="h-9 px-4 text-sm sm:h-11 sm:px-6 sm:text-base bg-foreground/5 text-foreground hover:bg-foreground/10 border border-border font-medium transition-all"
							href="https://www.biorxiv.org/content/10.64898/2026.02.12.705603v1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<PaperIcon class="h-4 w-4 mr-1.5" />
							Read on bioRxiv
						</Button>
						<Button
							size="lg"
							class="h-9 px-4 text-sm sm:h-11 sm:px-6 sm:text-base bg-bv-green text-white hover:bg-bv-green-light font-medium transition-all"
							onclick={() => $contactOpen = true}
						>
							<Mail class="h-4 w-4 mr-1.5" />
							Get in Touch
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="py-4 sm:py-8 relative z-10">
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<p class="text-center text-sm font-medium tracking-widest uppercase text-bv-green mb-10 sm:mb-12">Hear from our partners around the world</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl mx-auto">
				<!-- Dr. Carika Weldon -->
				<div class="flex flex-col items-center text-center pb-8 border-b border-border/50 md:pb-0 md:border-b-0">
					<img src="/carika.png" alt="Dr. Carika Weldon" class="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-bv-green/20 shadow-lg mb-5" />
					<p class="text-sm text-foreground/80 leading-relaxed italic flex-1">
						"BioVault has been transformational for us. It enabled us to bring advanced genomic analysis in-house that previously had to be done outside Bermuda. They co-developed custom workflows with us that reduced analysis time from an hour to a minute while eliminating nearly 10% human error. We now have faster, more accurate results and can securely collaborate across countries while maintaining full control of our data."
					</p>
					<div class="mt-5">
						<p class="text-base font-semibold text-foreground">Dr. Carika Weldon</p>
						<p class="text-sm text-muted-foreground mt-0.5">Founder / CEO, CariGenetics, Bermuda</p>
					</div>
				</div>

				<!-- Dr. Rana Dajani -->
				<div class="flex flex-col items-center text-center">
					<img src="/rana.jpg" alt="Dr. Rana Dajani" class="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-bv-green/20 shadow-lg mb-5" />
					<p class="text-sm text-foreground/80 leading-relaxed italic flex-1">
						"Many biomedical datasets from underrepresented populations remain siloed due to privacy, sovereignty, and infrastructure constraints. BioVault provides a practical, privacy-preserving framework that allows researchers like us to participate fully in global collaborations while maintaining control of our data. This is essential for advancing equitable and globally relevant biomedical research."
					</p>
					<div class="mt-5">
						<p class="text-base font-semibold text-foreground">Dr. Rana Dajani</p>
						<p class="text-sm text-muted-foreground mt-0.5">Professor of Biology, Hashemite University, Jordan</p>
					</div>
				</div>

				<!-- Dr. Binay Panda (temporarily commented out) -->
				<!-- <div class="flex flex-col items-center text-center pb-8 border-b border-border/50 md:pb-0 md:border-b-0">
					<img src="/binay.jpg" alt="Dr. Binay Panda" class="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-bv-green/20 shadow-lg mb-5" />
					<p class="text-sm text-foreground/80 leading-relaxed italic flex-1">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					</p>
					<div class="mt-5">
						<p class="text-base font-semibold text-foreground">Dr. Binay Panda</p>
						<p class="text-sm text-muted-foreground mt-0.5">Professor of Biotechnology, Nehru University, India</p>
					</div>
				</div> -->
			</div>
		</div>
	</section>

	<!-- Interactive Demo -->
	<section id="how-it-works" class="py-4 sm:py-8 overflow-hidden relative z-10">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<p class="text-center text-sm font-medium tracking-widest uppercase text-bv-green mb-6 sm:mb-8">BioVault in action</p>
			<!-- Mobile: Tab buttons -->
			<div class="flex justify-center mb-4 md:hidden">
				<div class="inline-flex rounded-lg bg-muted p-1">
					<button
						onclick={() => (demoTab = "researcher")}
						class="cursor-pointer px-5 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 {demoTab ===
						'researcher'
							? 'bg-background text-foreground shadow-none'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						<Microscope class="h-4 w-4" />
						Researcher
					</button>
					<button
						onclick={() => (demoTab = "dataowner")}
						class="cursor-pointer px-5 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 {demoTab ===
						'dataowner'
							? 'bg-background text-foreground shadow-none'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						<Database class="h-4 w-4" />
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

			<!-- Desktop: Window container with both mockups -->
			<div
				class="hidden md:block rounded-2xl overflow-hidden border border-border desktop-wallpaper"
			>
				<!-- Menu bar with icons, title, and learn more text -->
				<div
					class="relative flex items-center px-4 py-2.5 bg-white/50 dark:bg-white/15 backdrop-blur-xl backdrop-saturate-150 border-b border-black/5 dark:border-white/10"
				>
					<div class="flex items-center gap-4">
						<div class="flex items-center gap-2">
							<!-- Apple -->
							<svg
								class="h-3.5 w-3.5 text-foreground"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
								/>
							</svg>
							<!-- Windows -->
							<img src="/windows.svg" alt="Windows" class="h-3.5 w-3.5 dark:invert" />
							<!-- Linux -->
							<img src="/linux.svg" alt="Linux" class="h-3.5 w-3.5 dark:invert" />
						</div>
						<span class="text-foreground text-xs font-medium">BioVault</span>
					</div>
					<p class="absolute left-1/2 -translate-x-1/2 text-sm text-foreground/80">
						Learn more about <a href="/how-it-works" class="text-bv-green dark:text-emerald-400 hover:text-bv-green-light dark:hover:text-emerald-300 underline underline-offset-4 transition-colors">how BioVault works</a>
					</p>
					<div class="ml-auto text-foreground/70 text-xs">
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

		</div>
	</section>
</div>
