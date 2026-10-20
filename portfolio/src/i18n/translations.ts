export type Language = "en" | "fr";

export interface Translations {
	documentTitle: string;
	typescriptDev: string;
	welcome: string;
	whatIDo: string;
	solutionArchitecture: string;
	whatIDoItems: string[];
	thingsIDid: string;
	workStories: string;
	contactMe: string;
	github: string;
	link: string;
	languageLabel: string;
}

export const translations: Record<Language, Translations> = {
	en: {
		documentTitle: "Thomas Riffard - Fullstack developer",
		typescriptDev: "Typescript Dev",
		welcome: "Welcome! I'm a full stack developer from Nantes that loves to experiment with the web.",
		whatIDo: "What I Do ✅",
		solutionArchitecture: "Solution architecture",
		whatIDoItems: [
			"🌱 Prototyping and Proof of Concepts",
			"🕹️ Complex and reactive feature design",
			"📈 Scaling up full stack applications",
			"🔀 Technological migration strategies",
			"⛁ Data modelisation",
			"🧑🏻‍💻 UI and frontend restructuring",
		],
		thingsIDid: "Things I did 👨‍🔬",
		workStories: "Work stories 💼",
		contactMe: "Contact Me",
		github: "GitHub",
		link: "Link",
		languageLabel: "Language",
	},
	fr: {
		documentTitle: "Thomas Riffard - Développeur fullstack",
		typescriptDev: "Développeur Typescript",
		welcome: "Bienvenue ! Je suis développeur full stack à Nantes et j'adore expérimenter avec le web.",
		whatIDo: "Ce que je fais ✅",
		solutionArchitecture: "Architecture de solutions",
		whatIDoItems: [
			"🌱 Prototypage et preuves de concept",
			"🕹️ Conception de fonctionnalités complexes et réactives",
			"📈 Montée en charge d'applications full stack",
			"🔀 Stratégies de migration technologique",
			"⛁ Modélisation des données",
			"🧑🏻‍💻 Restructuration d'interfaces et de frontends",
		],
		thingsIDid: "Ce que j'ai fait 👨‍🔬",
		workStories: "Vécu professionnel 💼",
		contactMe: "Me contacter",
		github: "GitHub",
		link: "Lien",
		languageLabel: "Langue",
	},
};

// Libellés des tags de projets ; les noms de technologies ne figurent pas ici et restent tels quels.
const frenchTags: Record<string, string> = {
	Game: "Jeu",
	Daily: "Quotidien",
	Multiplayer: "Multijoueur",
	Library: "Bibliothèque",
	Procedural: "Procédural",
	Online: "En ligne",
	"Board game": "Jeu de société",
	Software: "Logiciel",
	Railroad: "Chemin de fer",
	Anagrams: "Anagrammes",
	"Bug fix": "Correction de bug",
	"Pixel Art": "Pixel art",
	"Depth of field": "Profondeur de champ",
};

export function translateTag(tag: string, lang: Language): string {
	return lang === "fr" ? (frenchTags[tag] ?? tag) : tag;
}
