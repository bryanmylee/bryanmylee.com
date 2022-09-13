<script lang="ts">
	export let title: string;
	export let wide = false;
</script>

<section class="p-4 mx-auto tw-container">
	<h1 id={title.replaceAll(/\s+/g, '-').toLowerCase()} class="my-8 text-3xl font-bold text-center">
		{title}
	</h1>
	<div class="{wide ? 'flex flex-col' : 'grid md:grid-cols-2 xl:grid-cols-3'} gap-4 items-start">
		<slot />
	</div>
</section>
