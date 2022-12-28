<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
</script>

<section class="mx-auto p-4 h-[calc(100vh-7rem)] flex justify-center items-center">
	<div class="space-y-4">
		<p class="text-7xl font-mono font-semibold tabular-nums">{$page.status}</p>
		<h1 class="text-xl">This is not the page you are looking for.</h1>
		<Button variant="primary" href="/blog" class="inline-flex justify-center items-center gap-2">
			Find another <ArrowRight class="wh-5" />
		</Button>
	</div>
</section>
