<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from './_Section.svelte';
</script>

<Section title="Applications" wide>
	<ProjectCard
		name="meetwhen.io"
		description="A beautiful and mobile-friendly group scheduling application."
		skills={['svelte', 'sveltekit', 'typescript', 'tailwindcss', 'nodejs', 'firebase', 'graphql']}
		images={[
			{
				src: '/projects/meetwhen/meeting_light.webp',
				alt: 'meetwhen meeting',
				width: 994,
				height: 1623,
			},
			{
				src: '/projects/meetwhen/meeting_wide_dark.webp',
				alt: 'meetwhen meeting wide layout',
				width: 1992,
				height: 1617,
			},
			{
				src: '/projects/meetwhen/profile_light.webp',
				alt: 'meetwhen profile page',
				width: 994,
				height: 1622,
			},
			{
				src: '/projects/meetwhen/new_dark.webp',
				alt: 'meetwhen create new meeting page',
				width: 994,
				height: 1618,
			},
		]}
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
		description="A mobile AR application that lets you explore the world from your home."
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
</Section>
