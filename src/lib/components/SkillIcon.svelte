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
