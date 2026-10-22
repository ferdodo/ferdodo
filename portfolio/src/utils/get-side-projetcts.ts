import type { SideProject } from "../types/side-projet";

export function getSideProjets(): SideProject[] {
	return [
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
