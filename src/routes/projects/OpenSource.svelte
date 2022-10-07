<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from './Section.svelte';
</script>

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
		name="svelte-render"
		description="Manage complex Svelte behaviors outside of templates with full type safety."
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/svelte-render',
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
