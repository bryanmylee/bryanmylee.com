<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Logo from '$lib/icons/Logo.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { GRAY_50 } from '$lib/utils/color';
	import { interactOutside } from '$lib/utils/pointer';
	import { useWhite } from './context';

	const white = useWhite();
	$: bgRGB = GRAY_50.map((l) => l * $white);
	$: textRGB = bgRGB.map((l) => 255 - l);

	const jsEnabled = useJsEnabled();
	let showDropdown = false;

	afterNavigate(function closeDropdown() {
		showDropdown = false;
	});
</script>

<nav
	class:strong-gradient={$white === 1}
	class:mix-blend-difference={!$jsEnabled}
	style:--bgRGB={bgRGB.join(',')}
	style:--textRGB={textRGB.join(',')}
>
	<div class="flex justify-between items-start mx-auto tw-container h-12">
		<ul class="flex gap-8 pointer-events-auto translate-y-2">
			<li>
				<a href="/#" class="flex gap-4 font-semibold">
					<Logo class="wh-12 -mx-3 -translate-y-1" /> Bryan Lee
				</a>
			</li>
		</ul>
		<div class="flex flex-col items-end gap-4 text-right">
			<input
				type="checkbox"
				class="md:hidden peer pointer-events-auto"
				bind:checked={showDropdown}
			/>
			<ul class="dropdown" use:interactOutside={() => (showDropdown = false)}>
				<li class="dropdown--item"><a href="/projects">Projects</a></li>
				<li class="dropdown--item"><a href="/blog">Blog</a></li>
				<li class="dropdown--item"><a href="/#work">Work</a></li>
				<li class="dropdown--item"><a href="/#contact">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		@apply pointer-events-none fixed inset-0 bottom-auto z-10 h-28 px-8 pt-9;
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
		@apply flex flex-col gap-x-4 md:flex-row;
		@apply -m-2 rounded-xl p-3.5 text-base shadow-xl;
		@apply md:m-0 md:p-0 md:text-lg md:shadow-none;
		@apply opacity-0 peer-checked:opacity-100 md:opacity-100;
		@apply pointer-events-none peer-checked:pointer-events-auto md:pointer-events-auto;
		@apply transition-opacity;
		background: rgb(var(--bgRGB));
		@media screen and (min-width: 768px) {
			background: transparent;
		}
	}

	.dropdown--item a {
		@apply inline-block rounded-lg px-3.5 py-2 hover:bg-gray-300/20;
	}

	input[type='checkbox'] {
		@apply relative m-0 cursor-pointer appearance-none wh-8;
		background-color: transparent;
	}
	input[type='checkbox']::before {
		content: '';
		background-color: rgb(var(--textRGB));
		@apply absolute top-2 h-0.5 w-full;
		@apply transition-transform;
	}
	input[type='checkbox']::after {
		content: '';
		background-color: rgb(var(--textRGB));
		@apply absolute bottom-2 h-0.5 w-full;
		@apply transition-transform;
	}
	input[type='checkbox']:checked::before {
		@apply translate-y-[0.4375rem] rotate-45;
	}
	input[type='checkbox']:checked::after {
		@apply translate-y-[-0.4375rem] -rotate-45;
	}
</style>
