<script lang="ts">
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import InfiniteAutoScroller from './InfiniteAutoScroller.svelte';
	import Button from './Button.svelte';
	import SkillIcon, { type Skill } from './SkillIcon.svelte';

	interface Image {
		src: string;
		alt: string;
		width: number;
		height: number;
	}

	interface Link {
		label: string;
		href: string;
	}

	export let name: string;
	export let description: string;
	export let images: Image[] | undefined = undefined;
	export let reverseImages = false;
	export let skills: Skill[] | undefined = undefined;
	export let links: Link[] | undefined = undefined;
</script>

<div class="p-4 bg-white rounded-xl w-full min-w-0">
	<h2 class="text-xl font-bold">{name}</h2>
	<sub class="text-sm">{description}</sub>
	{#if images !== undefined}
		<InfiniteAutoScroller speed={reverseImages ? -25 : 50} as="ul" class="mt-4 pb-4 flex gap-4">
			{#each images as { src, alt, width, height }}
				{@const HEIGHT = 500}
				{@const WIDTH = (HEIGHT / height) * width}
				<img
					{src}
					{alt}
					class="rounded-lg shadow-md border"
					style:width="{WIDTH}px"
					style:min-width="{WIDTH}px"
					style:height="{HEIGHT}px"
				/>
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
