<script>
	import { useJsEnabled } from '$lib/utils/accessibility';

	import PhoneTemplate from './PhoneTemplate.svelte';

	export let progress = 0;
	$: opacity = progress < 0.9 ? 1 : 1 - (progress - 0.9) / 0.1;

	const jsEnabled = useJsEnabled();
</script>

<div class={$jsEnabled ? 'fixed inset-0' : ''} style:opacity={!$jsEnabled ? 1 : opacity}>
	<PhoneTemplate {progress} class="wh-full" />
</div>
