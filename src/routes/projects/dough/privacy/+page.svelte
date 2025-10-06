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

		<h2 id="privacy" class="scroll-mt-28">Privacy Policy</h2>
		<p class="italic text-ink-400">Last Modified: 5 Oct 2025.</p>

		<section>
			<h3>Introduction</h3>
			<p>
				Dough (“the App”) is developed and operated by <strong>Bryan Lee</strong> (“we,” “us,” or “our”).
				This Privacy Policy explains how we collect, use, disclose, and protect your personal information
				when you use Dough. By using the App you agree to this Privacy Policy.
			</p>
		</section>

		<section>
			<h3>1. Information We Collect</h3>

			<h4>User-provided data</h4>
			<p>
				We collect information you provide directly to us, including name, email address, and
				profile information used for authentication. Authentication is handled by <strong
					>Supabase Auth</strong
				>. See
				<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer"
					>Supabase’s Privacy Policy</a
				> for details.
			</p>

			<h4>Financial and transaction data</h4>
			<p>
				We store budgeting data such as transactions, balances, and optional bank account names.
				This data is stored in <strong>Supabase</strong> and synchronized with
				<strong>JourneyApps PowerSync</strong> to support offline access and reliable
				synchronization. See
				<a href="https://www.powersync.com/legal/privacy-policy"
					>JourneyApps PowerSync’s Privacy Policy</a
				> for details.
			</p>
			<p>
				Optionally, you may connect your email mailbox so Dough can detect and import transaction
				receipts. Email data is accessed solely to extract transaction-related information needed
				for the feature and is not shared beyond what is necessary to provide that feature.
			</p>

			<h4>Device & usage data</h4>
			<p>
				We use <strong>Sentry</strong> to collect diagnostic and usage information, including crash
				logs, app performance metrics, feature usage, and device information (device model, OS
				version, and similar technical data). See
				<a href="https://sentry.io/legal/privacy/3.3.1/" target="_blank" rel="noopener noreferrer"
					>Sentry’s Privacy Policy</a
				> for details.
			</p>

			<h4>Payment data</h4>
			<p>
				Subscription payments are processed by <strong>Stripe</strong>. Dough does not store payment
				card details – Stripe handles all payment information. See
				<a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer"
					>Stripe’s Privacy Policy</a
				> for details.
			</p>

			<p>
				<strong>Note:</strong> We do not collect location data, health data, advertising identifiers,
				or other sensitive personal data. We do not collect payment card numbers or account passwords.
			</p>
		</section>

		<section>
			<h3>2. How We Use Your Information</h3>
			<p>We use your data to:</p>
			<ul>
				<li>Provide and maintain Dough’s budgeting and tracking features;</li>
				<li>Sync and back up your data to enable multi-device and offline functionality;</li>
				<li>Process subscription payments via Stripe;</li>
				<li>Monitor and improve app reliability and performance using Sentry;</li>
				<li>Respond to support requests and communicate important account-related information.</li>
			</ul>
			<p>We do not sell or rent your personal information to third parties.</p>
		</section>

		<section>
			<h3>3. Data Sharing and Disclosure</h3>
			<p>
				We do not share your personal data with third parties except with service providers
				necessary for the App’s operation. These providers act as processors on our behalf and
				include:
			</p>
			<ul>
				<li><strong>Supabase</strong> – authentication, database, and backend services;</li>
				<li><strong>JourneyApps PowerSync</strong> – data synchronization for offline support;</li>
				<li><strong>Sentry</strong> – crash reporting and analytics;</li>
				<li><strong>Stripe</strong> – payment processing.</li>
			</ul>
			<p>
				We may also disclose data if required by law, to comply with legal processes, or to protect
				the rights, property, or safety of Dough or its users.
			</p>
		</section>

		<section>
			<h3>4. Data Storage &amp; Transfer</h3>
			<p>
				Your main application data is stored on Supabase servers located in <em>Singapore</em>. Data
				synchronized by JourneyApps PowerSync is stored in <em>Japan</em>. Diagnostic and usage
				information collected by Sentry is stored in the <em>United States</em>.
			</p>
			<p>
				Some service providers (for example, Stripe) may process or store data in other countries
				depending on their infrastructure. We take reasonable measures to ensure data is transferred
				and stored securely.
			</p>
		</section>

		<section>
			<h3>5. Data Retention</h3>
			<p>
				We retain your information for as long as your account remains active. You may delete your
				account at any time; upon deletion, we will remove your personal data from our systems.
			</p>
			<p>
				For more details on how to delete your account, view the <a
					href="/projects/dough/delete-account">account deletion guide</a
				>.
			</p>
		</section>

		<section>
			<h3>6. Children’s Privacy</h3>
			<p>
				Dough is not intended for children under the age of 13, and we do not knowingly collect
				information from children.
			</p>
		</section>

		<section>
			<h3>7. Security</h3>
			<p>
				We implement reasonable administrative, technical, and physical safeguards designed to
				protect your personal information. However, no method of transmission or storage is
				completely secure; we cannot guarantee absolute security.
			</p>
		</section>

		<section>
			<h3>8. Changes to This Policy</h3>
			<p>
				We may update this Privacy Policy occasionally. The most recent version will be available on
				this page. Continued use of the App after changes take effect constitutes acceptance of the
				updated policy.
			</p>
		</section>

		<section>
			<h3>9. Contact</h3>
			<p>
				For additional inquiries about this Privacy Notice, please send us an email at <a
					href="mailto:bryanmylee@gmail.com">bryanmylee@gmail.com</a
				>.
			</p>
		</section>
	</div>
</article>

<style lang="postcss">
	:global(p a) {
		@apply text-cyan-500 underline underline-offset-1 gdark:text-cyan-200;
		@apply hover:text-cyan-400 gdark:hover:text-cyan-100;
	}
</style>
