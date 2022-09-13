<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ExampleImage from './ExampleImage.svelte';
	import ImageLayout from './ImageLayout.svelte';
	import Section from './Section.svelte';
</script>

<Section title="Applications" singleColumn>
	<div class="flex flex-col items-center gap-4 mx-auto mb-8 lg:flex-row">
		<ProjectCard
			name="meetwhen.io"
			description="A beautiful and mobile-friendly group scheduling application."
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
			class="lg:shadow-lg"
		>
			<p>
				<strong>meetwhen.io</strong> helps you schedule meetings and hangouts around the world. Quickly
				create and join meets with no sign up required, or sign in with an account to keep track of your
				previous and upcoming meets!
			</p>
			<p>
				You can also add relevant links and details for easy access later and see when your friends
				are the most available.
			</p>
		</ProjectCard>
		<ImageLayout xl right>
			<ExampleImage
				src="/projects/meetwhen/meeting_light.webp"
				alt="meetwhen meeting"
				width={994}
				height={1623}
			/>
			<ExampleImage
				src="/projects/meetwhen/new_dark.webp"
				alt="meetwhen create new meeting page"
				width={994}
				height={1622}
			/>
			<div class="hidden xl:block">
				<ExampleImage
					src="/projects/meetwhen/profile_light.webp"
					alt="meetwhen profile page"
					width={994}
					height={1618}
				/>
			</div>
		</ImageLayout>
	</div>
	<div class="flex flex-col items-center gap-4 mx-auto mb-8 lg:flex-row-reverse">
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
			class="lg:shadow-lg"
		>
			<div class="space-y-2">
				<h3 class="text-gray-600"><strong class="font-mono">CODE_EXP 2021</strong> · 1st Place</h3>
				<p>
					<strong>HelloWorld</strong> is a quick hackathon project that provides a taste of tourism when
					travel was restricted during the pandemic.
				</p>
				<p>
					You can decorate your personal spaces with virtual landmarks and attractions to immerse
					yourself in the cultural icons of your favorite destinations. Once you've built your
					world, hop onto the Discover page to learn more about each landmark.
				</p>
			</div>
		</ProjectCard>
		<ImageLayout>
			<ExampleImage
				src="/projects/helloworld/ar_portrait.webp"
				alt="helloworld ar demo"
				width={828}
				height={1792}
			/>
			<ExampleImage
				src="/projects/helloworld/map.webp"
				alt="helloworld map overview"
				width={828}
				height={1792}
			/>
		</ImageLayout>
	</div>
</Section>
