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

<div class="p-8 text-black bg-white rounded-xl {wideLayout ? 'md:col-span-2' : ''}">
	<h2 class="text-xl font-bold tracking-tight flex justify-between items-center">
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
	<ul class="mt-2 ml-4 space-y-2 list-disc">
		{#each details as detail}
			<li>{detail}</li>
		{/each}
	</ul>
</div>
