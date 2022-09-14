<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ExampleImage from './ExampleImage.svelte';
	import ImageLayout from './ImageLayout.svelte';
	import Section from './Section.svelte';
</script>

<Section title="Projects" singleColumn>
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
				alt="a screenshot of a scheduling application I built called meetwhen"
				width={994}
				height={1623}
			/>
			<ExampleImage
				src="/projects/meetwhen/new_dark.webp"
				alt="a screenshot of the event creation interface for a scheduling application I built called meetwhen"
				width={994}
				height={1622}
			/>
			<div class="hidden xl:block">
				<ExampleImage
					src="/projects/meetwhen/profile_light.webp"
					alt="a screenshot of a user's profile for a scheduling application I built called meetwhen"
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
		</ProjectCard>
		<ImageLayout>
			<ExampleImage
				src="/projects/helloworld/ar_portrait.webp"
				alt="a screenshot of an augmented reality application I built called HelloWorld"
				width={828}
				height={1792}
			/>
			<ExampleImage
				src="/projects/helloworld/map.webp"
				alt="a screenshot of the discover page, which includes a map, for an augmented reality application I built called HelloWorld"
				width={828}
				height={1792}
			/>
		</ImageLayout>
	</div>
	<div class="flex flex-col items-center gap-4 mx-auto mb-8 lg:flex-row">
		<ProjectCard
			name="Techtris"
			description="A simple showcase site."
			skills={['svelte', 'sveltekit', 'typescript', 'tailwindcss', 'nodejs']}
			links={[
				{
					label: 'Check it out',
					href: 'https://teamtechtris.github.io',
				},
			]}
			class="lg:w-fit lg:shadow-lg"
		>
			<p>
				<strong>Techtris</strong> was created by a small group of friends who wanted to work together
				on hobby projects, hackathons, and group assignments.
			</p>
			<p>
				The showcase site was primarily built to develop a simple understanding of <a
					href="https://threejs.org/">Three.js</a
				>.
			</p>
		</ProjectCard>
		<ImageLayout right singleColumn>
			<ExampleImage
				src="/the-web/techtris.webp"
				alt="a screenshot of a showcase website"
				width={1080}
				height={714}
			/>
		</ImageLayout>
	</div>
</Section>
