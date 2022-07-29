<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import InfiniteAutoScroller from './InfiniteAutoScroller.svelte';
	import Button from './Button.svelte';
	import SkillIcon, { type Skill } from './SkillIcon.svelte';

	export let name: string;
	export let description: string;
	export let images: string[] | undefined = undefined;
	export let skills: Skill[] | undefined = undefined;
	export let links:
		| {
				label: string;
				href: string;
		  }[]
		| undefined = undefined;
</script>

<div class="p-4 bg-white rounded-xl">
	<h2 class="text-xl font-bold">{name}</h2>
	<sub class="text-sm">{description}</sub>
	{#if images !== undefined}
		<InfiniteAutoScroller speed={50} as="ul" class="flex gap-4 mt-4">
			{#each images as image}
				<img src={image} alt={image} class="rounded-lg h-[500px]" />
			{/each}
		</InfiniteAutoScroller>
	{/if}
	<hr class="mt-4" />
	{#if skills !== undefined}
		<ul class="flex gap-2 mt-4">
			{#each skills as skill}
				<li><SkillIcon {skill} /></li>
			{/each}
		</ul>
	{/if}
	<div class="mt-4">
		<slot />
	</div>
	{#if links !== undefined}
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
	{/if}
</div>
