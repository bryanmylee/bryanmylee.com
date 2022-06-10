<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import Button from './Button.svelte';
	import SkillIcon from './SkillIcon.svelte';

	export let name: string;
	export let description: string;
	export let links: {
		label: string;
		href: string;
	}[];
</script>

<div class="p-4 bg-white rounded-xl">
	<h2 class="text-xl font-bold">{name}</h2>
	<sub class="text-sm">{description}</sub>
	<hr class="mt-4" />
	<ul class="flex gap-2 mt-4">
		<li><SkillIcon skill="svelte" /></li>
		<li><SkillIcon skill="sveltekit" /></li>
		<li><SkillIcon skill="typescript" /></li>
		<li><SkillIcon skill="tailwindcss" /></li>
		<li><SkillIcon skill="nodejs" /></li>
		<li><SkillIcon skill="firebase" /></li>
		<li><SkillIcon skill="graphql" /></li>
	</ul>
	<ul class="flex gap-4 mt-4">
		{#each links as { href, label }}
			<li>
				<Button {href} size="sm" class="flex items-center gap-1">
					{label}
					<ArrowRight class="wh-5" />
				</Button>
			</li>
		{/each}
	</ul>
</div>
