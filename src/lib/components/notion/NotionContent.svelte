<script lang="ts">
	import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
	import NotionBlock from './NotionBlock.svelte';

	type NumberedList = {
		nested: 'numbered_list';
		children: BlockObjectResponse[];
	};

	type BulletedList = {
		nested: 'bulleted_list';
		children: BlockObjectResponse[];
	};

	type NestedContent = NumberedList | BulletedList;

	export let content: BlockObjectResponse[];

	const getEndIdx = (content: BlockObjectResponse[], type: string, fromIdx: number): number => {
		let endIdx = fromIdx;
		while (content[endIdx].type === type) {
			endIdx++;
		}
		return endIdx;
	};

	const nestedContent: (BlockObjectResponse | NestedContent)[] = [];
	for (let idx = 0; idx < content.length; ) {
		const block = content[idx];
		if (block.type === 'numbered_list_item') {
			const endIdx = getEndIdx(content, 'numbered_list_item', idx);
			let listItems = content.slice(idx, endIdx);
			nestedContent.push({
				nested: 'numbered_list',
				children: listItems,
			});
			idx = endIdx;
		} else if (block.type === 'bulleted_list_item') {
			const endIdx = getEndIdx(content, 'bulleted_list_item', idx);
			let listItems = content.slice(idx, endIdx);
			nestedContent.push({
				nested: 'bulleted_list',
				children: listItems,
			});
			idx = endIdx;
		} else {
			nestedContent.push(block);
			idx++;
		}
	}
</script>

{#each nestedContent as block}
	{#if 'nested' in block}
		{#if block.nested === 'numbered_list'}
			<ol>
				{#each block.children as child}
					<NotionBlock block={child} />
				{/each}
			</ol>
		{:else if block.nested === 'bulleted_list'}
			<ul>
				{#each block.children as child}
					<NotionBlock block={child} />
				{/each}
			</ul>
		{/if}
	{:else}
		<NotionBlock {block} />
	{/if}
{/each}
