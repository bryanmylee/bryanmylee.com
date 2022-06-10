<script lang="ts">
	import Logo from '$lib/icons/Logo.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { WHITE_LEVELS } from '$lib/utils/color';
	import { useWhite } from './_context';

	const white = useWhite();
	$: bgRGB = WHITE_LEVELS.map((l) => l * $white);
	$: textRGB = bgRGB.map((l) => 255 - l);

	const jsEnabled = isJsEnabled();
</script>

<nav
	class:mix-blend-difference={!$jsEnabled}
	style:background-image="linear-gradient(to bottom, rgb({bgRGB}), rgba({bgRGB}, 0))"
	style:--bgRGB={bgRGB.join(',')}
	style:--textRGB={textRGB.join(',')}
>
	<div class="flex justify-between mx-auto layout-container">
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
				<li><a href="/#work">Work</a></li>
				<li><a href="/#contact">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply fixed inset-0 bottom-auto z-10;
		@apply px-8 pt-9;
		@apply text-xl tracking-tight;
		color: rgb(var(--textRGB));
	}

	input[type='checkbox'] {
		@apply appearance-none m-0 relative wh-8 cursor-pointer;
		background-color: transparent;
	}
	input[type='checkbox']::before {
		content: '';
		background-color: rgb(var(--textRGB));
		@apply absolute top-2 w-full h-0.5;
		@apply transition-transform;
	}
	input[type='checkbox']::after {
		content: '';
		background-color: rgb(var(--textRGB));
		@apply absolute bottom-2 w-full h-0.5;
		@apply transition-transform;
	}
	input[type='checkbox']:checked::before {
		@apply rotate-45 translate-y-[0.4375rem];
	}
	input[type='checkbox']:checked::after {
		@apply -rotate-45 translate-y-[-0.4375rem];
	}
</style>
