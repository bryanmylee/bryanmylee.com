<script lang="ts">
	import type { PageData } from './$types';
	import BlogItem from './BlogItem.svelte';

	export let data: PageData;
</script>

<div class="mx-auto max-w-[65ch] p-8 space-y-4">
	<h1 id="projects" class="text-3xl font-bold px-4">Blog</h1>
	<p class="px-4 text-sm">
		I write about my technical process and other thoughts in between projects.
	</p>
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
