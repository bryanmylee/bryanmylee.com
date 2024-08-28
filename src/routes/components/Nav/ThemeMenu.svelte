<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { parseTheme } from '$lib/utils/theme';
	import { useTheme } from '../../context';
	import { enhance } from '$app/forms';

	$: safeUrl = encodeURIComponent($page.url.toString());
	const theme = useTheme();
</script>

<div>
	<form
		use:enhance={({ cancel, action }) => {
			// If JavaScript is enabled, manually update the theme without reloading the page.
			cancel();
			const newTheme = parseTheme(action.searchParams.get('theme'));
			theme.set(newTheme);

			// Manually update the theme cookie client-side.
			document.cookie = `theme=${newTheme};path=/;samesite=lax`;
		}}
		method="post"
		class="pointer-events-auto flex gap-2"
	>
		<Button size="sm" formaction="/set-theme?theme=dark&current-url={safeUrl}">Dark</Button>
		<Button size="sm" formaction="/set-theme?theme=light&current-url={safeUrl}">Light</Button>
		<Button size="sm" formaction="/set-theme?theme=auto&current-url={safeUrl}">System</Button>
	</form>
</div>
