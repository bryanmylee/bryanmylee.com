<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { syncBgInkRatio } from '$lib/utils/background';
	import { useBgInkRatio, useIsDark } from './context';

	const isDark = useIsDark();
	const bgInkRatio = useBgInkRatio();
	bgInkRatio.set(1);
	syncBgInkRatio(isDark, bgInkRatio);
</script>

<section
	class="mx-auto flex h-[calc(100vh-7rem)] w-[65ch] flex-col items-start justify-center p-4 text-ink"
>
	<div class="flex flex-col gap-4">
		<p class="font-mono text-7xl font-semibold tabular-nums">{$page.status}</p>
		<h1 class="text-xl">There's nothing here!</h1>
		<Button variant="primary" href="/#" class="inline-flex w-fit items-center justify-center gap-2">
			Take me back <ArrowRight class="wh-5" />
		</Button>
	</div>
</section>
