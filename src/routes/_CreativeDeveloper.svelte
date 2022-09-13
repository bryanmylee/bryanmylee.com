<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import ScrollDownIndicator from '$lib/components/ScrollDownIndicator.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import ProgressiveFadeIn from '$lib/components/ProgressiveFadeIn.svelte';
</script>

<ScrollProgress scrollDistance={150} let:progress let:outProgress>
	<ProgressiveFadeIn>
		<div style:opacity={1 - outProgress}>
			<div class="absolute top-0 wh-screen flex items-center justify-center">
				<h1 class="text-dyn-8 font-bold text-center text-white leading-tight">
					{#each 'Meet your next creative developer.'.split(' ') as word, wordIdx}
						{@const isCreative = wordIdx === 3}
						{#if isCreative}
							<br />
						{/if}
						<span
							class="inline-block"
							in:fly={{ y: 20, delay: wordIdx * 125 + 500, duration: 1250, easing: cubicOut }}
						>
							{#if isCreative}
								<GradientSpan color="#85D8FF">{word}</GradientSpan>
							{:else}
								{word}
							{/if}
						</span>
					{/each}
				</h1>
			</div>
			<div
				class="absolute top-[50vh] wh-screen translate-y-[16vw]"
				in:fade={{ delay: 1000, duration: 1000 }}
			>
				<ScrollDownIndicator {progress} class="w-4/5 2xl:w-1/2 mx-auto" />
			</div>
		</div>
	</ProgressiveFadeIn>
</ScrollProgress>
