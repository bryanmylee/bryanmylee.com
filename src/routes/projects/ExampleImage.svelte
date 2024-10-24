<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { PROJECT_CONTENT_IMAGES } from './content/images';

	export let src: string;
	export let alt: string;
	let className = '';
	export { className as class };

	$: imageModule = PROJECT_CONTENT_IMAGES[src];
	$: imageClass = twMerge('rounded-xl shadow-md ring-1 ring-ink-200', className);
</script>

<!-- workaround for lack of animated gif support -->
{#if src.endsWith('.gif')}
	<img
		src="src/routes/projects/content/{src}"
		{alt}
		width={imageModule.default.img.w}
		height={imageModule.default.img.h}
		class={imageClass}
	/>
{:else}
	<enhanced:img
		src={imageModule.default}
		sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
		{alt}
		class={imageClass}
	/>
{/if}
