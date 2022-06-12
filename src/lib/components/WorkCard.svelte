<script lang="ts">
	import type { Work } from '$lib/models/Work';

	type $$Props = Work;

	export let companyName: string;
	export let from: string;
	export let to: string;
	export let title: string;
	export let details: string[];
	export let icon: string | undefined = undefined;
</script>

<div class="p-8 text-black bg-white rounded-xl">
	<div class="flex justify-between items-center gap-4">
		<div>
			<h2 class="text-xl font-bold tracking-tight">
				{companyName}
			</h2>
			<sub class="text-sm">{from} &mdash; {to}</sub>
		</div>
		{#if icon !== undefined}
			<img src={icon} alt={companyName} class="wh-10 object-contain" />
		{/if}
	</div>
	<hr class="mt-4" />
	<h3 class="mt-4 font-semibold">{title}</h3>
	<ul class="mt-2 ml-4 space-y-2 list-disc">
		{#each details as detail}
			<li>{detail}</li>
		{/each}
	</ul>
</div>
