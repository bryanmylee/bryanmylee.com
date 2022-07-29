<script lang="ts">
	export let title: string;
	export let wide = false;
</script>

<section class="p-4 mx-auto layout-container">
	<h1 id={title.replaceAll(/\s+/g, '-').toLowerCase()} class="mb-4 ml-3 mt-4 text-3xl font-bold">
		{title}
	</h1>
	<div class="grid {wide ? '' : 'md:grid-cols-2 xl:grid-cols-3'} gap-4 items-start">
		<slot />
	</div>
</section>
