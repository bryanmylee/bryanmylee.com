<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { syncBgFillRatio } from '$lib/utils/background';
	import { useBgFillRatio, useIsDark } from './context';

	const isDark = useIsDark();
	const bgFillRatio = useBgFillRatio();
	bgFillRatio.set(1);
	syncBgFillRatio(isDark, bgFillRatio);
</script>

<section
	class="mx-auto flex h-[calc(100lvh-7rem)] w-[65ch] flex-col items-start justify-center p-4 text-ink"
>
	<div class="flex flex-col gap-4">
		<p class="font-mono text-7xl font-semibold tabular-nums">{$page.status}</p>
		<h1 class="text-xl">There's nothing here!</h1>
		<Button variant="primary" href="/#" class="inline-flex w-fit items-center justify-center gap-2">
			Take me back <ArrowRight class="wh-5" />
		</Button>
	</div>
</section>
