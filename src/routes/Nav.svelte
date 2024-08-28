<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Logo from '$lib/icons/Logo.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { GRAY_50 } from '$lib/utils/color';
	import { interactOutside } from '$lib/utils/pointer';
	import { useBgPaperRatio } from './context';

	const bgPaperRatio = useBgPaperRatio();
	$: bg_rgb = GRAY_50.map((l) => l * $bgPaperRatio);
	$: text_rgb = bg_rgb.map((l) => 255 - l);

	const jsEnabled = useJsEnabled();
	let showDropdown = false;

	$: useGradientBg = $page.route.id !== "/";
	$: useDifferenceBg = !$jsEnabled && $page.route.id === "/";
	$: showBlogLink = $page.route.id === '/blog/[slug]';

	afterNavigate(function closeDropdown() {
		showDropdown = false;
	});
</script>

<nav
	class:strong-gradient={useGradientBg}
	class:mix-blend-difference={useDifferenceBg}
	style:--bg_rgb={bg_rgb.join(',')}
	style:--text_rgb={text_rgb.join(',')}
>
	<div class="tw-container mx-auto flex h-12 items-start justify-between">
		<ul class="pointer-events-auto flex translate-y-2">
			<li>
				<a href="/#" class="flex gap-4 font-semibold hover:opacity-50">
					<Logo class="-mx-3 -translate-y-1 wh-12" /> Bryan Lee
				</a>
			</li>
			{#if showBlogLink}
				<li class="flex">
					<span class="w-2" />
					/
					<span class="w-2" />
					<a href="/blog" class="flex gap-4 hover:opacity-50"> Blog </a>
				</li>
			{/if}
		</ul>
		<div class="flex flex-col items-end gap-4 text-right">
			<input
				id="dropdown-trigger"
				type="checkbox"
				class="peer pointer-events-auto md:hidden"
				bind:checked={showDropdown}
			/>
			<ul
				class="dropdown"
				use:interactOutside={(ev) => {
					if (ev.target instanceof HTMLElement && ev.target.id === 'dropdown-trigger') {
						return;
					}
					showDropdown = false;
				}}
			>
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
		color: rgb(var(--text_rgb));
	}

	nav.strong-gradient {
		background-image: linear-gradient(
			to bottom,
			rgba(var(--bg_rgb), 1) 0%,
			rgba(var(--bg_rgb), 0.3) 50%,
			rgba(var(--bg_rgb), 0.15) 65%,
			rgba(var(--bg_rgb), 0.075) 75.5%,
			rgba(var(--bg_rgb), 0.037) 82.85%,
			rgba(var(--bg_rgb), 0.019) 88%,
			rgba(var(--bg_rgb), 0) 100%
		);
	}

	.dropdown {
		@apply flex flex-col gap-x-4 md:flex-row;
		@apply -m-2 rounded-xl p-3.5 text-base shadow-xl;
		@apply md:m-0 md:p-0 md:text-lg md:shadow-none;
		@apply opacity-0 peer-checked:opacity-100 md:opacity-100;
		@apply pointer-events-none peer-checked:pointer-events-auto md:pointer-events-auto;
		@apply transition-opacity;
		background: rgb(var(--bg_rgb));
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
		background-color: rgb(var(--text_rgb));
		@apply absolute top-2 h-0.5 w-full;
		@apply transition-transform;
	}
	input[type='checkbox']::after {
		content: '';
		background-color: rgb(var(--text_rgb));
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
