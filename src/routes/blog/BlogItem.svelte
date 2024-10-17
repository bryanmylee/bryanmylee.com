<script lang="ts">
	import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import { metadataFromProperties } from './metadataFromProperties';

	export let post: PageObjectResponse;
	const { title, subtitle, slug, formattedDate } = metadataFromProperties(post.properties);
</script>

<a
	href="/blog/{slug}"
	class="prose block rounded-xl border border-ink-200 bg-paper-raised p-4 transition-shadow hover:shadow-lg prose-h2:text-xl"
>
	<h2 class="!text-lg text-ink" style="view-transition-name: blog-title-{slug}">
		{title}
	</h2>
	<p class="-mt-2 text-sm text-ink-700" style="view-transition-name: blog-subtitle-{slug}">
		{subtitle}
	</p>
	<p
		class="-mt-1 text-xs font-medium leading-none text-ink-500"
		style="view-transition-name: blog-date-{slug}"
	>
		{formattedDate}
	</p>
</a>
