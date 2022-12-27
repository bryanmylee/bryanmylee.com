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
		<div class="flex justify-center items-center w-full md:col-span-2 xl:col-span-1 min-wh-40">
			<div class="w-min flex flex-col gap-4 items-stretch mx-auto">
				<Button variant="secondary" href="/projects" class="flex justify-center items-center gap-2">
					Projects <ArrowRight class="wh-5" />
				</Button>
				<Button variant="primary" href="/blog" class="flex justify-center items-center gap-2">
					Blog <ArrowRight class="wh-5" />
				</Button>
			</div>
		</div>
	</div>
</section>
