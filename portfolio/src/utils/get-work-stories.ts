import type { WorkStory } from "../types/work-story";

// Du plus récent au plus ancien.
export function getWorkStories(): WorkStory[] {
	return [
		{
			title: {
				en: "Giving a legacy routing tool a second life",
				fr: "Donner une seconde vie à un outil de routage legacy",
			},
			company: "D-ICE Engineering",
			place: { en: "Nantes", fr: "Nantes" },
			paragraphs: {
				en: [
					"Squid helps sailors prepare routes from weather forecasts. Race teams use it on the Vendée Globe, the Route du Rhum, the Transat Jacques Vabre and The Ocean Race.",
					"I led the full rewrite of its legacy Electron desktop app. First came a strategy to pay off the technical debt, then new UI and UX on top of a cleaner foundation. We shipped it in beta, and customers gave us excellent feedback.",
				],
				fr: [
					"Squid aide les marins à préparer leurs routes à partir des prévisions météo. Les équipes de course l'utilisent sur le Vendée Globe, la Route du Rhum, la Transat Jacques Vabre et The Ocean Race.",
					"J'ai mené la refonte complète de son application de bureau Electron legacy. D'abord une stratégie pour solder la dette technique, puis de nouvelles UI et UX sur des bases plus saines. Nous l'avons livrée en beta, avec d'excellents retours de nos clients.",
				],
			},
			tags: ["Electron", "React", "TypeScript", "SQLite", "Vite"],
			photos: [
				{
					src: "work-stories/dice/dice-bridge.webp",
					alt: { en: "Ship bridge with weather screens", fr: "Passerelle de navire avec écrans météo" },
					credit: { en: "D-ICE Engineering", fr: "D-ICE Engineering" },
				},
				{
					src: "work-stories/dice/dice-monitors.png",
					alt: {
						en: "Team in front of weather forecast screens",
						fr: "Équipe devant des écrans de prévisions météo",
					},
					credit: { en: "D-ICE Engineering", fr: "D-ICE Engineering" },
				},
				{
					src: "work-stories/dice/dice-equipe-2025.jpg",
					alt: { en: "Group photo of the D-ICE team", fr: "Photo de groupe de l'équipe D-ICE" },
					credit: { en: "D-Ice, Le Journal des Entreprises", fr: "D-Ice, Le Journal des Entreprises" },
				},
				{
					src: "work-stories/dice/port-intelligence.webp",
					alt: { en: "Squid: port information", fr: "Squid : informations sur les ports" },
					credit: { en: "squid-sailing.com", fr: "squid-sailing.com" },
				},
				{
					src: "work-stories/dice/squid-desktop-routing.png",
					alt: { en: "Squid: route planning on a map", fr: "Squid : routage sur carte" },
				},
			],
		},
		{
			title: {
				en: "A SaaS for associations, built between coworking days",
				fr: "Un SaaS pour les associations, construit entre deux journées de coworking",
			},
			company: "Huggle",
			place: { en: "Remote", fr: "À distance" },
			paragraphs: {
				en: [
					"Huggle is a SaaS platform for associations. I maintained it, shipped new features, and started moving every database from NoSQL to SQL.",
					"Remote work meant a lot of nomadic days in coworking spaces around Nantes, where we shared premises with the association Live for Good.",
				],
				fr: [
					"Huggle est une plateforme SaaS pour les associations. Je l'ai maintenue, j'ai livré de nouvelles fonctionnalités et j'ai commencé à migrer toutes les bases de données de NoSQL vers SQL.",
					"Le télétravail, c'était beaucoup de journées nomades dans des espaces de coworking autour de Nantes, où nous partagions les locaux de l'association Live for Good.",
				],
			},
			tags: ["TypeScript", "GraphQL", "Node.js", "React", "PostgreSQL"],
			photos: [
				{
					src: "work-stories/huggle/1700592614937.jpg",
					alt: { en: "Terracotta pot with the Huggle logo", fr: "Pot en terre cuite au logo Huggle" },
				},
				{
					src: "work-stories/huggle/Capture d’écran du 2026-10-19 12-39-34.png",
					alt: {
						en: "Meeting around a table with a laptop",
						fr: "Réunion autour d'une table avec un ordinateur portable",
					},
				},
				{
					src: "work-stories/huggle/Capture d’écran du 2026-10-19 12-39-48.png",
					alt: { en: "Handshake during a meeting", fr: "Poignée de main pendant une réunion" },
				},
				{
					src: "work-stories/huggle/IMG-20240517-WA0000.jpg",
					alt: { en: "Group photo around a table", fr: "Photo de groupe autour d'une table" },
				},
			],
		},
		{
			title: {
				en: "Keeping live sessions responsive for thousands of people",
				fr: "Garder des sessions en direct fluides pour des milliers de personnes",
			},
			company: "Beekast",
			place: { en: "Nantes", fr: "Nantes" },
			paragraphs: {
				en: [
					"Beekast is a platform for running interactive meetings and workshops, with polls, quizzes and word clouds.",
					"In an agile team, I designed, built and shipped features to production, reshaped the architecture, and tracked down performance and scalability issues when thousands of users were connected at once.",
				],
				fr: [
					"Beekast est une plateforme pour animer des réunions et des ateliers interactifs, avec des sondages, des quiz et des nuages de mots.",
					"Au sein d'une équipe agile, j'ai conçu, développé et livré des fonctionnalités en production, remodelé l'architecture, et traqué des problèmes de performance et de scalabilité quand des milliers d'utilisateurs étaient connectés en même temps.",
				],
			},
			tags: ["Node.js", "Vue", "MongoDB", "GraphQL", "Kubernetes"],
			photos: [
				{
					src: "work-stories/beekast/beekast-editor.png",
					alt: { en: "Beekast session editor", fr: "Éditeur de session Beekast" },
					credit: { en: "Beekast", fr: "Beekast" },
				},
				{
					src: "work-stories/beekast/beekast-team-2023.png",
					alt: { en: "Beekast team photo", fr: "Photo d'équipe Beekast" },
					credit: { en: "Maddyness", fr: "Maddyness" },
				},
			],
		},
		{
			title: {
				en: "Concrete reinforcement, seen in 3D",
				fr: "L'armature béton, vue en 3D",
			},
			company: "Arma Plus",
			place: { en: "Saint-Herblain", fr: "Saint-Herblain" },
			paragraphs: {
				en: [
					"Arma Plus publishes software for designing and producing concrete reinforcement, a trade that also covers railings.",
					"As the only JavaScript developer there, I took over several side projects around that trade: a 3D viewer embedded in web pages, a mobile app and web applications, while also handling QA and DevOps.",
				],
				fr: [
					"Arma Plus édite des logiciels pour concevoir et produire des armatures pour le béton, un métier qui touche aussi aux garde-corps.",
					"En tant que seul développeur JavaScript, j'ai repris plusieurs projets annexes autour de ce métier : un visualiseur 3D intégré à des pages web, une application mobile et des applications web, tout en m'occupant du QA et du DevOps.",
				],
			},
			tags: ["JavaScript", "Three.js", "Vue", "Docker"],
			photos: [
				{
					src: "work-stories/armaplus/armaplus-locaux.jpg",
					alt: { en: "Arma Plus building in Saint-Herblain", fr: "Bâtiment d'Arma Plus à Saint-Herblain" },
					credit: { en: "Pages Jaunes", fr: "Pages Jaunes" },
				},
				{
					src: "work-stories/armaplus/bugal-configurator.png",
					alt: { en: "3D railing configurator", fr: "Configurateur 3D de garde-corps" },
					credit: { en: "Screenshot: Bugal configurator", fr: "Capture : configurateur Bugal" },
				},
			],
		},
		{
			title: {
				en: "From a lab bench to a tidal turbine",
				fr: "Du banc d'essai à l'hydrolienne",
			},
			company: "Barillec",
			place: { en: "Quimper", fr: "Quimper" },
			paragraphs: {
				en: [
					"Barillec works on energy storage and the integration of renewable energy. I started with a study internship, then moved on to a contract to design and build an embedded SCADA and control system.",
					"It runs on embedded Linux, with C and JavaScript. It was commissioned in Guadeloupe, on several sites in France and in Guinea (wind farms, solar plants and EV charging stations), and on a boat, to take measurements on a tidal turbine.",
				],
				fr: [
					"Barillec travaille sur le stockage d'énergie et l'intégration des énergies renouvelables. J'ai commencé par un stage d'étude, puis un contrat pour concevoir et réaliser un système SCADA et de contrôle-commande embarqué.",
					"Il tourne sur Linux embarqué, en C et JavaScript. Il a été mis en service en Guadeloupe, sur plusieurs sites en France et en Guinée (parcs éoliens, centrales solaires et bornes de recharge), et sur un bateau, pour faire des mesures sur une hydrolienne.",
				],
			},
			tags: ["C", "Linux", "Node.js", "Angular", "PostgreSQL"],
			photos: [
				{
					src: "work-stories/barillec/omexom-quimper-2022.jpg",
					alt: { en: "Omexom project in Quimper", fr: "Projet Omexom à Quimper" },
					credit: { en: "Omexom", fr: "Omexom" },
				},
				{
					src: "work-stories/barillec/omexom-dunkerque-2024.jpg",
					alt: { en: "Storage site in Dunkerque", fr: "Chantier de stockage à Dunkerque" },
					credit: { en: "Omexom", fr: "Omexom" },
				},
				{
					src: "work-stories/barillec/omexom-stockage-2024.png",
					alt: { en: "61 MWh storage system", fr: "Système de stockage de 61 MWh" },
					credit: { en: "Omexom", fr: "Omexom" },
				},
			],
		},
	];
}
