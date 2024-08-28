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
	const nameIconForTheme = {
		light: { icon: Sun, name: 'Light' },
		dark: { icon: Moon, name: 'Dark' },
		auto: { icon: System, name: 'System' },
	} as const;

	let trigger: HTMLInputElement | undefined = undefined;
</script>

<div class="relative ml-[-50px] flex flex-col items-end gap-4">
	<input
		type="checkbox"
		bind:this={trigger}
		bind:checked={showDropdown}
		class="dropdown--trigger peer"
	/>
	<svelte:component this={nameIconForTheme[$theme].icon} class="absolute inset-1 left-auto" />
	<form
		class="dropdown"
		use:enhance={({ cancel, action }) => {
			// If JavaScript is enabled, manually update the theme without reloading the page.
			cancel();
			const newTheme = parseTheme(action.searchParams.get('theme'));
			theme.set(newTheme);

			// Manually update the theme cookie client-side.
			document.cookie = `theme=${newTheme};path=/;samesite=lax`;

			showDropdown = false;
		}}
		use:interactOutside={(ev) => {
			if (ev.target instanceof HTMLElement && ev.target === trigger) {
				return;
			}
			showDropdown = false;
		}}
		method="post"
	>
		{#each Object.entries(nameIconForTheme) as [themeId, { name, icon }]}
			<button formaction="/set-theme?theme={themeId}&current-url={safeUrl}">
				<svelte:component this={icon} class="wh-5" />
				{name}
			</button>
		{/each}
	</form>
</div>

<style lang="postcss">
	.dropdown {
		@apply flex flex-col;
		@apply -m-2 rounded-xl p-3 text-base shadow-xl;
		@apply opacity-0 peer-checked:opacity-100;
		@apply pointer-events-none peer-checked:pointer-events-auto;
		@apply transition-opacity;
		background: rgb(var(--bg-rgb));
	}

	.dropdown button {
		@apply rounded-lg px-1.5 py-1 hover:bg-gray-300/20;
		@apply inline-flex items-center gap-2;
		@apply text-sm;
	}

	.dropdown--trigger {
		@apply relative m-0 cursor-pointer appearance-none wh-8;
		@apply pointer-events-auto;
	}
</style>
