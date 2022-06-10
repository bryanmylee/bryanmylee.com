<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../_context';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />
<section class="p-4 mx-auto layout-container">
	<h1 class="mb-4 ml-3 text-3xl font-bold">Applications</h1>
	<div class="grid md:grid-cols-2">
		<ProjectCard
			name="meetwhen.io"
			description="A beautiful and mobile-friendly group scheduling application"
			links={[
				{
					label: 'GitHub',
					href: 'https://github.com/bryanmylee/meetwhen.io',
				},
			]}
		/>
	</div>
</section>
