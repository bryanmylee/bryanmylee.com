<script lang="ts">
	import { ID_TO_LABEL, type Skill } from '../skill';
	import Labelled from './Labelled.svelte';

	export let skill: Skill;
	const name = ID_TO_LABEL[skill];
</script>

<Labelled label={name}>
	<img
		src="/skills/{skill}.svg"
		alt={name}
		class="wh-6 group-hover:scale-125 transition-transform"
	/>
</Labelled>
