<script lang="ts">
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useBgPaperRatio } from '../context';

	const white = useBgPaperRatio();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 z-[-1] bg-gray-50" />
<slot />
