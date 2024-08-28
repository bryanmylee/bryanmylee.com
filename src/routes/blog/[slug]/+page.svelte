<script lang="ts">
	import NotionContent from '$lib/components/notion/NotionContent.svelte';
	import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import { useLogger } from '../../context';
	import type { PageData } from './$types';

	export let data: PageData;

	const { pageId, slug, title, subtitle, formattedDate } = data;
	const content = data.content.filter((block) => 'type' in block) as BlockObjectResponse[];

	const logger = useLogger();
	$: $logger?.log('blog_view', {
		title,
		blog_id: pageId,
		blog_slug: slug,
	});
</script>

<div class="prose mx-auto max-w-[65ch] px-4 prose-h1:text-3xl">
	<article class="-mt-24 bg-white px-4 py-32">
		<p>
			<sub class="text-sm font-medium text-gray-500">{formattedDate}</sub>
		</p>

		<h1>{title}</h1>

		<p class="-mt-4 leading-none">
			<sub class="text-base text-gray-700">{subtitle}</sub>
		</p>

		<NotionContent {content} />
	</article>
</div>

<style lang="postcss">
	article {
		:global(p a) {
			@apply text-cyan-500 underline underline-offset-1;
			@apply hover:text-cyan-400;
		}

		:global(figure img) {
			@apply mx-auto w-full rounded-lg;
		}
	}
</style>
