<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import {
		Download,
		Terminal,
		Copy,
		Check,
		ExternalLink,
		Github,
		BookOpen,
		MessageSquare,
		Mail,
	} from "@lucide/svelte";
	import { contactOpen } from "$lib/stores/contact";
	import { onMount } from "svelte";

	let copied = $state(false);
	const installCommand = "curl -sSL https://raw.githubusercontent.com/openmined/biovault/main/install.sh | bash";

	function copyInstallCommand() {
		navigator.clipboard.writeText(installCommand);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	onMount(() => {
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

		return () => observer.disconnect();
	});
</script>

<div class="min-h-screen bg-background">
	<!-- Hero -->
	<section class="relative pt-24 pb-12 sm:pb-16 overflow-hidden">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
			<img src="/logo.png" alt="BioVault" class="h-20 w-20 rounded-2xl mx-auto mb-6" />
			<h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
				Download BioVault
			</h1>
			<p class="text-lg text-muted-foreground max-w-xl mx-auto">
				Get started with privacy-preserving biomedical collaboration
			</p>
		</div>
	</section>

	<!-- Beta banner -->
	<section class="relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="rounded-xl border border-border bg-card px-5 py-4 flex items-center gap-3">
				<span class="shrink-0 bg-bv-green/15 text-bv-green text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">Beta</span>
				<p class="text-muted-foreground text-sm">
					These builds are in active development. Report issues on
					<a href="https://github.com/OpenMined/biovault-desktop/issues" target="_blank" rel="noopener" class="text-bv-green hover:underline font-medium">GitHub</a>
					or
					<a href="https://slack.openmined.org" target="_blank" rel="noopener" class="text-bv-green hover:underline font-medium">Slack</a>.
				</p>
			</div>
		</div>
	</section>

	<!-- Desktop App -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">Desktop App</p>
				<h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">BioVault Desktop</h2>
				<p class="text-muted-foreground mb-8 max-w-2xl">
					A user-friendly interface for data owners to manage their data and collaborate with researchers.
				</p>
			</div>

			<div class="grid sm:grid-cols-3 gap-5 animate-on-scroll">
				<!-- macOS -->
				<div class="rounded-xl border border-border bg-card p-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<svg class="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
							</svg>
						</div>
						<h3 class="font-semibold text-foreground">macOS</h3>
					</div>
					<p class="text-xs text-muted-foreground mb-4">Choose your Mac's processor type</p>
					<div class="flex flex-col gap-2">
						<Button
							class="w-full bg-bv-green text-white hover:bg-bv-green-light text-xs h-9"
							href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-aarch64-apple-darwin.dmg"
						>
							<Download class="h-3.5 w-3.5 mr-1.5" />
							Apple Silicon (arm64)
						</Button>
						<Button
							variant="outline"
							class="w-full text-xs h-9 border-border"
							href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-apple-darwin.dmg"
						>
							<Download class="h-3.5 w-3.5 mr-1.5" />
							Intel (x86_64)
						</Button>
					</div>
				</div>

				<!-- Linux -->
				<div class="rounded-xl border border-border bg-card p-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<img src="/linux.svg" alt="Linux" class="h-5 w-5 opacity-80 dark:invert" />
						</div>
						<h3 class="font-semibold text-foreground">Linux</h3>
					</div>
					<p class="text-xs text-muted-foreground mb-4">Portable AppImage for all distributions</p>
					<div class="flex flex-col gap-2">
						<Button
							class="w-full bg-bv-green text-white hover:bg-bv-green-light text-xs h-9"
							href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-unknown-linux-gnu.AppImage"
						>
							<Download class="h-3.5 w-3.5 mr-1.5" />
							x86_64
						</Button>
						<Button
							variant="outline"
							class="w-full text-xs h-9 border-border"
							href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-aarch64-unknown-linux-gnu.AppImage"
						>
							<Download class="h-3.5 w-3.5 mr-1.5" />
							arm64
						</Button>
					</div>
				</div>

				<!-- Windows -->
				<div class="rounded-xl border border-border bg-card p-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<img src="/windows.svg" alt="Windows" class="h-5 w-5 opacity-80 dark:invert" />
						</div>
						<h3 class="font-semibold text-foreground">Windows</h3>
					</div>
					<p class="text-xs text-muted-foreground mb-4">Executable for Windows 10/11</p>
					<div class="flex flex-col gap-2">
						<Button
							class="w-full bg-bv-green text-white hover:bg-bv-green-light text-xs h-9"
							href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-pc-windows-msvc.exe"
						>
							<Download class="h-3.5 w-3.5 mr-1.5" />
							x86_64
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CLI -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">Command Line</p>
				<h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">BioVault CLI</h2>
				<p class="text-muted-foreground mb-8 max-w-2xl">
					The fastest way to get started with genomic collaboration. Install on macOS and Linux.
				</p>
			</div>

			<!-- Install command -->
			<div class="animate-on-scroll">
				<div class="rounded-xl border border-border bg-card overflow-hidden">
					<div class="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border">
						<div class="flex items-center gap-2">
							<Terminal class="h-4 w-4 text-muted-foreground" />
							<span class="text-xs text-muted-foreground font-medium">Install Command</span>
						</div>
						<button
							onclick={copyInstallCommand}
							class="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
						>
							{#if copied}
								<Check class="h-3.5 w-3.5 text-bv-green" />
								<span class="text-bv-green">Copied</span>
							{:else}
								<Copy class="h-3.5 w-3.5" />
								<span>Copy</span>
							{/if}
						</button>
					</div>
					<div class="p-4 overflow-x-auto">
						<code class="text-sm text-foreground font-mono">
							<span class="text-bv-green">$</span> {installCommand}
						</code>
					</div>
				</div>

				<div class="mt-4">
					<Button
						variant="outline"
						class="border-border text-sm"
						href="https://github.com/OpenMined/BioVault/releases"
						target="_blank"
						rel="noopener"
					>
						<Github class="h-4 w-4 mr-2" />
						Download from GitHub
						<ExternalLink class="h-3.5 w-3.5 ml-2" />
					</Button>
				</div>
			</div>

			<!-- bv check mockup -->
			<div class="mt-12 animate-on-scroll">
				<h3 class="text-xl font-semibold text-foreground mb-2">Check Dependencies</h3>
				<p class="text-muted-foreground text-sm mb-4">After installation, verify your setup:</p>

				<div class="rounded-xl border border-border bg-card overflow-hidden font-mono text-sm">
					<div class="px-4 py-2.5 bg-muted/50 border-b border-border flex items-center gap-2">
						<Terminal class="h-4 w-4 text-muted-foreground" />
						<span class="text-xs text-muted-foreground font-medium font-sans">Terminal</span>
					</div>
					<div class="p-4 space-y-0.5 text-xs sm:text-sm">
						<p><span class="text-bv-green">$</span> <span class="text-foreground">bv check</span></p>
						<p class="text-muted-foreground">BioVault Dependency Check</p>
						<p class="text-muted-foreground">=========================</p>
						<p>&nbsp;</p>
						<p class="text-foreground">Checking java... <span class="text-bv-green">&#10003;</span> Found (version 24)</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;Path: /opt/homebrew/bin/java</p>
						<p class="text-foreground">Checking docker... <span class="text-bv-green">&#10003;</span> Found (version 28.4.0) (running)</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;Path: /usr/local/bin/docker</p>
						<p class="text-foreground">Checking nextflow... <span class="text-bv-green">&#10003;</span> Found (version 25.04.7)</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;Path: /opt/homebrew/bin/nextflow</p>
						<p class="text-foreground">Checking syftbox... <span class="text-bv-green">&#10003;</span> Found (version 0.8.6)</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;Path: /Users/user/.sbenv/binaries/0.8.6/syftbox</p>
						<p class="text-foreground">Checking uv... <span class="text-bv-green">&#10003;</span> Found (version 0.9.0)</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;Path: /Users/user/.local/bin/uv</p>
						<p>&nbsp;</p>
						<p class="text-muted-foreground">=========================</p>
						<p class="text-bv-green font-medium">&#10003; All dependencies satisfied!</p>
					</div>
				</div>
			</div>

			<!-- bv setup mockup -->
			<div class="mt-12 animate-on-scroll">
				<h3 class="text-xl font-semibold text-foreground mb-2">Install Dependencies</h3>
				<p class="text-muted-foreground text-sm mb-4">BioVault can help you install dependencies automatically:</p>

				<div class="rounded-xl border border-border bg-card overflow-hidden font-mono text-sm">
					<div class="px-4 py-2.5 bg-muted/50 border-b border-border flex items-center gap-2">
						<Terminal class="h-4 w-4 text-muted-foreground" />
						<span class="text-xs text-muted-foreground font-medium font-sans">Terminal</span>
					</div>
					<div class="p-4 space-y-0.5 text-xs sm:text-sm">
						<p><span class="text-bv-green">$</span> <span class="text-foreground">bv setup</span></p>
						<p class="text-muted-foreground">BioVault Environment Setup</p>
						<p class="text-muted-foreground">==========================</p>
						<p>&nbsp;</p>
						<p class="text-foreground">Installing java...</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;&nbsp;Running: brew install openjdk@17</p>
						<p class="text-bv-green">&nbsp;&nbsp;&nbsp;&#10003; Command succeeded</p>
						<p>&nbsp;</p>
						<p class="text-foreground">Installing docker...</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;&nbsp;Running: brew install --cask docker</p>
						<p class="text-bv-green">&nbsp;&nbsp;&nbsp;&#10003; Command succeeded</p>
						<p>&nbsp;</p>
						<p class="text-foreground">Installing nextflow...</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;&nbsp;Running: brew install nextflow</p>
						<p class="text-bv-green">&nbsp;&nbsp;&nbsp;&#10003; Command succeeded</p>
						<p>&nbsp;</p>
						<p class="text-foreground">Installing syftbox...</p>
						<p class="text-muted-foreground">&nbsp;&nbsp;&nbsp;Running: curl -fsSL https://syftbox.net/install.sh | sh</p>
						<p class="text-bv-green">&nbsp;&nbsp;&nbsp;&#10003; Command succeeded</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Next Steps -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">Next Steps</p>
				<h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">Get started</h2>
				<p class="text-muted-foreground mb-8 max-w-2xl">
					Once your dependencies are satisfied, check out tutorials and source code.
				</p>
			</div>

			<div class="grid sm:grid-cols-2 gap-5 animate-on-scroll">
				<a
					href="https://github.com/OpenMined/biovault/tree/main/tutorials"
					target="_blank"
					rel="noopener"
					class="group rounded-xl border border-border bg-card p-6 hover:border-bv-green/40 transition-colors"
				>
					<div class="flex items-center gap-3 mb-3">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<BookOpen class="h-5 w-5 text-foreground" />
						</div>
						<div>
							<h3 class="font-semibold text-foreground group-hover:text-bv-green transition-colors">Tutorials</h3>
							<p class="text-xs text-muted-foreground">Step-by-step guides</p>
						</div>
					</div>
					<p class="text-sm text-muted-foreground">
						Learn how to run your first pipeline, discover datasets, and submit analysis jobs.
					</p>
					<span class="inline-flex items-center gap-1 text-sm text-bv-green mt-3">
						View tutorials <ExternalLink class="h-3.5 w-3.5" />
					</span>
				</a>

				<a
					href="https://github.com/OpenMined/BioVault"
					target="_blank"
					rel="noopener"
					class="group rounded-xl border border-border bg-card p-6 hover:border-bv-green/40 transition-colors"
				>
					<div class="flex items-center gap-3 mb-3">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<Github class="h-5 w-5 text-foreground" />
						</div>
						<div>
							<h3 class="font-semibold text-foreground group-hover:text-bv-green transition-colors">Source Code</h3>
							<p class="text-xs text-muted-foreground">Apache 2.0 License</p>
						</div>
					</div>
					<p class="text-sm text-muted-foreground">
						BioVault is fully open source. Browse the CLI and Desktop repositories.
					</p>
					<span class="inline-flex items-center gap-1 text-sm text-bv-green mt-3">
						View on GitHub <ExternalLink class="h-3.5 w-3.5" />
					</span>
				</a>
			</div>
		</div>
	</section>

	<!-- Need Help -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">Support</p>
				<h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">Need help?</h2>
				<p class="text-muted-foreground mb-8 max-w-2xl">
					Join our community for support, updates, and discussions.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 animate-on-scroll">
				<Button
					variant="outline"
					class="border-border text-sm"
					href="https://slack.openmined.org"
					target="_blank"
					rel="noopener"
				>
					<!-- Slack SVG -->
					<svg class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
						<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z"/>
					</svg>
					Join Slack
					<ExternalLink class="h-3.5 w-3.5 ml-2" />
				</Button>
				<Button
					variant="outline"
					class="border-border text-sm"
					href="https://github.com/OpenMined/BioVault/issues"
					target="_blank"
					rel="noopener"
				>
					<Github class="h-4 w-4 mr-2" />
					GitHub Issues
					<ExternalLink class="h-3.5 w-3.5 ml-2" />
				</Button>
				<Button
					class="bg-bv-green text-white hover:bg-bv-green-light text-sm"
					onclick={() => $contactOpen = true}
				>
					<Mail class="h-4 w-4 mr-2" />
					Get in Touch
				</Button>
			</div>
		</div>
	</section>
</div>
