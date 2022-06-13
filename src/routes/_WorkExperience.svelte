<script lang="ts" context="module">
	const EXPERIENCES: Work[] = [
		{
			companyName: 'Meta',
			from: 'May 2022',
			to: 'Aug 2022',
			title: 'Enterprise Engineer',
			details: [
				'Develop and deploy a database for cold-storage logging',
				'Design an interface for creating, storing, and querying logs',
				'Build a web client to manage and explore logging information',
			],
		},
		{
			companyName: 'Airfoil Studio',
			from: 'Nov 2021',
			to: 'present',
			title: 'Software Engineer',
			details: [
				'Advise clients on web and React Native development',
				'Implement highly accessible and customized component libraries for client projects',
				'Rapidly build webpages and applications',
			],
		},
		{
			companyName: 'DSO National Laboratories',
			from: 'May 2021',
			to: 'Jul 2021',
			title: 'Cybersecurity Research Intern',
			details: [
				'Explore the effectiveness and efficiency of ensemble fuzzing in discovering bugs within JavaScript engines',
				'Develop an automation pipeline to configure and test fuzzer configurations',
			],
		},
		{
			companyName: 'Garuda Robotics',
			from: 'May 2020',
			to: 'Aug 2020',
			title: 'Engineering Intern',
			details: [
				'Develop a warning system for autonomous drones during beyond-visual-line-of-sight operation',
				'Migrate the mapping provider of a drone operator application to OpenStreetMap',
				'Rearchitect a React application to improve Redux performance and maintainability',
			],
		},
	];
</script>

<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import type { Work } from '$lib/models/Work';
	import { isJsEnabled } from '$lib/utils/accessibility';

	const jsEnabled = isJsEnabled();
</script>

<section class="relative mt-[-40vh] {$jsEnabled ? '' : 'bg-gray-50'} z-10">
	<h1 id="work" class="sr-only scroll-mt-24">Work experience</h1>
	<div class="grid gap-4 p-4 mx-auto layout-container md:grid-cols-2 xl:grid-cols-3">
		{#each EXPERIENCES as experience}
			<WorkCard {...experience} />
		{/each}
		<div class="flex items-center justify-center min-wh-40">
			<Button color="secondary" href="/projects" class="flex items-center gap-1">
				Other projects <ArrowRight class="wh-5" />
			</Button>
		</div>
	</div>
</section>
