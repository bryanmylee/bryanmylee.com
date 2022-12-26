<script lang="ts">
	import type { PageData } from './$types';
	import BlogItem from './BlogItem.svelte';

	export let data: PageData;
</script>

<div class="contents">
	<h1 id="projects" class="text-3xl font-bold text-center">Blog</h1>
	<ul class="mx-auto max-w-[65ch] p-8">
		{#each data.results as post}
			{#if 'properties' in post}
				<li class="contents">
					<BlogItem {post} />
				</li>
			{/if}
		{/each}
	</ul>
</div>
