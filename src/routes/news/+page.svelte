<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import {
		Calendar,
		MapPin,
		Mail,
		ExternalLink,
		Clock,
	} from "@lucide/svelte";
	import { contactOpen } from "$lib/stores/contact";

	type Event = {
		title: string;
		date: string;
		location: string;
		description: string;
		url: string;
		image?: string;
		imagePosition?: string;
	};

	const upcoming: Event[] = [
		{
			title: "Bermuda Principles 2026 (BP30)",
			date: "25–28 February 2026",
			location: "Hamilton Princess, Bermuda",
			description: "BioVault is attending BP30, the 30th anniversary of the Bermuda Principles, revisiting the legacy of open genomic data sharing in the context of today's evolving scientific, ethical, and geopolitical landscape.",
			url: "https://bermudaprinciples.org/",
			image: "/BP30.png",
			imagePosition: "center bottom",
		},
	];

	// Oldest to newest in source, displayed newest to oldest
	const events: Event[] = [
		{
title: "GA4GH 13th Plenary",
			date: "October 2025",
			location: "Uppsala, Sweden",
			description: "BioVault attended the 13th Plenary of the Global Alliance for Genomics and Health, engaging with the global genomics community on standards for responsible data sharing.",
			url: "https://www.ga4gh.org/event/13th-plenary/",
			image: "/ga4gh.png",
		},
		{
title: "ASHG 2025 Annual Meeting",
			date: "October 2025",
			location: "Boston, MA, USA",
			description: "BioVault attended the American Society of Human Genetics 2025 annual meeting, showcasing privacy-preserving approaches to genomic collaboration.",
			url: "https://meetings.ashg.org/event/ASHG25/home/",
			image: "/ASHG.jpeg",
			imagePosition: "center 25%",
		},
		{
title: "Australia International Data Week",
			date: "October 2025",
			location: "Brisbane, Australia",
			description: "BioVault was presented at the International Data Week 2025, connecting with the global research data community on open science and equitable data infrastructure.",
			url: "https://idw2025.org/",
			image: "/IDW.jpeg",
			imagePosition: "50% 0%",
		},
		{
title: "India AI Impact Summit 2026",
			date: "February 2026",
			location: "New Delhi, India",
			description: "BioVault participated in the India AI Impact Summit 2026, demonstrating how privacy-preserving data visitation can accelerate biomedical AI research across borders.",
			url: "https://impact.indiaai.gov.in/",
			image: "/ai-impact.jpeg",
		},
	];

	// Display newest first
	const displayEvents = [...events].reverse();
</script>

<div class="min-h-screen bg-background pt-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<main class="py-8 lg:py-12">
			<!-- Intro -->
			<div class="mb-10">
				<h1 class="text-2xl font-semibold text-foreground mb-4">Updates</h1>
				<p class="text-sm text-muted-foreground leading-relaxed">
					Conferences, events, and milestones from the BioVault team as we build the future of privacy-preserving biomedical collaboration.
				</p>
			</div>

			<!-- Upcoming -->
			{#if upcoming.length > 0}
				<div class="mb-10">
					<div class="flex items-center gap-2 mb-4">
						<Clock class="h-4 w-4 text-bv-teal" />
						<h2 class="text-sm font-medium text-bv-teal uppercase tracking-wider">Upcoming</h2>
					</div>
					{#each upcoming as event}
						<a
							href={event.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex flex-col md:flex-row rounded-lg border border-bv-teal/20 bg-bv-teal/5 overflow-hidden hover:border-bv-teal/40 transition-colors"
						>
							{#if event.image}
								<div class="md:hidden flex items-center justify-center pt-4 px-4">
									<img src={event.image} alt={event.title} class="h-28 w-auto object-contain" />
								</div>
							{/if}
							<div class="flex-1 p-4 md:p-5">
								<div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
									<span class="inline-flex items-center gap-1.5 text-xs font-medium text-bv-teal">
										<Calendar class="h-3 w-3" />
										{event.date}
									</span>
									<span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
										<MapPin class="h-3 w-3" />
										{event.location}
									</span>
								</div>
								<h3 class="text-sm font-semibold text-foreground mb-1.5 group-hover:text-bv-teal transition-colors">
									{event.title}
								</h3>
								<p class="text-sm text-muted-foreground leading-relaxed mb-3">
									{event.description}
								</p>
								<span class="inline-flex items-center gap-1 text-xs text-bv-teal">
									Event website <ExternalLink class="h-3 w-3" />
								</span>
							</div>
							{#if event.image}
								<div class="hidden md:flex w-36 flex-shrink-0 items-center justify-center p-4">
									<img src={event.image} alt={event.title} class="w-full h-auto object-contain" />
								</div>
							{/if}
						</a>
					{/each}
				</div>
			{/if}

			<!-- Past Events -->
			<div class="flex items-center gap-2 mb-4">
				<Calendar class="h-4 w-4 text-muted-foreground" />
				<h2 class="text-sm font-medium text-muted-foreground uppercase tracking-wider">Past Events</h2>
			</div>

			<!-- Timeline -->
			<div class="space-y-0">
				{#each displayEvents as event, i}
					<div class="relative pl-8 pb-10 {i < displayEvents.length - 1 ? 'border-l-2 border-border' : 'border-l-2 border-transparent'} ml-2">
						<!-- Dot -->
						<div class="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full {i === 0 ? 'bg-bv-green' : 'bg-border'}"></div>

						<!-- Date badge -->
						<div class="flex items-center gap-3 mb-2">
							<span class="inline-flex items-center gap-1.5 text-xs font-medium {i === 0 ? 'text-bv-green' : 'text-muted-foreground'}">
								<Calendar class="h-3 w-3" />
								{event.date}
							</span>
							<span class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
								<MapPin class="h-3 w-3" />
								{event.location}
							</span>
						</div>

						<!-- Card -->
						<div class="rounded-lg border border-border bg-card overflow-hidden hover:border-bv-green/40 transition-colors group">
							<div class="p-5">
								{#if event.image}
									<img src={event.image} alt={event.title} class="w-full aspect-[2/1] object-cover rounded-lg mb-4" style:object-position={event.imagePosition || 'center'} />
								{/if}
								<div class="flex items-center justify-between mb-1.5">
									<h3 class="text-sm font-semibold text-foreground group-hover:text-bv-green transition-colors">
										{event.title}
									</h3>
									<a
										href={event.url}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 text-xs text-bv-green hover:text-bv-green-light transition-colors flex-shrink-0 ml-3"
									>
										Event site <ExternalLink class="h-3 w-3" />
									</a>
								</div>
								<p class="text-sm text-muted-foreground leading-relaxed">
									{event.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- CTA -->
			<div class="border-t border-border pt-10 pb-8 mt-4">
				<h2 class="text-lg font-semibold text-foreground mb-3">Partner with us</h2>
				<p class="text-sm text-muted-foreground leading-relaxed mb-6">
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
		</main>
	</div>
</div>
