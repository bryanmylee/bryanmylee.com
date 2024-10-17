<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/icons/Logo.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { getInk, getPaper } from '$lib/utils/color';
	import { lerp } from 'three/src/math/MathUtils';
	import { useBgFillRatio, useIsDark } from '../../context';
	import NavLinksMenu from './NavLinksMenu.svelte';
	import NavThemeToggle from './NavThemeToggle.svelte';

	const isDark = useIsDark();
	const bgFillRatio = useBgFillRatio();
	$: bgScrollRgb = getPaper($isDark).raised.map((l) => lerp(0, l, $bgFillRatio));
	$: textScrollRgb = getInk($isDark).DEFAULT.map((l) => lerp(255, l, $bgFillRatio));
	$: borderScrollRgb = getInk($isDark)['200'].map((l) => lerp(38, l, $bgFillRatio));

	const jsEnabled = useJsEnabled();

	$: useGradientBg = $jsEnabled || $page.route.id !== '/';
	$: useDynamicColors = $jsEnabled || $page.route.id === '/';
	$: showBlogLink = $page.route.id === '/blog/[slug]';
</script>

<nav
	class:strong-gradient={useGradientBg}
	class:mix-blend-difference={!useGradientBg}
	class="pointer-events-none fixed inset-0 bottom-auto z-10 h-28 px-8 pt-9 text-xl tracking-tight"
	style:--bg-scroll={useDynamicColors ? bgScrollRgb.join(' ') : ''}
	style:--text-scroll={useDynamicColors ? textScrollRgb.join(' ') : ''}
	style:--border-scroll={useDynamicColors ? borderScrollRgb.join(' ') : ''}
>
	<div class="tw-container mx-auto flex h-12 items-start justify-between">
		<ul class="pointer-events-auto flex translate-y-1">
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
			<NavThemeToggle />
		</div>
	</div>
</nav>

<style lang="postcss">
	nav {
		--bg-nav: var(--bg-scroll, var(--paper-raised));
		--text-nav: var(--text-scroll, var(--ink-DEFAULT));
		--border-nav: var(--border-scroll, var(--ink-200));
		color: rgb(var(--text-nav));
	}

	nav.strong-gradient {
		background-image: linear-gradient(
			to bottom,
			rgb(var(--bg-nav) / 1) 0%,
			rgb(var(--bg-nav) / 0.3) 50%,
			rgb(var(--bg-nav) / 0.15) 65%,
			rgb(var(--bg-nav) / 0.075) 75.5%,
			rgb(var(--bg-nav) / 0.037) 82.85%,
			rgb(var(--bg-nav) / 0.019) 88%,
			rgb(var(--bg-nav) / 0) 100%
		);
	}
</style>
