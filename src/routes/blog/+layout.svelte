<script lang="ts">
	import { syncBgFillRatio } from '$lib/utils/background';
	import { useBgFillRatio, useIsDark } from '../context';

	const isDark = useIsDark();
	const bgFillRatio = useBgFillRatio();
	bgFillRatio.set(1);
	syncBgFillRatio(isDark, bgFillRatio);
</script>

<div class="fixed inset-0 z-[-1] bg-paper" />
<slot />
