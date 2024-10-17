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
			'Designed and built a powerful <strong>React</strong> systems diagramming tool for model-based systems engineering that supports customizable edge paths, infinite sub-flows, and optimized performance for efficient rendering.',
			'Built a browser-based <strong>data persistence layer</strong> for offline read/write operations on graph-like relational data, that automates change tracking and replication to the server, with a reactive system to drive UI efficiently. This enabled more powerful client-side functionality and improved the performance of data-intensive<strong>React</strong> applications.',
			'Created a reusable, accessible, and well-documented <strong>React</strong> component design system that significantly improved the polish and UX of our application, driving successful trial conversions.',
			'Designed and built a highly-available <strong>ITAR-complaint notification system</strong> that supports multiple notification types, priority queuing, retry logic, audit trails, and real-time monitoring, built on <strong>Kubernetes</strong> and <strong>RabbitMQ</strong>.',
			'Developed a distributed <strong>Python</strong> and <strong>Scala</strong> service that integrates <strong>Large-Language Models</strong>, semantic search, and database lookups to translate natural language queries into privacy-preserving context-aware query functions, overcoming challenges in schema variance and ambiguity resolution.',
			'Orchestrated <strong>E2E testing</strong> in CI pipelines with <strong>Playwright</strong> to reduce feature-development regressions.',
			'Built an <strong>attribute-based access control</strong> system with an administrative dashboard for customizable user access rules and a security abstraction layer over <strong>PostgreSQL</strong> row-level security',
			'Led the design and execution of a successful database migration from <strong>MongoDB</strong> to <strong>PostgreSQL</strong> that preserved client data throughout the process.',
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
			'Refined the <strong>React Native</strong> navigation stack and mobile architecture for the mobile app of Playhouse Real Estate.',
			'Built highly specialized <strong>React</strong> components with data-heavy and high-interactivity requirements for Pylon Lending.',
			'Developed <strong>React</strong> data dashboards and accessible webpages for Lumen Energy.',
		],
		homepage: 'https://www.airfoil.studio/',
	},
	{
		companyName: 'DSO National Laboratories',
		from: 'May 2021',
		to: 'Jul 2021',
		title: 'Cybersecurity Researcher',
		details: [
			'Researched a wide variety of <strong>JavaScript</strong> fuzzing technologies, from American Fuzzy Lop to DIE.',
			'Explored the effectiveness and efficiency of ensemble fuzzing for vulnerability detection in <strong>browsers</strong> and <strong>JavaScript</strong> engines.',
			'Developed an <strong>Ansible</strong> automation pipeline to configure and test multiple fuzzer configurations.',
		],
		homepage: 'https://www.dso.org.sg/',
	},
	{
		companyName: 'Garuda Robotics',
		from: 'May 2020',
		to: 'Aug 2020',
		title: 'Software Engineer',
		details: [
			'Developed a <strong>Python</strong> warning system for beyond-visual-line-of-sight drone flight system.',
			'Restructured a large <strong>React</strong> application on <strong>Redux</strong> for project maintainability.',
			'Migrated legacy <strong>React</strong> components from the <strong>Google Maps API</strong> to Leaflet and <strong>OpenStreetMaps</strong>.',
		],
		homepage: 'https://garuda.io/',
	},
];
