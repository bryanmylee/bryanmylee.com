<script lang="ts">
	import { SKILL_ID_TO_LABEL, type Skill } from '$lib/skill';
	import Labelled from '../Labelled.svelte';
	import { SKILL_ICONS } from './icons';

	export let skill: Skill;
	$: name = SKILL_ID_TO_LABEL[skill];
	$: Icon = SKILL_ICONS[`./${skill}.svg`];
</script>

<Labelled label={name} as="div">
	{#if Icon !== undefined}
		<svelte:component this={Icon} class="transition-transform wh-6 group-hover:scale-125" />
	{/if}
</Labelled>
