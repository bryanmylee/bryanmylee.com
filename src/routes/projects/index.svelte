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

<Section title="Open Source Projects">
	<ProjectCard
		name="Svelte Headless Table"
		description="Unopinionated and extensible data tables for Svelte"
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
		description="Popper for Svelte with actions, no wrapper components or bindings required"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-popperjs',
			},
		]}
	/>
	<ProjectCard
		name="svelte-previous"
		description="A Svelte store that remembers previous values"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-previous',
			},
		]}
	/>
	<ProjectCard
		name="svelte-keyed"
		description="A writable derived store for objects and arrays"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-keyed',
			},
		]}
	/>
	<ProjectCard
		name="svelte-subscribe"
		description="Subcribe to non top-level stores in your Svelte template"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-subscribe',
			},
		]}
	/>
	<ProjectCard
		name="vim-colorscheme-icons"
		description="Colorize vim-devicons with the current colorscheme"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/vim-colorscheme-icons',
			},
		]}
	/>
	<ProjectCard
		name="zoo-ids"
		description="Generate predictable and unique identifiers composed of adjectives and animals in the browser"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/zoo-ids',
			},
		]}
	/>
	<ProjectCard
		name="tailwindcss-global-dark"
		description="A TailwindCSS variant for class-based dark mode with CSS Modules"
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
		description="A LaTeX package for drawing ER diagrams quickly"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/tex-er-diagram',
			},
		]}
	/>
	<ProjectCard
		name="sequence-crdt"
		description="A CRDT for sequential data in C using LSEQ"
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

<Section title="Applications">
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
</Section>
