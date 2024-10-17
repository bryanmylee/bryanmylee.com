<script lang="ts">
	import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import { metadataFromProperties } from './metadataFromProperties';

	export let post: PageObjectResponse;
	const { title, subtitle, slug, formattedDate } = metadataFromProperties(post.properties);
</script>

<a
	href="/blog/{slug}"
	class="border-ink-200 prose block rounded-xl border bg-paper-raised p-4 transition-shadow hover:shadow-lg prose-h2:text-xl"
>
	<h2 class="!text-lg text-ink">{title}</h2>
	<p class="-mt-2 text-sm leading-none text-ink-700">{subtitle}</p>
	<p class="-mt-1 text-xs font-medium leading-none text-ink-500">{formattedDate}</p>
</a>
