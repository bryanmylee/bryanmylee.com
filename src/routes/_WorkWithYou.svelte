<script lang="ts">
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';

	const jsEnabled = isJsEnabled();
</script>

<ScrollProgress topPadding={50} topInset={50} let:topProgress>
	<div
		class="{$jsEnabled ? 'fixed' : 'sticky'} top-0 w-screen h-screen bg-white"
		style:opacity={topProgress}
	>
		<div class="absolute inset-0 flex items-center justify-center">
			<h1 class="text-dyn-6 font-bold text-center leading-tight drop-shadow-2xl">
				And I'd like to work with you.
			</h1>
		</div>
	</div>
</ScrollProgress>
