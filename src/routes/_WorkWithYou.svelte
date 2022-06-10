<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { useTheme } from './_context';

	const theme = useTheme();
	let topProgress = 0;
	$: $theme = topProgress <= 0 ? 'dark' : 'light';
</script>

<ScrollProgress scrollDistance={100} topPadding={50} topInset={50} bind:topProgress>
	<div class="sticky top-0 w-screen h-screen bg-gray-50 z-[-1]" style:opacity={topProgress}>
		<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
			<h1 class="font-bold leading-tight text-center text-dyn-6 drop-shadow-2xl" id="contact">
				And I'd like to work with you.
			</h1>
			<Button href="mailto:bryanmylee@gmail.com" target="_blank" rel="noopener noreferrer">
				bryanmylee@gmail.com
			</Button>
		</div>
	</div>
</ScrollProgress>
