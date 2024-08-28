<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/icons/Logo.svelte';
	import { useJsEnabled } from '$lib/utils/accessibility';
	import { GRAY_50 } from '$lib/utils/color';
	import { useBgPaperRatio } from '../../context';
	import NavLinks from './NavLinks.svelte';

	const bgPaperRatio = useBgPaperRatio();
	$: bg_rgb = GRAY_50.map((l) => l * $bgPaperRatio);
	$: text_rgb = bg_rgb.map((l) => 255 - l);

	const jsEnabled = useJsEnabled();

	$: useGradientBg = $page.route.id !== '/';
	$: useDifferenceBg = !$jsEnabled && $page.route.id === '/';
	$: showBlogLink = $page.route.id === '/blog/[slug]';
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
					<a href="/blog" class="flex gap-4 hover:opacity-50">Blog</a>
				</li>
			{/if}
		</ul>
		<NavLinks />
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
</style>
