<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from './Section.svelte';
</script>

<Section title="University">
	<ProjectCard
		name="Advanced Threat Detection for GovTech Commercial Cloud"
		description="CS480 Final Year Project"
		skills={['aws', 'azure', 'gcp']}
	>
		<div class="space-y-2">
			<p>
				For our Final Year Project, we developed pipelines for efficiently ingesting data logs,
				building machine learning models, and deploying those models on AWS, Azure, and GCP.
			</p>
			<p>
				This involved an analysis and exploration of the many services provided by the different
				cloud providers to meet the functional requirements for the pipelines. In the process, we
				designed and trained basic machine learning models using the pipelines developed.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Kopi Time, Microservice Orchestration"
		description="CS302 IT Solution Lifecycle Management"
		skills={[
			'typescript',
			'python',
			'reactjs',
			'nextjs',
			'tailwindcss',
			'nodejs',
			'flask',
			'graphql',
			'rest',
			'rabbitmq',
			'mysql',
			'nginx',
			'docker',
		]}
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/TeamTechtris/smu-cs302-saga-engine',
			},
			{
				label: 'Read our report',
				href: '/projects/cs302-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>Kopi Time is a digital marketplace for coffee-related art and collectables.</p>
			<p>
				We implemented a reliable and robust microservice architecture to handle market trading
				functionality, listing expirations, and user notifications.
			</p>
			<p>
				Most notably, we developed a framework-agnostic implementation of the <a
					href="https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga"
					target="_blank"
					rel="noopener noreferrer"
				>
					saga pattern
				</a>
				we named the <strong>Saga Engine</strong> to orchestrate transactions and compensating actions
				across multiple microservices.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="COMO Club, Cloud Architecture"
		description="CS301 IT Solution Architecture"
		skills={[
			'typescript',
			'python',
			'svelte',
			'sveltekit',
			'tailwindcss',
			'flask',
			'rest',
			'rabbitmq',
			'mysql',
			'nginx',
			'docker',
			'cloudformation',
		]}
	>
		<div class="space-y-2">
			<p>
				We designed a highly available and maintainable backend architecure for our SMU-X sponsor —
				COMO Group.
			</p>
			<p>
				Most notably, our architecture fails gracefully when third-party external services are
				unavailable.
			</p>
			<p>
				To do so, we continuously check the health of external services. When an external service
				fails a healthcheck, we queue all client requests and notify users of the temporary
				disruption. Once the external service is healthy, we automatically trigger a recovery phase
				and continue with regular execution.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Wok N Roll, Product Development and Management"
		description="CS206 Software Product Management"
		skills={['typescript', 'java', 'svelte', 'tailwindcss', 'spring', 'rest']}
		links={[
			{
				label: 'View our slides',
				href: '/projects/cs206-final-pres.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We conducted market research and discovered an unfulfilled niche for a comprehensive
				database and search engine for hawker food in Singapore.
			</p>
			<p>
				Using this database, we developed a product, risk mitigation strategies, and a feature
				roadmap for future growth.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Ryver Bank, API Development"
		description="CS203 Collaborative Software Development"
		skills={['java', 'python', 'spring', 'flask', 'scikit', 'rest', 'mysql', 'docker']}
		links={[
			{
				label: 'View our slides',
				href: '/projects/cs203-final-pres.pdf',
			},
			{
				label: 'GitHub',
				href: 'https://github.com/cs203t10-ryverbank',
			},
		]}
	>
		<div class="space-y-2">
			<p>We designed a simple trading platform for our SMU-X sponsor — Credit Suisse.</p>
			<p>
				Given multiple core functionalities in the requirements, we used microservices to reduce the
				complexity of each component and enable developers to work semi-independently.
			</p>
			<p>We also developed a simple ML-powered stock recommendation engine.</p>
			<p>For our efforts, we were awarded the <strong>Best Technical Team</strong> achievement.</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Simulation of Voting Fairness in Singapore"
		description="CS426 Agent-based Modelling and Simulation"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/smu-cs426-project',
			},
			{
				label: 'Read our report',
				href: '/projects/cs426-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We modelled various gerrymandering and Group Representation Constituency allocation
				strategies using an agent-based simulation to explore the impacts of voter flexibility and
				distribution on the fairness of representation.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Network and Link Layer Emulation"
		description="CS441 Network Security"
		links={[
			{
				label: 'GitHub',
				href: 'https://github.com/bryanmylee/smu-cs441-network-emulation',
			},
			{
				label: 'Read our report',
				href: '/projects/cs441-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We emulated a simplified version of the MAC and IP protocol on top of network sockets for
				our physical layer.
			</p>
			<p>
				With the emulated network, the project requires a study and implementation of IP spoofing,
				IP filtering, and packet sniffing. Our group went beyond the requirements to implement
				private and public network separation, a simple public routing protocol, the ARP protocol,
				and IP traceback.
			</p>
		</div>
	</ProjectCard>

	<ProjectCard
		name="Optimizing Hotel Bookings"
		description="CS421 Introduction to Machine Learning"
		skills={['python', 'scikit']}
		links={[
			{
				label: 'Data',
				href: 'https://www.kaggle.com/jessemostipak/hotel-booking-demand',
			},
			{
				label: 'Read our report',
				href: '/projects/cs421-final-report.pdf',
			},
		]}
	>
		<div class="space-y-2">
			<p>
				We analyzed data on hotel booking demand and explored a variety of machine learning
				techniques to predict the cancellation of a given hotel booking based on pre-existing
				features.
			</p>
		</div>
	</ProjectCard>
</Section>
