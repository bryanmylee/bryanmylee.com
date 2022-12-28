<script lang="ts">
	import type {
		BlockObjectResponse,
		PartialBlockObjectResponse,
	} from '@notionhq/client/build/src/api-endpoints';
	import NotionBlock from './NotionBlock.svelte';

	type FlatContent = BlockObjectResponse | PartialBlockObjectResponse;

	type NumberedList = {
		nested: 'numbered_list';
		children: FlatContent[];
	};

	type BulletedList = {
		nested: 'bulleted_list';
		children: FlatContent[];
	};

	type NestedContent = NumberedList | BulletedList;

	export let content: FlatContent[];

	const getEndIdx = (content: FlatContent[], type: string, fromIdx: number): number => {
		let endIdx = fromIdx;
		while (type in content[endIdx]) {
			endIdx++;
		}
		return endIdx;
	};

	const nestedContent: (FlatContent | NestedContent)[] = [];
	for (let idx = 0; idx < content.length; ) {
		const block = content[idx];
		if ('numbered_list_item' in block) {
			const endIdx = getEndIdx(content, 'numbered_list_item', idx);
			let listItems = content.slice(idx, endIdx);
			nestedContent.push({
				nested: 'numbered_list',
				children: listItems,
			});
			idx = endIdx;
		} else if ('bulleted_list_item' in block) {
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
	console.log(nestedContent);
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
