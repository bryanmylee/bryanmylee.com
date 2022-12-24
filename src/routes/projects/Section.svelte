<script lang="ts">
	export let title: string;
	export let singleColumn = false;
</script>

<section class="p-4 mx-auto tw-container">
	<h2 id={title.replaceAll(/\s+/g, '-').toLowerCase()} class="my-8 text-2xl font-bold text-center">
		{title}
	</h2>
	<div class="grid gap-4 items-start {singleColumn ? '' : 'grid md:grid-cols-2 xl:grid-cols-3'}">
		<slot />
	</div>
</section>
