<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import Labelled from '$lib/components/Labelled.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';

	let topProgress = 0;

	const jsEnabled = useJsEnabled();
</script>

<ScrollProgress scrollDistance={40} topPadding={130} topInset={120} bind:topProgress>
	<div class="sticky top-0 h-screen" style:opacity={$jsEnabled ? topProgress : 1}>
		<div class="bg-paper absolute inset-0" />
		<div class="absolute inset-0 bottom-[45vh] flex flex-col items-center justify-end gap-8">
			<h1
				id="contact"
				class="text-ink scroll-mt-40 text-center font-bold leading-tight drop-shadow-2xl text-dyn-6"
			>
				And I'd like to work with you.
			</h1>
			<Button href="mailto:bryanmylee@gmail.com" target="_blank" rel="noopener noreferrer">
				bryanmylee@gmail.com
			</Button>
			<div class="flex items-center gap-4">
				<Labelled
					label="GitHub"
					as="a"
					href="https://github.com/bryanmylee"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHub class="text-ink transition-transform wh-6 group-hover:scale-125" />
				</Labelled>
				<Labelled
					label="LinkedIn"
					as="a"
					href="https://www.linkedin.com/in/bryan-lee-min-yuan/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedIn class="text-ink transition-transform wh-6 group-hover:scale-125" />
				</Labelled>
			</div>
		</div>
	</div>
</ScrollProgress>
