<script lang="ts" context="module">
	const ID_TO_LABEL = {
		ansible: 'Ansible',
		aws: 'AWS',
		c: 'C',
		cloudformation: 'CloudFormation',
		docker: 'Docker',
		firebase: 'Firebase',
		flask: 'Flask',
		graphql: 'GraphQL',
		java: 'Java',
		javascript: 'JavaScript',
		mysql: 'MySQL',
		nextjs: 'Next.js',
		nginx: 'NGINX',
		nodejs: 'Node.js',
		python: 'Python',
		rabbitmq: 'RabbitMQ',
		reactjs: 'React',
		reactnative: 'React Native',
		redux: 'Redux',
		rest: 'REST',
		scikit: 'scikit-learn',
		spring: 'Spring',
		svelte: 'Svelte',
		sveltekit: 'SvelteKit',
		swift: 'Swift',
		tailwindcss: 'TailwindCSS',
		typescript: 'TypeScript',
		vim: 'Vim',
	};

	export type Skill = keyof typeof ID_TO_LABEL;
</script>

<script lang="ts">
	export let skill: Skill;
	const name = ID_TO_LABEL[skill];
</script>

<div class="relative group">
	<img
		src="/skills/{skill}.svg"
		alt={name}
		class="wh-6 group-hover:scale-125 transition-transform"
	/>
	<span>
		{name}
	</span>
</div>

<style lang="postcss">
	span {
		@apply z-10 rounded-lg bg-gray-100 p-2 text-xs font-semibold shadow;
		@apply absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-0;
		@apply group-hover:block group-hover:scale-100;
		@apply pointer-events-none whitespace-nowrap;
		@apply transition-transform;
	}
</style>
