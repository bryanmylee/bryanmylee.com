<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from './Section.svelte';
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
	>
		<div class="space-y-2">
			<p>
				<strong>meetwhen.io</strong> helps you schedule meetings and hangouts around the world.
				Quickly create and join meets with <em>no sign up required</em>, or sign in with an account
				to keep track of your previous and upcoming meets!
			</p>
			<p>
				You can also add relevant links and details for easy access later and see when your friends
				are the most available.
			</p>
		</div>
	</ProjectCard>
	<ProjectCard
		name="HelloWorld"
		description="A mobile AR application that lets you explore the world from your home."
		skills={['reactjs', 'reactnative']}
		images={[
			{
				src: '/projects/helloworld/ar_portrait.webp',
				alt: 'helloworld ar demo',
				width: 828,
				height: 1792,
			},
			{
				src: '/projects/helloworld/map.webp',
				alt: 'helloworld map overview',
				width: 828,
				height: 1792,
			},
		]}
		links={[
			{
				label: 'Read about us',
				href: 'https://news.smu.edu.sg/news/2021/07/02/smus-computing-and-information-systems-team-emerged-champions-dsta-hackathon',
			},
		]}
	>
		<div class="space-y-2">
			<h3 class="text-gray-600"><strong class="font-mono">CODE_EXP 2021</strong> · 1st Place</h3>
			<p>
				<strong>HelloWorld</strong> is a quick hackathon project that provides a taste of tourism when
				travel was restricted during the pandemic.
			</p>
			<p>
				You can decorate your personal spaces with virtual landmarks and attractions to immerse
				yourself in the cultural icons of your favorite destinations. Once you've built your world,
				hop onto the Discover page to learn more about each landmark.
			</p>
		</div>
	</ProjectCard>
</Section>
