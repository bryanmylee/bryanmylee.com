<script lang="ts">
	import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import { metadataFromProperties } from './metadataFromProperties';

	export let post: PageObjectResponse;
	const { title, subtitle, formattedDate } = metadataFromProperties(post.properties);

	const slugText = title
		.split(' ')
		.slice(0, 5)
		.map((token) => token.toLowerCase())
		.join('-');

	const slugId = post.id.split('-').join('');
</script>

<a
	href="/blog/{slugText}-{slugId}"
	class="block bg-white rounded-xl p-4 hover:shadow-lg transition-shadow"
>
	<h2 class="font-semibold text-lg">{title}</h2>
	<p class="leading-none">
		<sub class="text-sm text-gray-700">{subtitle}</sub>
	</p>
	<p>
		<sub class="text-xs text-gray-500 font-medium">{formattedDate}</sub>
	</p>
</a>
