<script lang="ts">
	import { syncBgInkRatio } from '$lib/utils/background';
	import { useBgInkRatio, useIsDark } from '../context';

	const isDark = useIsDark();
	const bgInkRatio = useBgInkRatio();
	bgInkRatio.set(1);
	syncBgInkRatio(isDark, bgInkRatio);
</script>

<div class="fixed inset-0 z-[-1] bg-gray-50" />
<slot />
