<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
	import { ArrowLeft, Home } from "@lucide/svelte";
</script>

<svelte:head>
	<title>{$page.status} - BioVault</title>
</svelte:head>

<div class="min-h-screen bg-background flex items-center justify-center">
	<div class="mx-auto max-w-md px-4 text-center">
		<p class="text-7xl font-bold text-bv-green mb-4">{$page.status}</p>
		<h1 class="text-2xl font-semibold text-foreground mb-2">
			{#if $page.status === 404}
				Page not found
			{:else}
				Something went wrong
			{/if}
		</h1>
		<p class="text-muted-foreground mb-8">
			{#if $page.status === 404}
				The page you're looking for doesn't exist or has been moved.
			{:else if $page.error?.message}
				{$page.error.message}
			{:else}
				An unexpected error occurred.
			{/if}
		</p>
		<div class="flex items-center justify-center gap-3">
			<Button
				variant="outline"
				onclick={() => history.back()}
			>
				<ArrowLeft class="h-4 w-4 mr-1.5" />
				Go Back
			</Button>
			<Button
				href="/"
				class="bg-bv-green text-white hover:bg-bv-green-light"
			>
				<Home class="h-4 w-4 mr-2" />
				Home
			</Button>
		</div>
	</div>
</div>
