<script lang="ts">
	import { page } from '$app/stores';
	import { parseTheme } from '$lib/utils/theme';
	import { useTheme } from '../../context';
	import { enhance } from '$app/forms';
	import { interactOutside } from '$lib/utils/pointer';
	import { afterNavigate } from '$app/navigation';
	import System from '$lib/icons/System.svelte';
	import Sun from '$lib/icons/Sun.svelte';
	import Moon from '$lib/icons/Moon.svelte';

	let showDropdown = false;
	afterNavigate(function closeDropdown() {
		showDropdown = false;
	});

	$: safeUrl = encodeURIComponent($page.url.toString());

	const theme = useTheme();
	$: nextTheme = $theme === 'light' ? 'dark' : 'light';

	const nameIconForTheme = {
		light: { icon: Sun, name: 'Light' },
		dark: { icon: Moon, name: 'Dark' },
		auto: { icon: System, name: 'System' },
	} as const;
</script>

<form
	method="post"
	use:enhance={({ cancel, action }) => {
		// If JavaScript is enabled, manually update the theme without reloading the page.
		cancel();
		const newTheme = parseTheme(action.searchParams.get('theme'));
		theme.set(newTheme);

		// Manually update the theme cookie client-side.
		document.cookie = `theme=${newTheme};path=/;samesite=lax`;

		showDropdown = false;
	}}
>
	<button
		formaction="/set-theme?theme={nextTheme}&current-url={safeUrl}"
		class="pointer-events-auto p-1"
	>
		<svelte:component this={nameIconForTheme[$theme].icon} />
	</button>
</form>
