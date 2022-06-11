<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../_context';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />
<section class="p-4 mx-auto layout-container">
	<h1 class="mb-4 ml-3 text-3xl font-bold">Applications</h1>
	<div class="grid md:grid-cols-2 gap-4">
		<ProjectCard
			name="meetwhen.io"
			description="A beautiful and mobile-friendly group scheduling application"
			skills={['svelte', 'sveltekit', 'typescript', 'tailwindcss', 'nodejs', 'firebase', 'graphql']}
			links={[
				{
					label: 'Get started',
					href: 'https://meetwhen.io',
				},
				{
					label: 'GitHub',
					href: 'https://github.com/bryanmylee/meetwhen-ui',
				},
			]}
		/>
		<ProjectCard
			name="HelloWorld"
			description="A mobile AR application that lets you explore the world from your home"
			skills={['reactjs', 'reactnative']}
			links={[
				{
					label: 'Read about us',
					href: 'https://news.smu.edu.sg/news/2021/07/02/smus-computing-and-information-systems-team-emerged-champions-dsta-hackathon',
				},
			]}
		>
			<h3 class="text-gray-600"><strong class="font-mono">CODE_EXP 2021</strong> · 1st Place</h3>
		</ProjectCard>
	</div>
</section>
