<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: number;
	export let height: number;
</script>

<div style:aspect-ratio="{width}/{height}" class="w-full">
	<img {src} {alt} class="h-full border shadow-md rounded-xl" />
</div>
