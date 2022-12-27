export interface Work {
	companyName: string;
	from: string;
	to: string;
	title: string;
	details: string[];
	homepage?: string;
}

export const WORK_EXPERIENCE: Work[] = [
	{
		companyName: 'Meta',
		from: 'May 2022',
		to: 'Aug 2022',
		title: 'Enterprise Engineer',
		details: [
			'Develop and deploy a database for critical transaction logging',
			'Design internal APIs for creating, storing, and querying logs',
			'Build a web client to manage and explore logging data',
			'Handle complex pagination and data fetching requirements while maintaining interactivity',
		],
		homepage: 'https://meta.com/',
	},
	{
		companyName: 'Airfoil Studio',
		from: 'Nov 2021',
		to: 'present',
		title: 'Software Engineer',
		details: [
			'Advise clients on web and React Native development',
			'Implement highly accessible and customized component libraries for client projects',
			'Rapidly build beautiful webpages and applications',
		],
		homepage: 'https://www.airfoil.studio/',
	},
	{
		companyName: 'DSO National Laboratories',
		from: 'May 2021',
		to: 'Jul 2021',
		title: 'Cybersecurity Research Intern',
		details: [
			'Explore the effectiveness and efficiency of ensemble fuzzing in discovering bugs within JavaScript engines',
			'Develop an automation pipeline to configure and test fuzzer configurations',
		],
		homepage: 'https://www.dso.org.sg/',
	},
	{
		companyName: 'Garuda Robotics',
		from: 'May 2020',
		to: 'Aug 2020',
		title: 'Engineering Intern',
		details: [
			'Develop a warning system for autonomous drones during beyond-visual-line-of-sight operation',
			'Migrate the mapping provider of a drone operator application to OpenStreetMap',
			'Rearchitect a React application to improve Redux performance and maintainability',
		],
		homepage: 'https://garuda.io/',
	},
];
