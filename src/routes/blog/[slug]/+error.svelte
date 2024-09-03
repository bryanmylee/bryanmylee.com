<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
</script>

<section class="mx-auto flex h-[calc(100vh-7rem)] w-[65ch] items-center p-4 text-ink">
	<div class="flex flex-col gap-4">
		<p class="font-mono text-7xl font-semibold tabular-nums">{$page.status}</p>
		<h1 class="text-xl">This is not the page you are looking for.</h1>
		<Button
			variant="primary"
			href="/blog"
			class="inline-flex w-fit items-center justify-center gap-2"
		>
			Find another <ArrowRight class="wh-5" />
		</Button>
	</div>
</section>
