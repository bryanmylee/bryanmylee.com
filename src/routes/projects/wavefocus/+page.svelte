<script lang="ts">
	import { syncBackgroundWhite } from '$lib/utils/background';
	import { useWhite } from '../../context';

	const white = useWhite();
	white.set(1);
	syncBackgroundWhite(white);
</script>

<div class="fixed inset-0 bg-gray-50 z-[-1]" />

<article class="max-w-[65ch] mx-auto p-4">
	<div class="px-6 py-4 bg-white rounded-xl prose">
		<h1 class="mt-8">Wave</h1>
		<h2 id="privacy" class="scroll-mt-28">Privacy Policy</h2>
		<p>This policy is effective as of 13 Oct 2022.</p>
		<h3>Collection and storage</h3>
		<p>
			Wave provides an optional function to sync timers across devices. This requires storage of the
			account information used to log in to Wave. Wave currently supports Google Sign-in and Sign in
			with Apple, and only has access to the email and display name of the account.
		</p>
		<p>
			Wave sends push notifications when timers are completed. This requires the collection and
			storage of the anonymized device token provided by Firebase.
		</p>
		<p>
			Wave does not collect any analytics data, perform any user tracking, or use any cookies
			explicitly. However, it makes use of Google Firebase for authentication and storage.
		</p>
		<h3>Retention</h3>
		<p>
			All information related to user accounts (email, display name, device tokens) is retained for
			up to one year after inactivity before being automatically deleted.
		</p>
		<p>
			All information related to user behavior (focus activity) is retained for two days before
			being automatically deleted.
		</p>
		<h3>Access and correction</h3>
		<p>
			You may request access to any personal information that Wave may have collected about you. You
			may also request correction of your personal information if you believe that it is not
			accurate, complete, or up-to-date. For access and correction, contact <a href="/#contact"
				>Bryan Lee</a
			>.
		</p>
	</div>
</article>

<div class="w-full h-40 bg-gray-50" />

<style lang="postcss">
	article :global(p a) {
		@apply text-cyan-500 underline underline-offset-1;
		@apply hover:text-cyan-400;
	}
</style>
