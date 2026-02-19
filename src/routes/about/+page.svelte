<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import {
		ArrowRight,
		Github,
		MessageSquare,
		Globe,
		Heart,
		Shield,
		Users,
		ExternalLink,
		Mail,
	} from "@lucide/svelte";
	import { contactOpen } from "$lib/stores/contact";
	import { onMount } from "svelte";

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

	type TeamMember = {
		name: string;
		description: string;
		image: string;
		linkedin?: string;
		email?: string;
		website?: string;
	};

	const team: TeamMember[] = [
		{
			name: "Dawn Chen",
			description: "PhD Candidate @ Harvard University | ex-Googler | Synthetic Biology, RNA",
			image: "/images/dawn.jpg",
			linkedin: "https://www.linkedin.com/in/dawnchenx/",
			email: "dawnchen@fas.harvard.edu",
		},
		{
			name: "Madhava Jay",
			description: "Rare Disease Patient and Software Engineer @ OpenMined.org",
			image: "/images/madhava.jpg",
			linkedin: "https://www.linkedin.com/in/madhavajay/",
			email: "madhava@openmined.org",
			website: "https://madhavajay.com/",
		},
	];

</script>

<svelte:head>
	<title>About - BioVault</title>
	<meta
		name="description"
		content="Learn about BioVault's mission, team, and community. Open-source, privacy-first biomedical collaboration."
	/>
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Hero -->
	<section class="relative pt-24 pb-12 sm:pb-16 overflow-hidden">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
			<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">About</p>
			<h1 class="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
				Making biomedical collaboration accessible to everyone
			</h1>

			<figure class="mt-8 sm:mt-10 w-full max-w-3xl mx-auto">
				<div class="rounded-xl overflow-hidden border border-border">
					<img src="/ai-impact.jpeg" alt="India AI Impact Summit 2026" class="w-full h-auto" />
				</div>
				<figcaption class="mt-3 text-sm text-muted-foreground">India AI Impact Summit 2026</figcaption>
			</figure>
		</div>
	</section>

	<!-- Mission -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<div class="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
					<p>
						Biomedical datasets representing diverse populations are essential for advancing precision medicine, yet remain siloed due to regulatory, sovereignty, and privacy constraints. Existing solutions — centralized repositories, trusted research environments, and secure computation frameworks — each carry barriers that disproportionately impact under-resourced institutions.
					</p>
					<p>
						BioVault exists to change this. We believe that every institution, regardless of resources, should be able to participate as an equal partner in global biomedical discovery — while retaining full control over their data.
					</p>
				</div>
			</div>

			<div class="grid sm:grid-cols-3 gap-5 mt-10 animate-on-scroll">
				<div class="rounded-xl border border-border bg-card p-5">
					<Shield class="h-6 w-6 text-bv-green mb-3" />
					<h3 class="font-semibold text-foreground mb-1.5 text-sm">Privacy First</h3>
					<p class="text-sm text-muted-foreground">Data never leaves its source. Only approved insights travel.</p>
				</div>
				<div class="rounded-xl border border-border bg-card p-5">
					<Globe class="h-6 w-6 text-bv-teal mb-3" />
					<h3 class="font-semibold text-foreground mb-1.5 text-sm">Equitable Access</h3>
					<p class="text-sm text-muted-foreground">Designed for institutions of all sizes, especially under-resourced communities.</p>
				</div>
				<div class="rounded-xl border border-border bg-card p-5">
					<Heart class="h-6 w-6 text-bv-green mb-3" />
					<h3 class="font-semibold text-foreground mb-1.5 text-sm">Open Source</h3>
					<p class="text-sm text-muted-foreground">Fully open-source under Apache 2.0. Transparent, auditable, community-driven.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Team -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">Team</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
				{#each team as member}
					<div class="rounded-xl border border-border bg-card p-5 text-center">
						<img
							src={member.image}
							alt={member.name}
							class="w-24 h-24 rounded-full object-cover mx-auto mb-4"
						/>
						<h3 class="font-semibold text-foreground mb-1">
							{#if member.website}
								<a href={member.website} target="_blank" rel="noopener" class="hover:text-bv-green transition-colors">{member.name}</a>
							{:else}
								{member.name}
							{/if}
						</h3>
						<p class="text-sm text-muted-foreground mb-3">{member.description}</p>
						<div class="flex items-center justify-center gap-3">
							{#if member.linkedin}
								<a href={member.linkedin} target="_blank" rel="noopener" class="text-muted-foreground hover:text-bv-green transition-colors">
									<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							{/if}
							{#if member.email}
								<a href="mailto:{member.email}" class="text-muted-foreground hover:text-bv-green transition-colors">
									<Mail class="h-5 w-5" />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>

		</div>
	</section>

	<!-- Community -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="animate-on-scroll">
				<p class="text-sm font-medium text-bv-green uppercase tracking-wider mb-3">Community</p>
				<h2 class="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
					Join the movement
				</h2>
				<p class="text-muted-foreground mb-8 text-pretty">
					We're building a global network of researchers, participants, and organizations who believe that privacy and collaboration aren't mutually exclusive. Whether you're a rare disease patient, a genomics researcher, or a biobank — BioVault provides the infrastructure for secure, equitable collaboration.
				</p>
			</div>

			<div class="grid sm:grid-cols-2 gap-5 animate-on-scroll">
				<a
					href="https://github.com/openmined/biovault-desktop"
					target="_blank"
					rel="noopener"
					class="group rounded-xl border border-border bg-card p-6 hover:border-bv-green/40 transition-colors"
				>
					<div class="flex items-center gap-3 mb-3">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<svg class="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-foreground group-hover:text-bv-green transition-colors">GitHub</h3>
							<p class="text-xs text-muted-foreground">openmined/biovault-desktop</p>
						</div>
					</div>
					<p class="text-sm text-muted-foreground">
						Browse the source code, open issues, and contribute to BioVault's development.
					</p>
					<span class="inline-flex items-center gap-1 text-sm text-bv-green mt-3">
						View on GitHub <ExternalLink class="h-3.5 w-3.5" />
					</span>
				</a>

				<a
					href="https://slack.openmined.org"
					target="_blank"
					rel="noopener"
					class="group rounded-xl border border-border bg-card p-6 hover:border-bv-teal/40 transition-colors"
				>
					<div class="flex items-center gap-3 mb-3">
						<div class="h-10 w-10 rounded-lg bg-foreground/5 flex items-center justify-center">
							<svg class="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
								<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z"/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-foreground group-hover:text-bv-teal transition-colors">Slack</h3>
							<p class="text-xs text-muted-foreground">OpenMined Community</p>
						</div>
					</div>
					<p class="text-sm text-muted-foreground">
						Join the OpenMined Slack to chat with the team, ask questions, and connect with other users.
					</p>
					<span class="inline-flex items-center gap-1 text-sm text-bv-teal mt-3">
						Join Slack <ExternalLink class="h-3.5 w-3.5" />
					</span>
				</a>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="pt-4 pb-12 sm:pt-6 sm:pb-16 relative z-10">
		<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
			<div class="animate-on-scroll">
				<h2 class="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
					Partner with us
				</h2>
				<p class="text-lg text-muted-foreground mb-8">
					Whether you hold biomedical data or need access to it, we're looking for partners to shape what we build.
				</p>
				<Button
					size="lg"
					class="bg-bv-green text-white hover:bg-bv-green-light font-medium"
					onclick={() => $contactOpen = true}
				>
					<Mail class="h-4 w-4 mr-1.5" />
					Get in Touch
				</Button>
			</div>
		</div>
	</section>
</div>
