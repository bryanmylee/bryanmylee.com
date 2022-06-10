<script lang="ts" context="module">
	const EXPERIENCES: Work[] = [
		{
			companyName: 'Meta',
			from: 'May 2022',
			to: 'Aug 2022',
			title: 'Enterprise Engineer',
			details: [
				'Build database for cold-storage logging',
				'Design an API to record and read transaction logs',
				'Implement a web client to access logging data',
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
	import type { Work } from '$lib/model/Work';
	import { useWhite } from './_context';
</script>

<section class="-mt-[30vh] bg-gray-50">
	<div class="grid gap-4 p-16 mx-auto layout-container md:grid-cols-2 xl:grid-cols-3">
		{#each EXPERIENCES as experience}
			<WorkCard {...experience} />
		{/each}
		<div class="flex items-center justify-center min-wh-40">
			<Button
				href="/"
				class="flex items-center gap-1 text-green-800 bg-green-200 hover:bg-green-100 active:opacity-50"
			>
				Other projects <ArrowRight class="wh-5" />
			</Button>
		</div>
	</div>
</section>
