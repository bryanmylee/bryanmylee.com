<script lang="ts">
	import { syncBgPaperRatio } from '$lib/utils/background';
	import { useBgPaperRatio } from '../context';

	const bgPaperRatio = useBgPaperRatio();
	bgPaperRatio.set(1);
	syncBgPaperRatio(bgPaperRatio);
</script>

<div class="fixed inset-0 z-[-1] bg-gray-50" />
<slot />
