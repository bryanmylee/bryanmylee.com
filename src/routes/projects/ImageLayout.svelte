<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let right = false;
	export let singleColumn = false;
	export let xl = false;
</script>

<div
	class="z-[-1] flex-1 grid grid-cols-2 gap-4 md:max-w-[60ch] lg:max-w-none w-full {twMerge(
		right
			? xl
				? 'lg:-ml-52 xl:-ml-96'
				: 'lg:-ml-52 xl:ml-0'
			: xl
			? 'lg:-mr-52 xl:-mr-96'
			: 'lg:-mr-52 xl:mr-0',
		xl && !singleColumn ? 'xl:grid-cols-3' : '',
		singleColumn ? 'grid-cols-1' : '',
	)}"
>
	<slot />
</div>
