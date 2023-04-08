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
		companyName: 'Charter Space',
		from: 'Feb 2023',
		to: 'present',
		title: 'Software Engineer',
		details: [
			'Developed a flexible and cohesive design system to ensure consistency in our application interface',
			"Optimized the system's data model for efficient and accurate data synchronization across views",
			'Built multiple high-performance data-driven views from scratch, including Gantt charts and systems diagramming tools with advanced functionality and smooth interactions',
			'Collaborated with product, UX, and engineering teams to design and refine feature requirements',
		],
		homepage: 'https://charter.space/',
	},
	{
		companyName: 'Meta',
		from: 'May 2022',
		to: 'Aug 2022',
		title: 'Enterprise Engineer',
		details: [
			'Designed a database for logging critical transactions across all Meta Enterprise applications',
			'Managed a diverse set of requirements from stakeholders across internal teams and Enterprise clients',
			'Built a pagination and data-fetching solution for first-class interactivity and responsiveness in web clients',
			'Extended administrative tools to manage and explore thousands of critical transaction logs efficiently',
		],
		homepage: 'https://meta.com/',
	},
	{
		companyName: 'Airfoil Studio',
		from: 'Nov 2021',
		to: 'Apr 2022',
		title: 'Software Engineer',
		details: [
			'Refined the navigation stack and mobile architecture for the mobile app of Playhouse Real Estate',
			'Built highly specialized components with data-heavy requirements for Pylon Lending',
			'Developed data dashboards and accessible webpages for Lumen Energy',
		],
		homepage: 'https://www.airfoil.studio/',
	},
	{
		companyName: 'DSO National Laboratories',
		from: 'May 2021',
		to: 'Jul 2021',
		title: 'Cybersecurity Research Intern',
		details: [
			'Researched a wide variety of JavaScript fuzzing technologies, from American Fuzzy Lop to DIE',
			'Explored the effectiveness and efficiency of ensemble fuzzing for vulnerability detection in JavaScript engines',
			'Developed an automation pipeline to configure and test multiple fuzzer configurations',
		],
		homepage: 'https://www.dso.org.sg/',
	},
	{
		companyName: 'Garuda Robotics',
		from: 'May 2020',
		to: 'Aug 2020',
		title: 'Engineering Intern',
		details: [
			'Developed warning system for beyond-visual-line-of-sight drone flight system',
			'Spearheaded restructuring of a large React application on Redux for project maintainability',
			'Migrated legacy React components to Leaflet and OpenStreetMaps',
		],
		homepage: 'https://garuda.io/',
	},
];
