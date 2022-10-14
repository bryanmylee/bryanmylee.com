<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let src: string;
	export let alt: string;
	export let width: number;
	export let height: number;
	let className = '';
	export { className as class };
</script>

<img {src} {alt} class={twMerge('border shadow-md rounded-xl', className)} {width} {height} />
