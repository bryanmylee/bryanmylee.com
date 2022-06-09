<script lang="ts">
	import Hearing from '$lib/icons/Hearing.svelte';
	import Seeing from '$lib/icons/Seeing.svelte';
	import { isJsEnabled } from '$lib/utils/accessibility';

	export let progress = 0;

	const jsEnabled = isJsEnabled();
</script>

<div
	class="{$jsEnabled
		? 'absolute inset-0'
		: 'sticky top-0 w-screen h-screen'} flex flex-col justify-center items-center"
>
	<div
		class="bg-white/10 w-full absolute top-1/2 -translate-y-1/2"
		style:height="{progress * 100}vh"
	/>
	<Seeing color="#85D8FF" />
	<Hearing color="#C46C66" />
</div>
