<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ExampleImage from './ExampleImage.svelte';
	import ImageLayout from './ImageLayout.svelte';
	import Section from './Section.svelte';
</script>

<Section title="Applications" singleColumn>
	<div class="flex flex-col items-center gap-4 mx-auto mb-8 lg:flex-row-reverse">
		<ProjectCard
			name="Perfect Clear"
			description="A real-time Tetris perfect clear solver."
			skills={['rust', 'wasm', 'typescript']}
			links={[
				{
					label: 'GitHub',
					href: 'https://github.com/bryanmylee/perfect-clear',
				},
			]}
			class="lg:shadow-lg"
		>
			<p>
				An interactive and real-time <a href="https://tetris.fandom.com/wiki/Perfect_Clear_Guide"
					>perfect clear</a
				> solver for Tetris.
			</p>
			<p>
				The solver algorithm is written in Rust and uses multiple heuristics to achieve acceptable
				performance. It is then compiled to WebAssembly for native performance in the browser.
			</p>
		</ProjectCard>
	</div>
	<div class="flex flex-col items-center gap-4 mx-auto mb-8 lg:flex-row-reverse">
		<ProjectCard
			name="Wave"
			description="A simple and beautiful pomodoro app to keep you focused."
			skills={['reactjs', 'reactnative', 'firebase']}
			links={[
				{
					label: 'View on App Store',
					href: 'https://apps.apple.com/us/app/wave-focus/id6443842392',
				},
				{
					label: 'View on Google Play',
					href: 'https://play.google.com/store/apps/details?id=com.bryanmylee.wavefocus',
				},
				{
					label: 'Privacy Policy',
					href: '/projects/wavefocus',
				},
			]}
			class="lg:shadow-lg"
		>
			<p>
				<strong>Wave</strong> is a simple pomodoro timer to help you stay focused while working. It alternates
				between a 25 minute focus mode and a 5 minute break mode while displaying beautiful animations.
			</p>
			<p>
				Wave also keeps your timer in sync with multiple devices and lets you stay on top of your
				timers with alert notifications!
			</p>
			<p>
				All your activity is anonymised and no longer stored after two days. Instead, Wave uses a
				data-minimal algorithm to provide recommendations for the best hours of the day when you are
				the most productive without compromising your privacy.
			</p>
			<p>
				Wave for iOS and Android is built with React Native and Reanimated for its powerful and
				performant animation capabilities.
			</p>
			<p>
				On the backend, Wave uses Firebase Firestore for its data storage and synchronization
				features. A Google Cloud Function is triggered whenever a user starts or stops a timer. It
				schedules a task with Google Cloud Tasks to send a push notification with Firebase Cloud
				Messaging whenever the timer is completed.
			</p>
		</ProjectCard>
		<ImageLayout class="grid-cols-1 lg:-mr-52">
			<ExampleImage
				src="/projects/wavefocus/android_feature.webp"
				alt="a banner with multiple android phones using my pomodor app"
				width={2040}
				height={1000}
			/>
		</ImageLayout>
	</div>
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
		<ImageLayout class="grid-cols-2 lg:-ml-52 xl:-ml-96 xl:grid-cols-3">
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
		<ImageLayout class="grid-cols-2">
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
		<ImageLayout class="grid-cols-1 lg:-ml-52 xl:ml-0">
			<ExampleImage
				src="/the-web/techtris.webp"
				alt="a screenshot of a showcase website"
				width={1080}
				height={714}
			/>
		</ImageLayout>
	</div>
</Section>
