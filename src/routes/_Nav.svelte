<script lang="ts">
	import Logo from '$lib/icons/Logo.svelte';
	import { useTheme } from './_context';

	const theme = useTheme();
</script>

<nav
	class="fixed inset-0 bottom-auto z-10 flex justify-between p-8 mt-1 text-xl tracking-tight text-white mix-blend-difference"
>
	<ul class="flex gap-8">
		<li>
			<a href="/" class="flex gap-4 font-semibold">
				<Logo class="w-6 -translate-y-1" /> Bryan Lee
			</a>
		</li>
	</ul>
	<div class="flex flex-col items-end gap-4 text-right">
		<input type="checkbox" class="md:hidden peer" />
		<ul class="flex-col hidden mr-2 gap-y-4 md:flex gap-x-8 md:flex-row peer-checked:flex">
			<li><a href="/projects">Projects</a></li>
			<li><a href="/projects">Work</a></li>
			<li><a href="/#contact">Contact</a></li>
		</ul>
	</div>
</nav>

<style lang="postcss">
	input[type='checkbox'] {
		@apply appearance-none bg-black m-0 relative wh-8 cursor-pointer;
	}
	input[type='checkbox']::before {
		content: '';
		@apply absolute top-2 w-full h-0.5 bg-white;
		@apply transition-transform;
	}
	input[type='checkbox']::after {
		content: '';
		@apply absolute bottom-2 w-full h-0.5 bg-white;
		@apply transition-transform;
	}
	input[type='checkbox']:checked::before {
		@apply rotate-45 translate-y-[0.4375rem];
	}
	input[type='checkbox']:checked::after {
		@apply -rotate-45 translate-y-[-0.4375rem];
	}
</style>
