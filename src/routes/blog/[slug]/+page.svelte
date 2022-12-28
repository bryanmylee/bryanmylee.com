<script lang="ts">
	import { metadataFromProperties } from '../metadataFromProperties';
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, html } = data;
	const { title, subtitle, formattedDate } = metadataFromProperties(page.properties!);
</script>

<div class="prose px-4 max-w-[65ch] mx-auto prose-h1:text-3xl">
	<article class="px-4 py-32 -mt-24 bg-white">
		<p>
			<sub class="text-sm text-gray-500 font-medium">{formattedDate}</sub>
		</p>

		<h1>{title}</h1>

		<p class="leading-none -mt-4">
			<sub class="text-base text-gray-700">{subtitle}</sub>
		</p>

		{@html html}
	</article>
</div>

<style lang="postcss">
	article :global(p a) {
		@apply text-cyan-500 underline underline-offset-1;
		@apply hover:text-cyan-400;
	}
</style>
