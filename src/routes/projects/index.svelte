<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../_context';
	import Section from './_Section.svelte';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />

<Section title="Open Source">
	<ProjectCard
		name="Svelte Headless Table"
		description="Unopinionated and extensible data tables for Svelte."
		links={[
			{
				label: 'Documentation',
				href: 'https://svelte-headless-table.bryanmylee.com',
			},
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-headless-table',
			},
		]}
	/>
	<ProjectCard
		name="svelte-popperjs"
		description="Popper for Svelte with actions, no wrapper components or bindings required."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-popperjs',
			},
		]}
	/>
	<ProjectCard
		name="svelte-previous"
		description="A Svelte store that remembers previous values."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-previous',
			},
		]}
	/>
	<ProjectCard
		name="svelte-keyed"
		description="A writable derived store for objects and arrays."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-keyed',
			},
		]}
	/>
	<ProjectCard
		name="svelte-subscribe"
		description="Subcribe to non top-level stores in your Svelte template."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-subscribe',
			},
		]}
	/>
	<ProjectCard
		name="vim-colorscheme-icons"
		description="Colorize vim-devicons with the current colorscheme."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/vim-colorscheme-icons',
			},
		]}
	/>
	<ProjectCard
		name="zoo-ids"
		description="Generate predictable and unique identifiers composed of adjectives and animals in the browser."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/zoo-ids',
			},
		]}
	/>
	<ProjectCard
		name="tailwindcss-global-dark"
		description="A TailwindCSS variant for class-based dark mode with CSS Modules."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/tailwindcss-global-dark',
			},
		]}
	/>
	<ProjectCard
		name="tailwindcss-extrude"
		description="Extrude your elements for a retro look!"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/tailwindcss-extrude',
			},
		]}
	/>
	<ProjectCard
		name="tex-er-diagram"
		description="A LaTeX package for drawing entity-relationship diagrams quickly."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/tex-er-diagram',
			},
		]}
	/>
	<ProjectCard
		name="sequence-crdt"
		description="An implementation of a sequential conflict-free replicated data type in C using LSEQ."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/sequence-crdt',
			},
			{
				label: 'Read the paper',
				href: 'https://hal.archives-ouvertes.fr/hal-00921633/document',
			},
		]}
	/>
</Section>

<Section title="Applications" wide>
	<ProjectCard
		name="meetwhen.io"
		description="A beautiful and mobile-friendly group scheduling application."
		skills={['svelte', 'sveltekit', 'typescript', 'tailwindcss', 'nodejs', 'firebase', 'graphql']}
		images={[
			'/projects/meetwhen/meeting_light.webp',
			'/projects/meetwhen/meeting_wide_dark.webp',
			'/projects/meetwhen/profile_light.webp',
			'/projects/meetwhen/new_dark.webp',
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

<Section title="University">
	<ProjectCard
		name="Kopi Time"
		description="CS302 IT Solution Lifecycle Management"
		skills={[
			'typescript',
			'python',
			'reactjs',
			'nextjs',
			'tailwindcss',
			'nodejs',
			'flask',
			'graphql',
			'rest',
			'rabbitmq',
			'mysql',
			'nginx',
			'docker',
		]}
		links={[
			{
				label: 'Read our report',
				href: '/projects/cs302-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>Kopi Time is a digital marketplace for coffee-related art and collectables.</p>
			<p>
				We implemented a reliable and robust microservice architecture to handle market trading
				functionality, listing expirations, and user notifications.
			</p>
			<p>
				Most notably, we developed a framework-agnostic implementation of the <a
					href="https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga"
					target="_blank"
					rel="noopener noreferrer"
				>
					saga pattern
				</a>
				we named the <strong>Saga Engine</strong> to orchestrate transactions and compensating actions
				across multiple microservices.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="COMO Club"
		description="CS301 IT Solution Architecture"
		skills={[
			'typescript',
			'python',
			'svelte',
			'sveltekit',
			'tailwindcss',
			'flask',
			'rest',
			'rabbitmq',
			'mysql',
			'nginx',
			'docker',
			'cloudformation',
		]}
	>
		<div class="space-y-2">
			<p>
				We designed a highly available and maintainable backend architecure for our SMU-X sponsor —
				COMO Group.
			</p>
			<p>
				Most notably, our architecture fails gracefully when third-party external services are
				unavailable.
			</p>
			<p>
				To do so, we continuously check the health of external services. When an external service
				fails a healthcheck, we queue all client requests and notify users of the temporary
				disruption. Once the external service is healthy, we automatically trigger a recovery phase
				and continue with regular execution.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Wok N Roll"
		description="CS206 Software Product Management"
		skills={['typescript', 'java', 'svelte', 'tailwindcss', 'spring', 'rest']}
		links={[
			{
				label: 'View our slides',
				href: '/projects/cs206-final-pres.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We conducted market research and discovered an unfulfilled niche for a comprehensive
				database and search engine for hawker food in Singapore.
			</p>
			<p>
				Using this database, we developed a product, risk mitigation strategies, and a feature
				roadmap for future growth.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Ryver Bank"
		description="CS203 Collaborative Software Development"
		skills={['java', 'python', 'spring', 'flask', 'scikit', 'rest', 'mysql', 'docker']}
		links={[
			{
				label: 'View our slides',
				href: '/projects/cs203-final-pres.pdf',
			},
			{
				label: 'GitHub',
				href: 'https://github.com/cs203t10-ryverbank',
			},
		]}
	>
		<div class="space-y-2">
			<p>We designed a simple trading platform for our SMU-X sponsor — Credit Suisse.</p>
			<p>
				Given multiple core functionalities in the requirements, we used microservices to reduce the
				complexity of each component and enable developers to work semi-independently.
			</p>
			<p>We also developed a simple ML-powered stock recommendation engine.</p>
			<p>For our efforts, we were awarded the <strong>Best Technical Team</strong> achievement.</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Simulation of Voting Fairness in Singapore"
		description="CS426 Agent-based Modelling and Simulation"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/smu-cs426-project',
			},
			{
				label: 'Read our report',
				href: '/projects/cs426-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We modelled various gerrymandering and Group Representation Constituency allocation
				strategies using an agent-based simulation to explore the impacts of voter flexibility and
				distribution on the fairness of representation.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Network and Link Layer Emulation"
		description="CS441 Network Security"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/smu-cs441-network-emulation',
			},
			{
				label: 'Read our report',
				href: '/projects/cs441-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We emulated a simplified version of the MAC and IP protocol on top of network sockets for
				our physical layer.
			</p>
			<p>
				With the emulated network, the project requires a study and implementation of IP spoofing,
				IP filtering, and packet sniffing. Our group went beyond the requirements to implement
				private and public network separation, a simple public routing protocol, the ARP protocol,
				and IP traceback.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Optimizing Hotel Bookings"
		description="CS421 Introduction to Machine Learning"
		skills={['python', 'scikit']}
		links={[
			{
				label: 'Data',
				href: 'https://www.kaggle.com/jessemostipak/hotel-booking-demand',
			},
			{
				label: 'Read our report',
				href: '/projects/cs421-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We analyzed data on hotel booking demand and explored a variety of machine learning
				techniques to predict the cancellation of a given hotel booking based on pre-existing
				features.
			</p>
		</div>
	</ProjectCard>
</Section>

<div class="h-40 w-full bg-gray-50" />

<style lang="postcss">
	a {
		@apply text-cyan-500 underline underline-offset-1;
		@apply hover:text-cyan-400;
	}
</style>
