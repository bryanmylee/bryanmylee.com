<script>
	import '../app.css';
	import { provideTheme } from './_context';
	import Nav from './_Nav.svelte';

	provideTheme();
</script>

<svelte:head>
	<title>Bryan Lee</title>
</svelte:head>

<Nav />
<slot />
