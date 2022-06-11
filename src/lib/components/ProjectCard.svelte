<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import Button from './Button.svelte';
	import SkillIcon, { type Skill } from './SkillIcon.svelte';

	export let name: string;
	export let description: string;
	export let skills: Skill[] = [];
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
		{#each skills as skill}
			<li><SkillIcon {skill} /></li>
		{/each}
	</ul>
	<div class="mt-2">
		<slot />
	</div>
	<ul class="flex gap-4 mt-4">
		{#each links as { href, label }}
			<li>
				<Button
					{href}
					target="_blank"
					rel="noopener noreferrer"
					size="sm"
					class="flex items-center gap-1"
				>
					{label}
					<ArrowRight class="wh-5" />
				</Button>
			</li>
		{/each}
	</ul>
</div>
