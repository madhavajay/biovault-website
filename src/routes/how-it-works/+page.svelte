<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import {
		ArrowRight,
		Shield,
		Lock,
		Database,
		Code,
		Microscope,
		Laptop,
		Globe,
		FileSearch,
		ShieldCheck,
		Dna,
		Brain,
		Activity,
		Terminal,
		Mail,
		FileText,
	} from "@lucide/svelte";
	import { contactOpen } from "$lib/stores/contact";
	import { onMount } from "svelte";

	const sections = [
		{ id: "overview", label: "Overview" },
		{ id: "challenge", label: "The Challenge" },
		{ id: "data-visitation", label: "Data Visitation" },
		{ id: "platform", label: "Platform" },
		{ id: "workflows", label: "Workflows" },
		{ id: "secure-computation", label: "Secure Computation" },
		{ id: "get-started", label: "Get Started" },
	];

	let activeSection = $state("overview");

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				}
			},
			{ rootMargin: "-80px 0px -60% 0px", threshold: 0 },
		);

		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
</script>

<div class="min-h-screen bg-background pt-16">
	<!-- Mobile: horizontal scrollable nav -->
	<div class="lg:hidden sticky top-16 z-20 bg-background/95 backdrop-blur-sm border-b border-border">
		<div class="flex overflow-x-auto gap-1 px-4 py-2 no-scrollbar">
			{#each sections as section}
				<button
					onclick={() => scrollTo(section.id)}
					class="cursor-pointer whitespace-nowrap px-3 py-1.5 text-xs rounded-md transition-colors shrink-0 {activeSection === section.id
						? 'bg-foreground/5 text-foreground font-medium'
						: 'text-muted-foreground hover:text-foreground'}"
				>
					{section.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
			<!-- Desktop sidebar -->
			<aside class="hidden lg:block">
				<nav class="sticky top-24 py-8">
					<ul class="space-y-0.5">
						{#each sections as section}
							<li>
								<button
									onclick={() => scrollTo(section.id)}
									class="cursor-pointer w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors border-l-2 {activeSection === section.id
										? 'border-bv-green text-foreground font-medium bg-foreground/[0.03]'
										: 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}"
								>
									{section.label}
								</button>
							</li>
						{/each}
					</ul>
				</nav>
			</aside>

			<!-- Main content -->
			<main class="py-8 lg:py-12 max-w-3xl">
				<!-- Overview -->
				<section id="overview" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h1 class="text-2xl font-semibold text-foreground mb-4">How BioVault Works</h1>
					<p class="text-sm text-muted-foreground leading-relaxed mb-4">
						BioVault is an open-source platform for privacy-first biomedical collaboration through a peer-to-peer data visitation network. Instead of moving sensitive data to centralized systems, BioVault sends analysis code to the data. Raw data never leaves institutional boundaries, and only approved results are returned.
					</p>
					<p class="text-sm text-muted-foreground leading-relaxed mb-4">
						Available as both a desktop application and command-line interface, BioVault enables out-of-the-box use for participants in diverse resource settings. It supports clinical and research workflows across data modalities, with built-in permissioning, audit trails, and local governance controls.
					</p>
					<p class="text-sm text-muted-foreground leading-relaxed">
						For the full technical details, see our <a href="https://www.biorxiv.org/content/10.64898/2026.02.12.705603v1" target="_blank" rel="noopener noreferrer" class="text-bv-green hover:text-bv-green-light underline underline-offset-4 transition-colors">preprint on bioRxiv</a>.
					</p>
				</section>

				<!-- The Challenge -->
				<section id="challenge" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h2 class="text-lg font-semibold text-foreground mb-4">The Challenge</h2>
					<p class="text-sm text-muted-foreground leading-relaxed mb-4">
						Biomedical datasets representing diverse populations are essential for advancing precision medicine, yet remain siloed due to regulatory, sovereignty, and privacy constraints. Existing data-sharing solutions each carry significant limitations:
					</p>
					<div class="space-y-4 mb-6">
						<div class="pl-4 border-l-2 border-red-400/40">
							<p class="text-sm font-medium text-foreground mb-1">Traditional data sharing</p>
							<p class="text-sm text-muted-foreground leading-relaxed">Raw data is copied across institutional and jurisdictional boundaries. Once transferred, data owners lose practical control over how data are accessed, reused, and governed.</p>
						</div>
						<div class="pl-4 border-l-2 border-amber-400/40">
							<p class="text-sm font-medium text-foreground mb-1">Trusted Research Environments</p>
							<p class="text-sm text-muted-foreground leading-relaxed">Data is uploaded to centralized hosted platforms controlled by well-resourced institutions or commercial vendors. Data owners have limited oversight, and the cost creates barriers for under-resourced settings.</p>
						</div>
						<div class="pl-4 border-l-2 border-blue-400/40">
							<p class="text-sm font-medium text-foreground mb-1">Secure computation frameworks</p>
							<p class="text-sm text-muted-foreground leading-relaxed">MPC and federated learning approaches preserve local control, but require deep expertise in cryptography, distributed algorithms, and substantial engineering effort, limiting accessibility.</p>
						</div>
					</div>
					<p class="text-sm text-muted-foreground leading-relaxed">
						These barriers disproportionately impact under-resourced institutions in LMICs and Indigenous communities, limiting equitable participation in global collaborations.
					</p>
				</section>

				<!-- Data Visitation -->
				<section id="data-visitation" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h2 class="text-lg font-semibold text-foreground mb-4">Data Visitation</h2>
					<p class="text-sm text-muted-foreground leading-relaxed mb-6">
						BioVault's core principle is data visitation: analysis code travels to data rather than data being transferred to centralized systems. The data owner retains full governance and control throughout the process.
					</p>

					<!-- Visual diagram -->
					<div class="rounded-lg border border-border p-6 mb-6 bg-card">
						<div class="grid grid-cols-3 gap-4 items-center text-center">
							<div>
								<div class="h-10 w-10 rounded-lg bg-bv-teal/10 flex items-center justify-center mx-auto mb-2">
									<Microscope class="h-5 w-5 text-bv-teal" />
								</div>
								<p class="text-xs font-medium text-foreground">Data Scientist</p>
								<p class="text-[11px] text-muted-foreground mt-0.5">Writes & submits code</p>
							</div>
							<div class="space-y-2">
								<div class="flex items-center justify-center gap-1.5 text-bv-green">
									<Code class="h-3.5 w-3.5" />
									<ArrowRight class="h-3.5 w-3.5" />
								</div>
								<p class="text-[10px] text-bv-green font-medium">Code travels to data</p>
								<div class="flex items-center justify-center gap-1.5 text-bv-teal">
									<ArrowRight class="h-3.5 w-3.5 rotate-180" />
									<FileSearch class="h-3.5 w-3.5" />
								</div>
								<p class="text-[10px] text-bv-teal font-medium">Only insights return</p>
							</div>
							<div>
								<div class="h-10 w-10 rounded-lg bg-bv-green/10 flex items-center justify-center mx-auto mb-2">
									<Database class="h-5 w-5 text-bv-green" />
								</div>
								<p class="text-xs font-medium text-foreground">Datasite</p>
								<p class="text-[11px] text-muted-foreground mt-0.5">Retains full governance</p>
							</div>
						</div>
					</div>

					<h3 class="text-sm font-medium text-foreground mb-3">How it works step by step</h3>
					<ol class="space-y-3 text-sm text-muted-foreground leading-relaxed list-decimal list-inside">
						<li><span class="font-medium text-foreground">Discover:</span> Data owners publish synthetic mock datasets that mirror the structure of their private data, enabling researchers to develop and validate pipelines without accessing real data.</li>
						<li><span class="font-medium text-foreground">Develop:</span> Researchers write analysis code (Jupyter notebooks or Nextflow workflows) and validate against mock data locally.</li>
						<li><span class="font-medium text-foreground">Submit:</span> Validated pipelines are submitted as execution requests over the BioVault network.</li>
						<li><span class="font-medium text-foreground">Review:</span> Data owners review requests with AI-assisted code summarization, inspect the code, or run it against mock data first.</li>
						<li><span class="font-medium text-foreground">Execute:</span> Approved code runs locally within the data owner's environment on the private dataset.</li>
						<li><span class="font-medium text-foreground">Return:</span> Only explicitly authorized results are returned to the researcher. All operations are logged with transparent audit trails.</li>
					</ol>
				</section>

				<!-- Platform -->
				<section id="platform" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h2 class="text-lg font-semibold text-foreground mb-4">Platform</h2>
					<p class="text-sm text-muted-foreground leading-relaxed mb-6">
						BioVault is built on <a href="https://syftbox.net" target="_blank" rel="noopener noreferrer" class="text-bv-green hover:text-bv-green-light underline underline-offset-4 transition-colors">SyftBox</a>, an open-source protocol for secure, decentralized coordination of remote computation across independently governed environments.
					</p>

					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<Code class="h-4 w-4 text-bv-green mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-foreground">Open-source peer-to-peer network</p>
								<p class="text-sm text-muted-foreground">No centralized infrastructure required. BioVault operates across a decentralized network of independently governed datasites spanning institutions and jurisdictions.</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Laptop class="h-4 w-4 text-bv-green mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-foreground">Desktop application & CLI</p>
								<p class="text-sm text-muted-foreground">Compatible with Linux, macOS, and Windows. Supports Nextflow workflows and Jupyter Notebooks. Both interfaces expose agent-accessible endpoints for AI-driven research workflows.</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Shield class="h-4 w-4 text-bv-green mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-foreground">End-to-end encrypted</p>
								<p class="text-sm text-muted-foreground">All messages and results are end-to-end encrypted before transmission. Authenticated communication via the SyftBox protocol.</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Database class="h-4 w-4 text-bv-green mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-foreground">Data stays local</p>
								<p class="text-sm text-muted-foreground">BioVault treats linked data as generic files or databases under local control, independent of data modality or analytical task. No uploads, no copies, no movement.</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<ShieldCheck class="h-4 w-4 text-bv-green mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-foreground">Governance & audit trails</p>
								<p class="text-sm text-muted-foreground">Every execution request is logged, auditable, and subject to human approval before results are released. Data owners retain granular control over permitted analyses and shared outputs.</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Lock class="h-4 w-4 text-bv-green mt-0.5 shrink-0" />
							<div>
								<p class="text-sm font-medium text-foreground">Mock data paradigm</p>
								<p class="text-sm text-muted-foreground">Data owners publish synthetic datasets that mirror the structure of private data. Researchers develop and validate pipelines prior to execution, without exposure to real data.</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Workflows -->
				<section id="workflows" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h2 class="text-lg font-semibold text-foreground mb-4">Supported Workflows</h2>
					<p class="text-sm text-muted-foreground leading-relaxed mb-6">
						BioVault supports diverse biomedical analyses and machine learning workflows. Across all workflows, data scientists submit requests that are executed remotely within data owners' environments. Raw data is never transferred.
					</p>

					<div class="space-y-5">
						<div class="pl-4 border-l-2 border-bv-green/30">
							<div class="flex items-center gap-2 mb-1">
								<Dna class="h-4 w-4 text-bv-green" />
								<p class="text-sm font-medium text-foreground">Single-cell RNA-seq</p>
							</div>
							<p class="text-sm text-muted-foreground leading-relaxed">Remote preprocessing and exploratory analysis of patient-derived scRNA-seq data. Supports iterative, interactive workflows including standard preprocessing, quality controls, and downstream outputs like UMAP embeddings, without exposing raw gene expression profiles.</p>
						</div>
						<div class="pl-4 border-l-2 border-bv-green/30">
							<div class="flex items-center gap-2 mb-1">
								<Brain class="h-4 w-4 text-bv-green" />
								<p class="text-sm font-medium text-foreground">Machine learning model training</p>
							</div>
							<p class="text-sm text-muted-foreground leading-relaxed">Remote training of diagnostic and predictive models on private datasets. Model architectures are developed on synthetic data, then executed within the data-owning environment. Only trained parameters and performance metrics are returned.</p>
						</div>
						<div class="pl-4 border-l-2 border-bv-green/30">
							<div class="flex items-center gap-2 mb-1">
								<Activity class="h-4 w-4 text-bv-green" />
								<p class="text-sm font-medium text-foreground">Clinical medical imaging</p>
							</div>
							<p class="text-sm text-muted-foreground leading-relaxed">Model-to-data inference on large-scale MRI and other imaging datasets. Pretrained models are shared with the data-owning environment for local inference, consistent with clinical data governance practices.</p>
						</div>
						<div class="pl-4 border-l-2 border-bv-green/30">
							<div class="flex items-center gap-2 mb-1">
								<Shield class="h-4 w-4 text-bv-green" />
								<p class="text-sm font-medium text-foreground">Rare disease genomics</p>
							</div>
							<p class="text-sm text-muted-foreground leading-relaxed">Privacy-preserving analysis of whole-genome sequencing data. Only narrowly scoped, interpretation-ready results (e.g., region-restricted pileups) are returned. The full genome is never exposed.</p>
						</div>
					</div>
				</section>

				<!-- Secure Computation -->
				<section id="secure-computation" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h2 class="text-lg font-semibold text-foreground mb-4">Secure Computation</h2>
					<p class="text-sm text-muted-foreground leading-relaxed mb-4">
						Federated computation across multiple datasites requires exchanging intermediate results. Sharing this data in plaintext raises privacy concerns, as even aggregate statistics can enable reconstruction or membership inference attacks.
					</p>
					<p class="text-sm text-muted-foreground leading-relaxed mb-6">
						BioVault integrates <span class="font-medium text-foreground">Syqure</span>, a custom Rust-based wrapper around Sequre/Shechi, a high-performance framework that translates Python-syntax pipelines into optimized secure multiparty computation (MPC) and homomorphic encryption (HE) protocols. Syqure provides a zero-configuration WebRTC proxy that establishes peer-to-peer connections between datasites behind firewalls, removing the requirement for publicly addressable endpoints.
					</p>

					<h3 class="text-sm font-medium text-foreground mb-3">How it works</h3>
					<ol class="space-y-2 text-sm text-muted-foreground leading-relaxed list-decimal list-inside mb-6">
						<li>Each datasite locally computes values on private data (e.g., per-site allele counts)</li>
						<li>Values are split into encrypted shares</li>
						<li>Shares are securely aggregated across datasites via MPC</li>
						<li>Only final pooled results are revealed. No party accesses another site's private data</li>
					</ol>

					<div class="rounded-lg border border-border p-4 bg-card">
						<p class="text-xs text-muted-foreground leading-relaxed">
							<span class="font-medium text-foreground">Proof of concept:</span> We implemented a secure federated protocol for calculating joint allele frequencies across Caribbean populations without sharing site-specific allele counts in plaintext. Results were exactly concordant with plaintext computation (Pearson r = 1.00). See our <a href="https://www.biorxiv.org/content/10.64898/2026.02.12.705603v1" target="_blank" rel="noopener noreferrer" class="text-bv-green hover:text-bv-green-light underline underline-offset-4 transition-colors">paper</a> for full benchmarks.
						</p>
					</div>
				</section>

				<!-- Get Started -->
				<section id="get-started" class="scroll-mt-28 lg:scroll-mt-24 mb-16">
					<h2 class="text-lg font-semibold text-foreground mb-4">Get Started</h2>
					<p class="text-sm text-muted-foreground leading-relaxed mb-6">
						Whether you hold biomedical data or need access to it, we're looking for partners to shape what we build. BioVault is free and open-source.
					</p>
					<div class="flex flex-wrap gap-3">
						<Button
							size="lg"
							class="bg-bv-green text-white hover:bg-bv-green-light font-medium"
							onclick={() => $contactOpen = true}
						>
							<Mail class="h-4 w-4 mr-1.5" />
							Get in Touch
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="font-medium"
							href="https://www.biorxiv.org/content/10.64898/2026.02.12.705603v1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FileText class="h-4 w-4 mr-1.5" />
							Read the Paper
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="font-medium"
							href="/download"
						>
							<Terminal class="h-4 w-4 mr-1.5" />
							Download
						</Button>
					</div>
				</section>
			</main>
		</div>
	</div>
</div>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
