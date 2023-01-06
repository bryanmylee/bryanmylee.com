<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import LinkedHeading from '$lib/components/LinkedHeading.svelte';
	import SkillIcon from '$lib/components/SkillIcon.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { twMerge } from 'tailwind-merge';
	import type { Metadata } from './+page.server';

	export let html: string;

	export let metadata: Metadata;

	let className = '';
	export { className as class };
</script>

<div class={twMerge('p-4 bg-white rounded-xl w-full min-w-0 max-w-[calc(65ch-4rem)]', className)}>
	<LinkedHeading depth={2} text={metadata.title} class="text-xl font-bold" />
	<sub class="text-sm">{metadata.subtitle}</sub>
	<hr class="my-4" />
	{#if metadata.skills !== undefined}
		<ul class="flex gap-2 my-4">
			{#each metadata.skills as skill}
				<li><SkillIcon {skill} /></li>
			{/each}
		</ul>
	{/if}
	<div class="content mt-4 space-y-4">
		{@html html}
	</div>
	{#if metadata.links !== undefined}
		<ul class="flex gap-4 mt-4 flex-wrap">
			{#each metadata.links as { href, label }}
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

<style lang="postcss">
	.content {
		:global(a) {
			@apply text-cyan-500 underline underline-offset-1;
			@apply hover:text-cyan-400;
		}
	}
</style>
