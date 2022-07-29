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

<ScrollProgress scrollDistance={40} topPadding={90} topInset={100} bind:topProgress>
	<div class="sticky top-0 wh-screen" style:opacity={$jsEnabled ? topProgress : 1}>
		<div class="absolute inset-0 bg-gray-50" />
		<div class="absolute inset-0 bottom-[45vh] flex flex-col items-center justify-end gap-8">
			<h1
				id="contact"
				class="font-bold leading-tight text-center text-dyn-6 drop-shadow-2xl scroll-mt-40"
			>
				And I'd like to work with you.
			</h1>
			<Button href="mailto:bryanmylee@gmail.com" target="_blank" rel="noopener noreferrer">
				bryanmylee@gmail.com
			</Button>
			<div class="flex gap-4 items-center">
				<Labelled
					label="GitHub"
					as="a"
					href="https://github.com/bryanmylee"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHub class="wh-6 group-hover:scale-125 transition-transform" />
				</Labelled>
				<Labelled
					label="LinkedIn"
					as="a"
					href="https://www.linkedin.com/in/bryan-lee-min-yuan/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedIn class="wh-6 group-hover:scale-125 transition-transform" />
				</Labelled>
			</div>
		</div>
	</div>
</ScrollProgress>
