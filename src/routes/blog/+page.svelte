<script lang="ts">
	import type { PageData } from './$types';
	import BlogItem from './BlogItem.svelte';

	export let data: PageData;
</script>

<header class="mx-auto p-4 max-w-[65ch] space-y-4">
	<h1 id="blog" class="text-3xl font-bold px-4">Blog</h1>
	<p class="px-4 text-sm">{data.subtitle}</p>
</header>

<div class="mx-auto px-4 mt-4 max-w-[65ch]">
	<ul class="space-y-4">
		{#each data.pagesResponse.results as post}
			{#if 'properties' in post}
				<li>
					<BlogItem {post} />
				</li>
			{/if}
		{/each}
	</ul>
</div>
