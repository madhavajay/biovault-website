<script lang="ts">
	import "./layout.css";
	import { Button } from "$lib/components/ui/button";
	import { Menu, X, Mail } from "@lucide/svelte";
	import { page } from "$app/stores";
	import ContactModal from "$lib/components/ContactModal.svelte";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import { ModeWatcher } from "mode-watcher";

	import { contactOpen } from "$lib/stores/contact";

	let { children } = $props();
	let menuOpen = $state(false);

	const navLinks = [
		{ href: "/how-it-works", label: "How It Works" },
		{ href: "/news", label: "News" },
		{ href: "/about", label: "About" },
		{ href: "/download", label: "Download" },
	];

	type PageMeta = {
		title: string;
		description: string;
		ogImage: string;
		ogImageSquare: string;
	};

	const defaultMeta: PageMeta = {
		title: "Join the Beta - BioVault",
		description:
			"BioVault is a free, open-source, permissionless network for collaborative genomics. Share insights without ever sharing raw data.",
		ogImage: "https://biovault.net/images/og-share.jpg",
		ogImageSquare: "https://biovault.net/images/og-share-square.jpg",
	};

	const pathMeta: Record<string, Partial<PageMeta>> = {
		"/about": {
			title: "About - BioVault",
			description:
				"Learn about BioVault's mission, team, and community. Open-source, privacy-first biomedical collaboration.",
		},
		"/how-it-works": {
			title: "How It Works - BioVault",
			description:
				"Learn how BioVault enables privacy-preserving biomedical collaboration through data visitation. Your data stays with you, only insights travel.",
		},
		"/news": {
			title: "Updates - BioVault",
			description: "Events, conferences, and updates from the BioVault team.",
		},
		"/download": {
			title: "Download - BioVault",
			description:
				"Download BioVault desktop app and CLI for macOS, Windows, or Linux.",
		},
		"/privacy": {
			title: "Privacy Policy - BioVault",
			description:
				"How BioVault handles your information. Privacy-first by design.",
		},
	};

	function getMeta(pathname: string): PageMeta {
		return { ...defaultMeta, ...(pathMeta[pathname] ?? {}) };
	}

	function getCanonicalUrl(pathname: string, search: string): string {
		const baseUrl = "https://biovault.net";
		const normalizedPath = pathname === "/" ? "" : pathname;
		return `${baseUrl}${normalizedPath}${search}`;
	}
</script>

<svelte:head>
	<title>{getMeta($page.url.pathname).title}</title>
	<meta name="description" content={getMeta($page.url.pathname).description} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="canonical" href={getCanonicalUrl($page.url.pathname, $page.url.search)} />
	<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={getCanonicalUrl($page.url.pathname, $page.url.search)} />
	<meta property="og:title" content={getMeta($page.url.pathname).title} />
	<meta property="og:description" content={getMeta($page.url.pathname).description} />

	<meta property="og:image" content={getMeta($page.url.pathname).ogImageSquare} />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="800" />

	<meta property="og:image" content={getMeta($page.url.pathname).ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={getMeta($page.url.pathname).ogImage} />
	<meta name="twitter:image:width" content="1200" />
	<meta name="twitter:image:height" content="600" />

	<!-- Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-4D2KBBR5W5"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-4D2KBBR5W5');
	</script>

	<!-- Plausible Analytics -->
	<script async src="https://plausible.io/js/pa-V_dIu_hjvnC2JnO74aMlw.js"></script>
	<script>
		window.plausible = window.plausible || function () {
			(plausible.q = plausible.q || []).push(arguments);
		};
		window.plausible.init = window.plausible.init || function (i) {
			plausible.o = i || {};
		};
		window.plausible.init();
	</script>

	<!-- Rybbit Analytics -->
	<script src="https://metrics.syftbox.net/api/script.js" data-site-id="3" defer></script>

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ModeWatcher defaultMode="system" />
<div class="font-sans min-h-screen flex flex-col" style="font-family: 'Inter', system-ui, sans-serif;">
	<!-- Navigation -->
	<nav
		class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
	>
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex items-center gap-2">
					<a href="/" class="flex items-center gap-2">
						<img
							src="/logo.png"
							alt="BioVault"
							class="h-8 w-8 rounded-lg"
						/>
						<span class="text-lg font-semibold text-foreground"
							>BioVault</span
						>
					</a>
				</div>

				<!-- Desktop nav -->
				<div class="hidden md:flex items-center gap-6">
					{#each navLinks as link}
						<a
							href={link.href}
							class="text-sm transition-colors {$page.url.pathname === link.href || $page.url.pathname.startsWith(link.href + '/') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}"
						>{link.label}</a>
					{/each}
					<ThemeToggle />
					<Button
						size="sm"
						class="h-8 px-3 text-xs bg-bv-green text-white hover:bg-bv-green-light"
						onclick={() => $contactOpen = true}
					>
						<Mail class="h-3.5 w-3.5 mr-1" />
						Get in Touch
					</Button>
				</div>

				<!-- Mobile actions -->
				<div class="md:hidden flex items-center gap-1">
					<ThemeToggle />
					<button
						class="text-foreground/60 hover:text-foreground transition-colors cursor-pointer h-8 w-8 flex items-center justify-center"
						onclick={() => menuOpen = !menuOpen}
						aria-label="Toggle menu"
					>
						{#if menuOpen}
							<X class="h-6 w-6" />
						{:else}
							<Menu class="h-6 w-6" />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile dropdown -->
		{#if menuOpen}
			<div class="md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-4 py-4 flex flex-col gap-3">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm py-1.5 transition-colors {$page.url.pathname === link.href || $page.url.pathname.startsWith(link.href + '/') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}"
						onclick={() => menuOpen = false}
					>{link.label}</a>
				{/each}
				<div class="border-t border-border pt-3 mt-1">
					<Button
						size="sm"
						class="h-8 text-xs bg-bv-green text-white hover:bg-bv-green-light w-full"
						onclick={() => { $contactOpen = true; menuOpen = false; }}
					>
						<Mail class="h-3.5 w-3.5 mr-1" />
						Get in Touch
					</Button>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Page content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-border py-8 bg-background relative z-10">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<!-- Mobile footer -->
			<div class="md:hidden space-y-4">
				<a href="/" class="flex items-center gap-2">
					<img src="/logo.png" alt="BioVault" class="h-7 w-7 rounded-lg" />
					<span class="font-semibold text-foreground">BioVault</span>
				</a>
				<div class="flex flex-wrap gap-x-4 gap-y-2">
					<a href="/about" class="text-sm text-foreground/60 hover:text-foreground transition-colors">About</a>
					<a href="/news" class="text-sm text-foreground/60 hover:text-foreground transition-colors">News</a>
					<a href="https://github.com/openmined/biovault-desktop" target="_blank" rel="noopener" class="text-sm text-foreground/60 hover:text-foreground transition-colors">GitHub</a>
					<a href="/privacy" class="text-sm text-foreground/60 hover:text-foreground transition-colors">Privacy Policy</a>
				</div>
				<p class="text-xs text-foreground/40">&copy; 2026 BioVault &middot; Apache 2.0 License</p>
			</div>
			<!-- Desktop footer -->
			<div class="hidden md:flex items-center justify-between">
				<a href="/" class="flex items-center gap-2">
					<img src="/logo.png" alt="BioVault" class="h-7 w-7 rounded-lg" />
					<span class="font-semibold text-foreground">BioVault</span>
				</a>
				<div class="flex items-center gap-4">
					<a href="/about" class="text-sm text-foreground/60 hover:text-foreground transition-colors">About</a>
					<a href="/news" class="text-sm text-foreground/60 hover:text-foreground transition-colors">News</a>
					<a href="https://github.com/openmined/biovault-desktop" target="_blank" rel="noopener" class="text-sm text-foreground/60 hover:text-foreground transition-colors">GitHub</a>
					<a href="/privacy" class="text-sm text-foreground/60 hover:text-foreground transition-colors">Privacy Policy</a>
				</div>
				<p class="text-sm text-foreground/60">&copy; 2026 BioVault &middot; Apache 2.0 License</p>
			</div>
		</div>
	</footer>

	<ContactModal />
</div>
