export interface Work {
	companyName: string;
	from: string;
	to: string;
	title: string;
	details: string[];
	homepage?: string;
	wideLayout?: boolean;
}

export const WORK_EXPERIENCE: Work[] = [
	{
		companyName: 'Charter Space',
		from: 'Feb 2023',
		to: 'present',
		title: 'Software Engineer',
		details: [
			'Developed a Python service integrating a large-language model, semantic search, and database lookups to translate natural language queries into privacy-preserving, context-aware data functions, overcoming challenges in schema variance and ambiguity resolution.',
			'Built client-side data tooling for instant read/write performance, automated tracking and committing of local changes to the server, and reactive updates that drive UI efficiently with support for highly relational data. This standardized the most common data access patterns in our codebase and enabled the development of significantly more powerful features while maintaining sub-50ms response times.',
			'Designed and built a powerful diagramming tool for model-based systems engineering (MBSE) that supports customizable interface edge paths and an arbitrary number of nested sub-flows of systems to support our system- of-systems systems engineering paradigm.',
			'Orchestrated E2E testing in CI pipelines with Playwright to reduce regressions during feature development.',
			'Built an attribute-based access control system, including the administrative dashboard for users to customize access rules, and the underlying security abstraction over PostgreSQL row-level security.',
			'Led and designed a data migration from MongoDB to PostgreSQL retaining all user data, sanitizing foreign keys, and normalizing data to enable highly connected data models.',
			'Implemented a library of flexible and accessible React UI components aligned with our design system, improving the consistency of our UI and reducing wasted effort between our design and engineering team',
		],
		homepage: 'https://charter.space/',
		wideLayout: true,
	},
	{
		companyName: 'Meta',
		from: 'May 2022',
		to: 'Aug 2022',
		title: 'Enterprise Engineer',
		details: [
			'Designed a universal database for logging critical user actions across all Meta Enterprise applications that now provides traceability of user behaviour on Enterprise applications for audit and debugging.',
			'Built a pagination and data-fetching solution for first-class interactivity and responsiveness in web clients, overcoming existing database limitations and meet functional requirements on a tight deadline.',
			'Extended our administrative tools, enabling the management and exploration of critical action logs efficiently.',
			'Fixed issues found in internal tools owned by remote teams, improving the developer experience for all engineers.',
		],
		homepage: 'https://meta.com/',
	},
	{
		companyName: 'Airfoil Studio',
		from: 'Nov 2021',
		to: 'Apr 2022',
		title: 'Software Engineer',
		details: [
			'Refined the navigation stack and mobile architecture for the mobile app of Playhouse Real Estate.',
			'Built highly specialized components with data-heavy requirements for Pylon Lending.',
			'Developed data dashboards and accessible webpages for Lumen Energy.',
		],
		homepage: 'https://www.airfoil.studio/',
	},
	{
		companyName: 'DSO National Laboratories',
		from: 'May 2021',
		to: 'Jul 2021',
		title: 'Cybersecurity Researcher',
		details: [
			'Researched a wide variety of JavaScript fuzzing technologies, from American Fuzzy Lop to DIE.',
			'Explored the effectiveness and efficiency of ensemble fuzzing for vulnerability detection in JavaScript engines.',
			'Developed an automation pipeline to configure and test multiple fuzzer configurations.',
		],
		homepage: 'https://www.dso.org.sg/',
	},
	{
		companyName: 'Garuda Robotics',
		from: 'May 2020',
		to: 'Aug 2020',
		title: 'Software Engineer',
		details: [
			'Developed warning system for beyond-visual-line-of-sight drone flight system.',
			'Spearheaded restructuring of a large React application on Redux for project maintainability.',
			'Migrated legacy React components to Leaflet and OpenStreetMaps.',
		],
		homepage: 'https://garuda.io/',
	},
];
