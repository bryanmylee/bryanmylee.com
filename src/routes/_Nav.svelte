<script lang="ts">
	import Logo from '$lib/icons/Logo.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';
	import { gray50 } from '$lib/utils/color';
	import { useWhite } from './_context';

	const white = useWhite();
	$: bgRGB = gray50.map((l) => l * $white);
	$: textRGB = bgRGB.map((l) => 255 - l);

	const jsEnabled = isJsEnabled();
</script>

<nav
	class:strong-gradient={$white === 1}
	class:mix-blend-difference={!$jsEnabled}
	style:--bgRGB={bgRGB.join(',')}
	style:--textRGB={textRGB.join(',')}
>
	<div class="flex justify-between mx-auto layout-container">
		<ul class="flex gap-8 pointer-events-auto">
			<li>
				<a href="/" class="flex gap-4 font-semibold">
					<Logo class="w-6 h-12 -translate-y-1" /> Bryan Lee
				</a>
			</li>
		</ul>
		<div class="flex flex-col items-end gap-4 text-right">
			<input type="checkbox" class="md:hidden peer pointer-events-auto" />
			<ul class="dropdown">
				<li><a href="/projects">Projects</a></li>
				<li><a href="/#work">Work</a></li>
				<li><a href="/#contact">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply fixed inset-0 bottom-auto z-10 h-28 px-8 pt-9 pointer-events-none;
		@apply text-xl tracking-tight;
		color: rgb(var(--textRGB));
		background-image: linear-gradient(to bottom, rgba(var(--bgRGB), 0.5), rgba(var(--bgRGB), 0));
	}

	nav.strong-gradient {
		background-image: linear-gradient(
			to bottom,
			rgb(var(--bgRGB)),
			rgba(var(--bgRGB), 0.9) 60%,
			rgba(var(--bgRGB), 0)
		);
	}

	.dropdown {
		@apply flex flex-col gap-x-8 md:flex-row;
		@apply text-lg -m-2 p-4 shadow-xl rounded-xl;
		@apply md:text-xl md:m-0 md:p-0 md:shadow-none;
		@apply opacity-0 md:opacity-100 peer-checked:opacity-100;
		@apply pointer-events-none md:pointer-events-auto peer-checked:pointer-events-auto;
		@apply transition-opacity;
		background: rgb(var(--bgRGB));
		@media screen and (min-width: 768px) {
			background: transparent;
		}
	}

	.dropdown li a {
		@apply inline-block hover:bg-gray-300/20 p-2 rounded-lg;
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
