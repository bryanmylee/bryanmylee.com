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
		class="dropdown"
		use:interactOutside={(ev) => {
			if (ev.target instanceof HTMLElement && ev.target === trigger) {
				return;
			}
			showDropdown = false;
		}}
	>
		{#each links as { href, name }}
			<li><a {href}>{name}</a></li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.dropdown {
		@apply flex flex-col gap-x-2 md:flex-row;
		@apply -m-2 rounded-xl p-3 text-base shadow-xl;
		@apply md:m-0 md:p-0 md:text-lg md:shadow-none;
		@apply opacity-0 peer-checked:opacity-100 md:opacity-100;
		@apply pointer-events-none peer-checked:pointer-events-auto md:pointer-events-auto;
		@apply transition-opacity;
		background: rgb(var(--bg-rgb));
		@media screen(md) {
			background: transparent;
		}
	}

	.dropdown a {
		@apply inline-block rounded-lg px-3 py-1 hover:bg-gray-300/20;
	}

	.dropdown--trigger {
		@apply relative m-0 cursor-pointer appearance-none wh-8;
		@apply pointer-events-auto md:hidden;
		background-color: transparent;
	}
	.dropdown--trigger::before {
		content: '';
		background-color: rgb(var(--text-rgb));
		@apply absolute top-2 h-0.5 w-full;
		@apply transition-transform;
	}
	.dropdown--trigger::after {
		content: '';
		background-color: rgb(var(--text-rgb));
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
