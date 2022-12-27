<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	let className = '';
	export { className as class };
</script>

<div class={twMerge('z-[-1] flex-1 grid gap-4 md:max-w-[65ch] lg:max-w-none w-full', className)}>
	<slot />
</div>
