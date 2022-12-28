<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from './context';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<section class="mx-auto p-4 h-[calc(100vh-7rem)] flex justify-center items-center">
	<div class="space-y-4">
		<p class="text-7xl font-mono font-semibold tabular-nums">{$page.status}</p>
		<h1 class="text-xl">There's nothing here!</h1>
		<Button variant="primary" href="/#" class="inline-flex justify-center items-center gap-2">
			Take me back <ArrowRight class="wh-5" />
		</Button>
	</div>
</section>
