<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import GradientSpan from '$lib/components/GradientSpan.svelte';
	import ProgressiveFadeIn from '$lib/components/ProgressiveFadeIn.svelte';
	import ScrollDownIndicator from './ScrollDownIndicator.svelte';
</script>

<ScrollProgress scrollDistance={150} let:progress let:outProgress>
	<ProgressiveFadeIn delay={2000}>
		<div style:opacity={1 - outProgress}>
			<div class="absolute top-0 flex h-screen w-full flex-col items-center justify-center">
				<p class="text-center font-bold leading-tight text-white text-dyn-8">
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
				</p>
				<p class="text-balance text-dyn-3 my-8 px-8 text-center italic text-ink-600">
					Proud generalist with years of experience bringing products to life.
				</p>
			</div>
			<div
				class="absolute top-[50lvh] h-screen w-full translate-y-[22lvw]"
				in:fade={{ delay: 1000, duration: 1000 }}
			>
				<ScrollDownIndicator {progress} class="mx-auto w-4/5 2xl:w-1/2" />
			</div>
		</div>
	</ProgressiveFadeIn>
</ScrollProgress>
