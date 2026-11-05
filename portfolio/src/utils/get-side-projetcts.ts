import type { SideProject } from "../types/side-projet";

export function getSideProjets(): SideProject[] {
	return [
		{
			title: "loto",
			tags: ["Web", "Interactive", "Event"],
			illustration: "loto.png",
			description: {
				en: "Interactive lottery drawing tool for events.",
				fr: "Outil de tirage au sort interactif pour les événements.",
			},
			github: "https://github.com/ferdodo/loto",
			link: "https://github.com/ferdodo/loto",
		},
		{
			title: "grid-explainer",
			tags: ["Web", "CSS", "Educational", "Tool"],
			illustration: "grid-explainer.png",
			description: {
				en: "Visual utility to explain and explore CSS Grid layouts interactively.",
				fr: "Utilitaire visuel pour expliquer et explorer les mises en page CSS Grid de manière interactive.",
			},
			github: "https://github.com/ferdodo/grid-explainer",
			link: "https://github.com/ferdodo/grid-explainer",
		},
		{
			title: "command-as-mcp",
			tags: ["MCP", "Rust", "CLI", "AI"],
			illustration: "command-as-mcp.png",
			description: {
				en: "MCP stdio server written in Rust that wraps explicit command-line interfaces for AI models.",
				fr: "Serveur MCP stdio écrit en Rust qui wrapper les interfaces en ligne de commande explicites pour les modèles d'IA.",
			},
			github: "https://github.com/ferdodo/command-as-mcp",
			link: "https://github.com/ferdodo/command-as-mcp",
		},
		{
			title: "code-dactylo",
			tags: ["CLI", "Game", "Interactive", "Animation"],
			illustration: "code-dactylo.png",
			description: {
				en: "Interactive animated command-line typing game where you rewrite code snippets optimally in different programming languages.",
				fr: "Jeu de dactylographie interactif et animé en ligne de commande où vous réécrivez du code au mieux dans différents langages de programmation.",
			},
			github: "https://github.com/ferdodo/code-dactylo",
			link: "https://github.com/ferdodo/code-dactylo",
		},
		{
			title: "exportcase",
			tags: ["Tooling", "Typescript", "Rust", "CLI"],
			illustration: "exportcase.png",
			description: {
				en: "Tool to validate TypeScript file naming conventions.",
				fr: "Outil pour valider les conventions de nommage des fichiers TypeScript.",
			},
			github: "https://github.com/ferdodo/exportcase",
			link: "https://github.com/ferdodo/exportcase",
		},
		{
			title: "classic-otp.fr",
			tags: ["Web", "API", "OTP"],
			illustration: "classic-otp.png",
			description: {
				en: "Simple service to send one-time passwords via email with a straightforward API.",
				fr: "Service simple pour envoyer des mots de passe à usage unique par email avec une API directe.",
			},
			github: "https://github.com/ferdodo/classic-otp",
			link: "https://classic-otp.fr",
		},
		{
			title: "Todo",
			tags: ["Web", "Todo", "Personal"],
			illustration: "todo.png",
			description: {
				en: "Personal todo app inspired by Habitica, combining daily task management with RPG mechanics for motivation and progression.",
				fr: "Application todo personnelle inspirée par Habitica, combinant la gestion de tâches quotidiennes avec des mécaniques RPG pour la motivation et la progression.",
			},
			github: "https://github.com/ferdodo/todo",
			link: "https://github.com/ferdodo/todo",
		},
		{
			title: "typedoc-plugin-include-example",
			tags: ["Library", "Typescript", "Npm"],
			illustration: "typedoc-plugin-include-example.png",
			description: {
				en: "Tool to help developers to include code examples in their documentations.",
				fr: "Outil qui aide les développeurs à inclure des exemples de code dans leur documentation.",
			},
			github: "https://github.com/ferdodo/typedoc-plugin-include-example",
			link: "https://www.npmjs.com/package/typedoc-plugin-include-example",
		},
		{
			title: "Autochess",
			tags: ["Web", "Multiplayer", "Three.js", "Mobile"],
			illustration: "autochess.jpg",
			description: {
				en: "Lightweight 3D auto battler game. Playable online and on mobile.",
				fr: "Auto battler 3D léger. Jouable en ligne et sur mobile.",
			},
			github: "https://github.com/ferdodo/autochess",
			link: "https://ferdodo.codeberg.page/autochess/",
		},
		{
			title: "Unlock",
			tags: ["Web", "Puzzle", "Rust", "WASM", "Procedural"],
			illustration: "unlock.jpg",
			description: {
				en: "Daily web puzzle game.",
				fr: "Jeu de réflexion quotidien sur le web.",
			},
			github: "https://github.com/ferdodo/unlock",
			link: "https://ferdodo.github.io/unlock/",
		},
		{
			title: "Polynames",
			tags: ["Web", "Game", "Online", "Multiplayer", "Board game"],
			illustration: "polynames.jpg",
			description: {
				en: "Codenames-like game playable online.",
				fr: "Jeu de type Codenames jouable en ligne.",
			},
			github: "https://github.com/ferdodo/polynames",
			link: "https://ferdodo.github.io/polynames/",
		},
		{
			title: "Blockwise",
			tags: ["Library", "Typescript", "Npm"],
			illustration: "blockwise.png",
			description: {
				en: "2D utility library.",
				fr: "Bibliothèque utilitaire 2D.",
			},
			github: "https://github.com/ferdodo/blockwise",
			link: "https://ferdodo.github.io/blockwise/",
		},
		{
			title: "Deciphraze",
			tags: ["Web", "Puzzle", "Daily", "Procedural"],
			illustration: "deciphraze.jpg",
			description: {
				en: "Everyday decipher a mysterious, encoded, ancient text.",
				fr: "Chaque jour, déchiffrez un mystérieux texte ancien codé.",
			},
			github: "https://github.com/ferdodo/deciphraze",
			link: "https://ferdodo.github.io/deciphraze/",
		},
		{
			title: "Vitest",
			tags: ["Test runner", "Open source", "Bug fix"],
			illustration: "vitest.png",
			description: {
				en: "Fixed issue #2920, preventing synchronous timeouts to be detected.",
				fr: "Correction du ticket #2920, qui empêchait la détection des timeouts synchrones.",
			},
			github: "https://github.com/vitest-dev/vitest",
			link: "https://vitest.dev/",
		},
		{
			title: "Diary",
			tags: ["Web", "React"],
			illustration: "diary.jpg",
			description: {
				en: "Small website for taking daily notes.",
				fr: "Petit site pour prendre des notes quotidiennes.",
			},
			github: "https://github.com/ferdodo/diary",
			link: "https://ferdodo.github.io/diary/",
		},
		{
			title: "daily-prng",
			tags: ["Library", "Typescript", "RNG"],
			illustration: "daily-prng.png",
			description: {
				en: "Procedural random number generator based on today's date.",
				fr: "Générateur de nombres aléatoires procédural basé sur la date du jour.",
			},
			github: "https://github.com/ferdodo/daily-prng",
			link: "https://ferdodo.github.io/daily-prng/",
		},
		{
			title: "Unsplit",
			tags: ["Web", "Puzzle", "Daily"],
			illustration: "unsplit.png",
			description: {
				en: "Daily puzzle.",
				fr: "Puzzle quotidien.",
			},
			github: "https://github.com/ferdodo/unsplit",
			link: "https://ferdodo.github.io/unsplit/",
		},
		{
			title: "Prince Duals",
			tags: ["Web", "Multiplayer", "WebRTC"],
			illustration: "prince-duals.png",
			description: {
				en: "Two player game experimenting peer-to-peer networking with WebRTC.",
				fr: "Jeu à deux joueurs qui expérimente le réseau pair-à-pair avec WebRTC.",
			},
			github: "https://github.com/ferdodo/prince-duals",
			link: "https://ferdodo.github.io/prince-duals/",
		},
		{
			title: "Cheminot",
			tags: ["Web", "Game", "Railroad", "Daily"],
			illustration: "cheminot.png",
			description: {
				en: "A game about closing every open railroad.",
				fr: "Un jeu où il faut fermer toutes les voies ferrées ouvertes.",
			},
			github: "https://github.com/ferdodo/cheminot",
			link: "https://ferdodo.github.io/cheminot/",
		},
		{
			title: "Tetromino",
			tags: ["Web", "Game", "Procedural"],
			illustration: "tetromino.png",
			description: {
				en: "Daily challenge to fit all tetromino on the board.",
				fr: "Défi quotidien : placer tous les tétrominos sur le plateau.",
			},
			github: "https://github.com/ferdodo/tetromino",
			link: "https://ferdodo.github.io/tetromino/",
		},
		{
			title: "procedural-tamago-sprite",
			tags: ["Rust", "Pixel Art", "Procedural"],
			illustration: "tamago.png",
			description: {
				en: "Generate some tamagochi-like sprites with procedural pixel art generation in Rust.",
				fr: "Génère des sprites façon tamagotchi par génération procédurale de pixel art, en Rust.",
			},
			github: "https://github.com/ferdodo/procedural-tamago-sprite",
			link: "https://ferdodo.github.io/procedural-tamago-sprite/",
		},
		{
			title: "Shufflet",
			tags: ["Anagrams", "Daily"],
			illustration: "shufflet.png",
			description: {
				en: "Find all anagrams for the word of the day.",
				fr: "Trouvez tous les anagrammes du mot du jour.",
			},
			github: "https://github.com/ferdodo/shufflet",
			link: "https://ferdodo.github.io/shufflet/",
		},
		{
			title: "Reliade",
			tags: ["2D", "Puzzle", "Daily"],
			illustration: "reliade.png",
			description: {
				en: "Link all nodes while filling the most space you can.",
				fr: "Reliez tous les nœuds en remplissant le plus d'espace possible.",
			},
			github: "https://github.com/ferdodo/reliade",
			link: "https://ferdodo.github.io/reliade/",
		},
		{
			title: "csgo-dof-screenshot",
			tags: ["Software", "Electron", "Csgo", "Depth of field"],
			illustration: "csgo-dof.jpg",
			description: {
				en: "Optical hack to create screenshots with deep of field effect.",
				fr: "Astuce optique pour créer des captures d'écran avec un effet de profondeur de champ.",
			},
			github: "https://github.com/ferdodo/csgo-dof-screenshot",
			link: "https://github.com/ferdodo/csgo-dof-screenshot",
		},
	];
}
