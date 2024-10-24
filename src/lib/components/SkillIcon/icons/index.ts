export const SKILL_ICONS = import.meta.glob('./*.svg', {
	eager: true,
	import: 'default',
}) satisfies Record<string, ConstructorOfATypedSvelteComponent>;
