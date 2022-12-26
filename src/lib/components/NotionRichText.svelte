<script lang="ts">
	import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

	export let text: RichTextItemResponse;

	const consumedAnnotation = (
		text: RichTextItemResponse,
		annotation: 'bold' | 'italic' | 'underline' | 'code',
	): RichTextItemResponse => ({
		...text,
		annotations: {
			...text.annotations,
			[annotation]: false,
		},
	});

	const consumedHref = (text: RichTextItemResponse): RichTextItemResponse => ({
		...text,
		href: null,
	});
</script>

{#if text.annotations.bold}
	<strong><svelte:self text={consumedAnnotation(text, 'bold')} /></strong>
{:else if text.annotations.italic}
	<em><svelte:self text={consumedAnnotation(text, 'italic')} /></em>
{:else if text.annotations.underline}
	<u><svelte:self text={consumedAnnotation(text, 'underline')} /></u>
{:else if text.href !== null}
	<a href={text.href}><svelte:self text={consumedHref(text)} /></a>
{:else if text.annotations.code}
	<code><svelte:self text={consumedAnnotation(text, 'code')} /></code>
{:else}
	{text.plain_text}
{/if}
