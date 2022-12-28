<script lang="ts">
	import hljs from 'highlight.js';
	import type { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

	export let block: CodeBlockObjectResponse;
	const { value } = hljs.highlight(block.code.rich_text[0].plain_text, {
		language: block.code.language,
	});
</script>

<pre class="text-xs"><code>{@html value}</code></pre>
