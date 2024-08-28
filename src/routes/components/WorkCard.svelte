<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import type { Work } from '$lib/work';

	type $$Props = Work;

	export let companyName: string;
	export let from: string;
	export let to: string;
	export let title: string;
	export let details: string[];
	export let homepage: string | undefined = undefined;
	export let wideLayout: boolean | undefined = false;
</script>

<div class="rounded-xl bg-white p-8 text-black {wideLayout ? 'md:col-span-2' : ''}">
	<h2 class="flex items-center justify-between text-xl font-bold tracking-tight">
		<span>{companyName}</span>
		{#if homepage !== undefined}
			<a href={homepage} target="_blank" rel="noopener noreferrer">
				<ArrowRight class="wh-6" />
			</a>
		{/if}
	</h2>
	<sub class="text-sm">{from} &mdash; {to}</sub>
	<hr class="mt-4" />
	<h3 class="mt-4 font-semibold">{title}</h3>
	<ul class="ml-4 mt-2 list-disc space-y-2">
		{#each details as detail}
			<li>{detail}</li>
		{/each}
	</ul>
</div>
