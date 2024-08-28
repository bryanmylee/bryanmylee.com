<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/icons/Logo.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { getPaper } from '$lib/utils/color';
	import { useBgInkRatio, useIsDark } from '../../context';
	import NavLinksMenu from './NavLinksMenu.svelte';
	import NavThemeMenu from './NavThemeMenu.svelte';

	const isDark = useIsDark();
	const bgInkRatio = useBgInkRatio();
	$: bg_rgb = getPaper($isDark).DEFAULT.map((l) => l * $bgInkRatio);
	$: text_rgb = bg_rgb.map((l) => 255 - l);

	const jsEnabled = useJsEnabled();

	$: useGradientBg = $jsEnabled || $page.route.id !== '/';
	$: useDifferenceBg = !$jsEnabled && $page.route.id === '/';
	$: showBlogLink = $page.route.id === '/blog/[slug]';
</script>

<nav
	class:strong-gradient={useGradientBg}
	class:mix-blend-difference={useDifferenceBg}
	class="pointer-events-none fixed inset-0 bottom-auto z-10 h-28 px-8 pt-9 text-xl tracking-tight"
	style:--bg-rgb={bg_rgb.join(',')}
	style:--text-rgb={text_rgb.join(',')}
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
					<a href="/blog" class="flex gap-4 hover:opacity-50">Blog</a>
				</li>
			{/if}
		</ul>
		<div class="flex gap-4">
			<NavLinksMenu />
			<NavThemeMenu />
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		color: rgb(var(--text-rgb));
	}

	nav.strong-gradient {
		background-image: linear-gradient(
			to bottom,
			rgba(var(--bg-rgb), 1) 0%,
			rgba(var(--bg-rgb), 0.3) 50%,
			rgba(var(--bg-rgb), 0.15) 65%,
			rgba(var(--bg-rgb), 0.075) 75.5%,
			rgba(var(--bg-rgb), 0.037) 82.85%,
			rgba(var(--bg-rgb), 0.019) 88%,
			rgba(var(--bg-rgb), 0) 100%
		);
	}
</style>
