<script lang="ts">
	import { syncBgFillRatio } from '$lib/utils/background';
	import { useBgFillRatio, useIsDark } from '../../../context';

	const isDark = useIsDark();
	const bgFillRatio = useBgFillRatio();
	bgFillRatio.set(1);
	syncBgFillRatio(isDark, bgFillRatio);
</script>

<div class="fixed inset-0 z-[-1] bg-paper" />

<article class="mx-auto max-w-[65ch] px-8 py-32">
	<div class="prose -my-24 dark:prose-invert">
		<div class="flex items-center gap-4">
			<img
				src="/projects/dough/icon.webp"
				alt="App icon"
				class="!m-0
      rounded-2xl wh-16"
			/>
			<h1 class="!mb-0">Dough</h1>
		</div>

		<h2 id="privacy" class="scroll-mt-28">Delete your account</h2>
		<p class="italic text-ink-400">Last Modified: 5 Oct 2025.</p>

		<section>
			<p>
				To delete your account, visit the <a
					href="https://dough.now/settings/profile/delete"
					target="_blank"
					rel="noopener noreferrer">account deletion</a
				> page on Dough.
			</p>

			<img
				src="/projects/dough/delete-account.webp"
				alt="Screenshot of the account deletion page"
				class="mx-auto max-w-xs rounded-[40px]"
			/>
		</section>
	</div>
</article>

<style lang="postcss">
	:global(p a) {
		@apply text-cyan-500 underline underline-offset-1 gdark:text-cyan-200;
		@apply hover:text-cyan-400 gdark:hover:text-cyan-100;
	}
</style>
