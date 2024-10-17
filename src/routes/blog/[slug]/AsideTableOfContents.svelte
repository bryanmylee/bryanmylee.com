<script lang="ts">
	import NotionRichTextArray from '$lib/components/notion/NotionRichTextArray.svelte';
	import { getHeadingId } from '$lib/utils/heading';
	import { getPlainText, type HeadingBlockObjectResponse } from '$lib/utils/notion';

	export let headings: HeadingBlockObjectResponse[];
</script>

<div class="sticky top-24 h-0 w-full">
	<div
		class="toc-trigger group relative h-screen opacity-0 transition-opacity hover:opacity-100 xl:opacity-100"
	>
		<div
			class="pointer-events-none absolute left-2 top-0 w-72 group-hover:pointer-events-auto xl:pointer-events-auto xl:left-full xl:-translate-x-full"
		>
			<aside
				class="border-ink-200 max-w-prose rounded-xl border bg-paper-raised shadow-md xl:border-0 xl:shadow-none"
			>
				<ul class="flex flex-col p-2">
					{#each headings as heading}
						{@const richTextArray = heading.heading.rich_text}
						<li>
							<a
								href="#{getHeadingId(getPlainText(richTextArray))}"
								class="block rounded-lg px-2 py-1.5 text-xs text-ink hover:bg-gray-400/10"
							>
								<NotionRichTextArray richText={richTextArray} />
							</a>
						</li>
					{/each}
				</ul>
			</aside>
		</div>
	</div>
</div>

<style lang="postcss">
	.toc-trigger {
		width: max(calc((100vw - 65ch) / 2), 1rem);
	}
</style>
