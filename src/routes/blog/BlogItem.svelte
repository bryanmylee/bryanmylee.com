<script lang="ts">
	import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import { metadataFromProperties } from './metadataFromProperties';

	export let post: PageObjectResponse;
	const { title, subtitle, slug, formattedDate } = metadataFromProperties(post.properties);
</script>

<a
	href="/blog/{slug}"
	class="prose block rounded-xl bg-paper-raised p-4 transition-shadow hover:shadow-lg prose-h2:text-xl"
>
	<h2 class="!text-lg text-ink">{title}</h2>
	<p class="-mt-4 leading-none">
		<sub class="text-sm text-ink-700">{subtitle}</sub>
	</p>
	<p class="-mt-3 leading-none">
		<sub class="text-xs font-medium text-ink-500">{formattedDate}</sub>
	</p>
</a>
