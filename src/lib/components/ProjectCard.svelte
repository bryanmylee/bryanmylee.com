<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { twMerge } from 'tailwind-merge';
	import Button from './Button.svelte';
	import SkillIcon, { type Skill } from './SkillIcon.svelte';

	interface Link {
		label: string;
		href: string;
	}

	export let name: string;
	export let description: string;
	export let skills: Skill[] | undefined = undefined;
	export let links: Link[] | undefined = undefined;
	let className = '';
	export { className as class };
</script>

<div class={twMerge('p-4 bg-white rounded-xl w-full min-w-0 max-w-[65ch]', className)}>
	<h2 class="text-xl font-bold">{name}</h2>
	<sub class="text-sm">{description}</sub>
	<hr class="my-4" />
	{#if skills !== undefined}
		<ul class="flex gap-2 my-4">
			{#each skills as skill}
				<li><SkillIcon {skill} /></li>
			{/each}
		</ul>
	{/if}
	<div class="mt-4 space-y-4">
		<slot />
	</div>
	{#if links !== undefined}
		<ul class="flex gap-4 mt-4 flex-wrap">
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
	{/if}
</div>
