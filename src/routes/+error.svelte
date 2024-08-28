<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { syncBgPaperRatio } from '$lib/utils/background';
	import { useBgPaperRatio } from './context';

	const bgPaperRatio = useBgPaperRatio();
	bgPaperRatio.set(1);
	syncBgPaperRatio(bgPaperRatio);
</script>

<section class="mx-auto flex h-[calc(100vh-7rem)] items-center justify-center p-4">
	<div class="flex flex-col gap-4">
		<p class="font-mono text-7xl font-semibold tabular-nums">{$page.status}</p>
		<h1 class="text-xl">There's nothing here!</h1>
		<Button variant="primary" href="/#" class="inline-flex items-center justify-center gap-2">
			Take me back <ArrowRight class="wh-5" />
		</Button>
	</div>
</section>
