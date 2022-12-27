<script lang="ts">
	import type { PageData } from './$types';
	import BlogItem from './BlogItem.svelte';

	export let data: PageData;
</script>

<header class="mx-auto p-4 max-w-[65ch] space-y-4">
	<h1 id="projects" class="text-3xl font-bold px-4">Blog</h1>
	<p class="px-4 text-sm">
		I write about my technical process and other thoughts in between projects.
	</p>
</header>

<div class="mx-auto px-4 max-w-[65ch]">
	<ul>
		{#each data.results as post}
			{#if 'properties' in post}
				<li class="contents">
					<BlogItem {post} />
				</li>
			{/if}
		{/each}
	</ul>
</div>
