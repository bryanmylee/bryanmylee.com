<script lang="ts">
	import { NEXT_THEME, type Theme } from '$lib/utils/theme';
	import { useTheme } from '../../context';
	import System from '$lib/icons/System.svelte';
	import Sun from '$lib/icons/Sun.svelte';
	import Moon from '$lib/icons/Moon.svelte';

	const theme = useTheme();

	const nameIconForTheme = {
		light: { icon: Sun, name: 'Light' },
		dark: { icon: Moon, name: 'Dark' },
		auto: { icon: System, name: 'System' },
	} as const;
</script>

<div>
	<button class="pointer-events-auto p-1" on:click={() => theme.set(NEXT_THEME[$theme])}>
		<svelte:component this={nameIconForTheme[$theme].icon} />
	</button>
</div>
