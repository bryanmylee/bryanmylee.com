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

<div
	class={twMerge(
		'w-full min-w-0 max-w-[calc(65ch-4rem)] rounded-xl bg-paper-raised p-4 text-ink',
		className,
	)}
>
	<LinkedHeading depth={2} text={metadata.title} class="text-xl font-bold" />
	<sub class="text-sm text-ink-700">{metadata.subtitle}</sub>
	<hr class="my-4" />
	{#if metadata.skills !== undefined}
		<ul class="my-4 flex gap-2">
			{#each metadata.skills as skill}
				<li><SkillIcon {skill} /></li>
			{/each}
		</ul>
	{/if}
	<div class="content mt-4 space-y-4 [&_p]:leading-7">
		{@html html}
	</div>
	{#if metadata.links !== undefined}
		<ul class="mt-4 flex flex-wrap gap-4">
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
			@apply text-cyan-500 underline underline-offset-1 gdark:text-cyan-200;
			@apply hover:text-cyan-400;
		}
	}
</style>
