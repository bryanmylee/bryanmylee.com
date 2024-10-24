<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { PROJECT_CONTENT_IMAGES } from './content/images';

	export let src: string;
	export let alt: string;
	let className = '';
	export { className as class };
</script>

<enhanced:img
	src={PROJECT_CONTENT_IMAGES[src].default}
	{alt}
	sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
	class={twMerge('rounded-xl shadow-md ring-1 ring-ink-200', className)}
/>
