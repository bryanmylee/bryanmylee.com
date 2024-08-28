<script lang="ts">
	import type { PageData } from './$types';
	import BlogItem from './BlogItem.svelte';

	export let data: PageData;
</script>

<header class="mx-auto max-w-[65ch] space-y-4 p-4">
	<h1 id="blog" class="px-4 text-3xl font-bold">{data.title}</h1>
	<p class="px-4 text-sm">{data.subtitle}</p>
</header>

<div class="mx-auto mt-4 max-w-[65ch] px-4">
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
