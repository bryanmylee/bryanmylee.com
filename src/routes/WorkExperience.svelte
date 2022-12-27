<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import WorkCard from './WorkCard.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { WORK_EXPERIENCE } from '$lib/work';
	import { useJsEnabled } from '$lib/utils/accessibility';

	const jsEnabled = useJsEnabled();
</script>

<section class="relative mt-[-40vh] {$jsEnabled ? '' : 'bg-gray-50'} z-10">
	<h1 id="work" class="text-3xl font-bold text-center my-8 scroll-mt-24">Work Experience</h1>
	<div class="grid gap-4 p-4 mx-auto tw-container md:grid-cols-2 xl:grid-cols-3">
		{#each WORK_EXPERIENCE as experience}
			<WorkCard {...experience} />
		{/each}
		<div class="flex items-center justify-center min-wh-40 md:col-span-2 xl:col-span-1">
			<Button color="secondary" href="/projects" class="flex items-center gap-1">
				Projects <ArrowRight class="wh-5" />
			</Button>
		</div>
	</div>
</section>
