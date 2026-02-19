<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { X, Check, Loader2, Send } from "@lucide/svelte";
	import { contactOpen } from "$lib/stores/contact";

	type FieldErrors = {
		[key: string]: string | undefined;
		name?: string;
		affiliation?: string;
		country?: string;
		email?: string;
		form?: string;
	};

	let formState: "idle" | "submitting" | "success" | "error" = $state("idle");
	let errors: FieldErrors = $state({});
	let touched: Record<string, boolean> = $state({});

	let name = $state("");
	let affiliation = $state("");
	let country = $state("");
	let email = $state("");

	function reset() {
		formState = "idle";
		errors = {};
		touched = {};
		name = "";
		affiliation = "";
		country = "";
		email = "";
	}

	function close() {
		$contactOpen = false;
		setTimeout(reset, 200);
	}

	function validateField(field: string, value: string): string | undefined {
		if (!value.trim()) {
			const labels: Record<string, string> = {
				name: "Name",
				affiliation: "Affiliation",
				country: "Country",
				email: "Email",
			};
			return `${labels[field]} is required`;
		}
		if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
			return "Please enter a valid email address";
		}
		return undefined;
	}

	function handleBlur(field: string, value: string) {
		touched[field] = true;
		const err = validateField(field, value);
		if (err) {
			errors = { ...errors, [field]: err };
		} else {
			const { [field]: _, ...rest } = errors;
			errors = rest;
		}
	}

	function handleInput(field: string) {
		if (touched[field]) {
			const values: Record<string, string> = { name, affiliation, country, email };
			const err = validateField(field, values[field]);
			if (!err) {
				const { [field]: _, ...rest } = errors;
				errors = rest;
			}
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape") close();
	}

	let isValid = $derived(
		name.trim() !== "" &&
		affiliation.trim() !== "" &&
		country.trim() !== "" &&
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
	);
</script>

{#if $contactOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
		onkeydown={handleKeydown}
		onclick={(e) => e.target === e.currentTarget && close()}
		role="dialog"
		aria-modal="true"
		aria-label="Get in Touch"
	>
		<div
			class="bg-background border border-border rounded-xl p-8 max-w-md w-full mx-4 relative shadow-2xl"
			style="animation: scale-in 0.2s ease-out"
		>
			<button
				onclick={close}
				class="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
				aria-label="Close"
			>
				<X class="h-5 w-5" />
			</button>

			{#if formState === "success"}
				<div class="text-center py-6" style="animation: fade-in-up 0.3s ease-out">
					<div class="w-14 h-14 rounded-full bg-bv-green/20 flex items-center justify-center mx-auto mb-4">
						<div class="w-10 h-10 rounded-full bg-bv-green/30 flex items-center justify-center">
							<Check class="h-6 w-6 text-bv-green" />
						</div>
					</div>
					<h2 class="text-xl font-semibold text-foreground mb-2">
						Thanks for reaching out!
					</h2>
					<p class="text-muted-foreground text-sm mb-6">
						We'll be in touch soon.
					</p>
					<Button
						class="h-9 bg-bv-green text-white hover:bg-bv-green-light font-semibold"
						onclick={close}
					>
						Close
					</Button>
				</div>
			{:else}
				<h2 class="text-xl font-semibold text-foreground mb-1">
					Get in Touch
				</h2>
				<p class="text-muted-foreground text-sm mb-6">
					Help shape what we're building.
				</p>

				<form
					method="POST"
					action="/?/contact"
					use:enhance={() => {
						formState = "submitting";
						errors = {};

						return async ({ result }) => {
							if (result.type === "success") {
								formState = "success";
							} else if (result.type === "failure" && result.data) {
								const data = result.data as { errors?: FieldErrors; values?: Record<string, string> };
								errors = data.errors ?? {};
								touched = { name: true, affiliation: true, country: true, email: true };
								if (data.values) {
									name = data.values.name ?? name;
									affiliation = data.values.affiliation ?? affiliation;
									country = data.values.country ?? country;
									email = data.values.email ?? email;
								}
								formState = errors.form ? "error" : "idle";
							} else {
								errors = { form: "Something went wrong. Please try again." };
								formState = "error";
							}
						};
					}}
					class="space-y-1"
				>
					<div class="relative pb-5">
						<label for="contact-name" class="block text-sm font-medium text-foreground mb-1.5">
							Name <span class="text-bv-green">*</span>
						</label>
						<Input
							id="contact-name"
							name="name"
							type="text"
							placeholder="Your full name"
							bind:value={name}
							onblur={() => handleBlur("name", name)}
							oninput={() => handleInput("name")}
							aria-invalid={errors.name ? "true" : undefined}
							class="h-10"
						/>
						{#if errors.name && touched.name}
							<p class="absolute bottom-0 left-0 text-xs text-red-400">{errors.name}</p>
						{/if}
					</div>

					<div class="relative pb-5">
						<label for="contact-affiliation" class="block text-sm font-medium text-foreground mb-1.5">
							Affiliation <span class="text-bv-green">*</span>
						</label>
						<Input
							id="contact-affiliation"
							name="affiliation"
							type="text"
							placeholder="University, company, or organization"
							bind:value={affiliation}
							onblur={() => handleBlur("affiliation", affiliation)}
							oninput={() => handleInput("affiliation")}
							aria-invalid={errors.affiliation ? "true" : undefined}
							class="h-10"
						/>
						{#if errors.affiliation && touched.affiliation}
							<p class="absolute bottom-0 left-0 text-xs text-red-400">{errors.affiliation}</p>
						{/if}
					</div>

					<div class="relative pb-5">
						<label for="contact-country" class="block text-sm font-medium text-foreground mb-1.5">
							Country <span class="text-bv-green">*</span>
						</label>
						<Input
							id="contact-country"
							name="country"
							type="text"
							placeholder="Your country"
							bind:value={country}
							onblur={() => handleBlur("country", country)}
							oninput={() => handleInput("country")}
							aria-invalid={errors.country ? "true" : undefined}
							class="h-10"
						/>
						{#if errors.country && touched.country}
							<p class="absolute bottom-0 left-0 text-xs text-red-400">{errors.country}</p>
						{/if}
					</div>

					<div class="relative pb-5">
						<label for="contact-email" class="block text-sm font-medium text-foreground mb-1.5">
							Email <span class="text-bv-green">*</span>
						</label>
						<Input
							id="contact-email"
							name="email"
							type="email"
							placeholder="you@example.com"
							bind:value={email}
							onblur={() => handleBlur("email", email)}
							oninput={() => handleInput("email")}
							aria-invalid={errors.email ? "true" : undefined}
							class="h-10"
						/>
						{#if errors.email && touched.email}
							<p class="absolute bottom-0 left-0 text-xs text-red-400">{errors.email}</p>
						{/if}
					</div>

					{#if errors.form}
						<div class="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
							<p class="text-sm text-red-400">{errors.form}</p>
						</div>
					{/if}

					<Button
						type="submit"
						class="w-full h-10 bg-bv-green text-white hover:bg-bv-green-light font-semibold"
						disabled={formState === "submitting" || !isValid}
					>
						{#if formState === "submitting"}
							<Loader2 class="h-4 w-4 mr-2 animate-spin" />
							Sending...
						{:else}
							Send Message
							<Send class="h-4 w-4 ml-2" />
						{/if}
					</Button>
				</form>
			{/if}
		</div>
	</div>
{/if}
