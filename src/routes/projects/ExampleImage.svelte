<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: number;
	export let height: number;
</script>

<img {src} {alt} class="border shadow-md rounded-xl" {width} {height} />
