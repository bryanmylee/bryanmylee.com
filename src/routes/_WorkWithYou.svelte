<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { useWhite } from './_context';

	const white = useWhite();
	let topProgress = 0;
	$: $white = topProgress;

	const jsEnabled = isJsEnabled();
</script>

<ScrollProgress scrollDistance={125} topPadding={50} topInset={50} bind:topProgress>
	<div
		class="sticky top-0 w-screen h-screen {$jsEnabled ? '' : 'bg-gray-50'} z-[-1]"
		style:opacity={$jsEnabled ? topProgress : 1}
	>
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
