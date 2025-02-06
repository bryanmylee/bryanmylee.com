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
			'Technical lead on a team of four engineers, regularly providing guidance on product and technical decisions to deliver scalable, maintainable, and high-performance systems.',
			'Worked with our design team to build a flexible, accessible, and extensively documented component design system in React that significantly improved the polish and UX of our application, <em><u>increasing our user-trial conversions by 400%</u></em>.',
			'Reduced our regressions and defect leakages by fostering a culture of observability and testing, adding OpenTelemetry instrumentation, and designing E2E tests that <em><u>reduced our defect leakage rate to sub-15%</u></em>.',
			'Key contributor as both a programmer and technical lead for many core systems on our flagship product: a diagram-based navigation tool, a reactive in-database spreadsheet, an attribute-based access control system, and much more.',
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
			'Designed a universal database for logging critical user actions across all Meta Enterprise applications that now provides traceability on the user behaviour of <em><u>millions of active users</u></em> for audit and debugging.',
			'Built a data pagination and fetching solution  for high responsiveness in browser-based application clients, overcoming existing database limitations to meet functional requirements on a tight deadline.',
			'Upgraded our administrative tools to enable the management and exploration of critical action logs efficiently.',
			'Discovered and fixed critical issues in internal tools used by <em><u>tens of thousands of Meta engineers</u></em>, working with developer teams from all across the world to review and push code to production.',
		],
		homepage: 'https://meta.com/',
	},
	{
		companyName: 'Airfoil Studio',
		from: 'Nov 2021',
		to: 'Apr 2022',
		title: 'Software Engineer',
		details: [
			'Technical consultant and contributor to a diverse range of clients with <em><u>millions of monthly active users</u></em> such as Playhouse Real Estate, Pylon Lending, and Lumen Energy.',
			'Provided expertise in rendering optimizations that minimized the navigation latency of mobile applications and improved the responsiveness of client-facing web dashboards.',
			'Developed data dashboards and accessible webpages.',
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
			'Explored the effectiveness and efficiency of ensemble fuzzing for vulnerability detection in browsers and JavaScript engines.',
			'Developed an Ansible automation pipeline to configure and test multiple fuzzer configurations.',
		],
		homepage: 'https://www.dso.org.sg/',
	},
	{
		companyName: 'Garuda Robotics',
		from: 'May 2020',
		to: 'Aug 2020',
		title: 'Software Engineer',
		details: [
			'Developed a Python warning system for beyond-visual-line-of-sight drone flight system.',
			'Restructured a large React application on Redux for project maintainability.',
			'Migrated legacy React components from the Google Maps API to Leaflet and OpenStreetMaps.',
		],
		homepage: 'https://garuda.io/',
	},
];
