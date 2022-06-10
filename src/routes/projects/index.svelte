<script lang="ts">
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../_context';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />
<h1>Projects</h1>
