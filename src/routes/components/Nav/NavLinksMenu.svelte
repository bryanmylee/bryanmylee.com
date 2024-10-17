<script lang="ts">
	import { interactOutside } from '$lib/utils/pointer';
	import { afterNavigate } from '$app/navigation';

	let showDropdown = false;
	afterNavigate(function closeDropdown() {
		showDropdown = false;
	});

	let trigger: HTMLInputElement | undefined = undefined;

	const links = [
		{ href: '/projects', name: 'Projects' },
		{ href: '/blog', name: 'Blog' },
		{ href: '/#work', name: 'Work' },
		{ href: '/#contact', name: 'Contact' },
	];
</script>

<div class="flex flex-col items-end gap-4 text-right">
	<input
		type="checkbox"
		bind:this={trigger}
		bind:checked={showDropdown}
		class="dropdown--trigger peer"
	/>
	<ul
		class="pointer-events-none -m-2 flex flex-col gap-x-2 rounded-xl border border-[rgb(var(--border-nav))] bg-[rgb(var(--bg-nav))] p-3 text-base opacity-0 shadow-xl transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-100 md:pointer-events-auto md:m-0 md:flex-row md:border-0 md:bg-transparent md:p-0 md:text-lg md:opacity-100 md:shadow-none"
		use:interactOutside={(ev) => {
			if (ev.target instanceof HTMLElement && ev.target === trigger) {
				return;
			}
			showDropdown = false;
		}}
	>
		{#each links as { href, name }}
			<li>
				<a {href} class="block rounded-lg px-3.5 py-2 hover:bg-gray-400/10 md:px-3 md:py-1">
					{name}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.dropdown--trigger {
		@apply relative m-0 cursor-pointer appearance-none wh-8;
		@apply pointer-events-auto md:hidden;
		background-color: transparent;
	}
	.dropdown--trigger::before {
		content: '';
		background-color: currentColor;
		@apply absolute top-2 h-0.5 w-full;
		@apply transition-transform;
	}
	.dropdown--trigger::after {
		content: '';
		background-color: currentColor;
		@apply absolute bottom-2 h-0.5 w-full;
		@apply transition-transform;
	}
	.dropdown--trigger:checked::before {
		@apply translate-y-[0.4375rem] rotate-45;
	}
	.dropdown--trigger:checked::after {
		@apply translate-y-[-0.4375rem] -rotate-45;
	}
</style>
