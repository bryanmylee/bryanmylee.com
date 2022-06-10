<script lang="ts">
	import type { Work } from '$lib/model/Work';

	type $$Props = Work;

	export let companyName: string;
	export let from: string;
	export let to: string;
	export let title: string;
	export let details: string[];
</script>

<div class="z-0 p-8 text-black bg-white rounded-xl">
	<h2 class="text-xl font-bold tracking-tight">{companyName}</h2>
	<sub class="text-sm">{from} &mdash; {to}</sub>
	<hr class="mt-4" />
	<h3 class="mt-2 font-semibold">{title}</h3>
	<ul class="mt-2 ml-4 space-y-2 list-disc">
		{#each details as detail}
			<li>{detail}</li>
		{/each}
	</ul>
</div>
