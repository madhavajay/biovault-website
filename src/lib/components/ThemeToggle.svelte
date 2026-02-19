<script lang="ts">
	import { toggleMode } from "mode-watcher";
	import { Sun, Moon } from "@lucide/svelte";
</script>

<button
	onclick={toggleMode}
	class="relative h-8 w-8 rounded-md flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
	aria-label="Toggle theme"
>
	<Sun class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
	<Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
</button>
