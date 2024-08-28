<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let src: string;
	export let alt: string;
	export let width: string;
	export let height: string;
	let className = '';
	export { className as class };
</script>

<img
	{src}
	{alt}
	class={twMerge('ring-paper-raised rounded-xl shadow-md ring-1', className)}
	{width}
	{height}
/>
