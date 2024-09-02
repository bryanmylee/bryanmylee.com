<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import WorkCard from './WorkCard.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { WORK_EXPERIENCE } from '$lib/work';
	import { useJsEnabled } from '$lib/utils/accessibility';

	const jsEnabled = useJsEnabled();
</script>

<section class="relative mt-[-40vh] {$jsEnabled ? '' : 'bg-paper'} z-10">
	<h1 id="work" class="my-8 scroll-mt-28 text-center text-3xl font-bold text-ink">
		Work Experience
	</h1>
	<div class="tw-container mx-auto grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
		{#each WORK_EXPERIENCE as experience}
			<WorkCard {...experience} />
		{/each}
	</div>
	<div class="tw-container mx-auto flex items-center justify-center min-wh-40">
		<div class="mx-auto flex w-min flex-col items-stretch gap-4">
			<Button variant="secondary" href="/projects" class="flex items-center justify-center gap-2">
				Projects <ArrowRight class="wh-5" />
			</Button>
			<Button variant="primary" href="/blog" class="flex items-center justify-center gap-2">
				Blog <ArrowRight class="wh-5" />
			</Button>
		</div>
	</div>
</section>
