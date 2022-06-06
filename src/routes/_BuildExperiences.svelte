<script lang="ts">
	import NestedCubes from '../lib/components/NestedCubes.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
</script>

<ScrollProgress topInset={75} topPadding={100} let:contentProgress let:topProgress>
	<div class="sticky top-0 w-screen h-screen" style:opacity={topProgress}>
		<NestedCubes />
		<div class="absolute inset-0 flex items-center justify-center">
			<h1 class="text-[8vw] font-bold text-center text-white leading-tight">
				I build interactive experiences
			</h1>
		</div>
	</div>
</ScrollProgress>
