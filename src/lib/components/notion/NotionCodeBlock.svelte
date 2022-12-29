<script lang="ts">
	import hljs from 'highlight.js';
	import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import { splitCaptionProperties } from '$lib/utils/notion';
	import { tryResult } from '$lib/utils/error';

	export let block: CodeBlockObjectResponse;
	const { properties } = splitCaptionProperties(block.code.caption);
	const language = properties.lang ?? block.code.language;
	const plainCode = block.code.rich_text[0].plain_text;
	const hljsResult = tryResult(() =>
		hljs.highlight(plainCode, {
			language,
		}),
	);
</script>

<!-- prettier-ignore -->
<pre class="text-xs"><code>{#if hljsResult.isOk()}{@html hljsResult.unwrap().value}{:else}{plainCode}{/if}</code></pre>
