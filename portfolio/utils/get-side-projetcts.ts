import type { SideProject } from "../types/side-projet";

export function getSideProjets(): SideProject[] {
	return [
		{
			title: "typedoc-plugin-include-example",
			tags: ["Library", "Typescript", "Npm"],
			illustration: "typedoc-plugin-include-example.png",
			description:
				"Tool to help developers to include code examples in their documentations.",
			github: "https://github.com/ferdodo/typedoc-plugin-include-example",
			link: "https://www.npmjs.com/package/typedoc-plugin-include-example",
		},
		{
			title: "Autochess",
			tags: ["Web", "Multiplayer", "Three.js", "Mobile"],
			illustration: "autochess.jpg",
			description:
				"Lightweight 3D auto battler game. Playable online and on mobile.",
			github: "https://github.com/ferdodo/autochess",
			link: "https://ferdodo.github.io/autochess/",
		},
		{
			title: "Unlock",
			tags: ["Web", "Puzzle", "Rust", "WASM", "Procedural"],
			illustration: "unlock.jpg",
			description: "Daily web puzzle game.",
			github: "https://github.com/ferdodo/unlock",
			link: "https://ferdodo.github.io/unlock/",
		},
		{
			title: "Polynames",
			tags: ["Web", "Game", "Online", "Multiplayer", "Board game"],
			illustration: "polynames.jpg",
			description: "Codenames-like game playable online.",
			github: "https://github.com/ferdodo/polynames",
			link: "https://ferdodo.github.io/polynames/",
		},
		{
			title: "Blockwise",
			tags: ["Library", "Typescript", "Npm"],
			illustration: "blockwise.png",
			description: "2D utility library.",
			github: "https://github.com/ferdodo/blockwise",
			link: "https://ferdodo.github.io/blockwise/",
		},

		{
			title: "Deciphraze",
			tags: ["Web", "Puzzle", "Daily", "Procedural"],
			illustration: "deciphraze.jpg",
			description: "Everyday decipher a mysterious, encoded, ancient text.",
			github: "https://github.com/ferdodo/deciphraze",
			link: "https://ferdodo.github.io/deciphraze/",
		},
		{
			title: "Vitest",
			tags: ["Test runner", "Open source", "Bug fix"],
			illustration: "vitest.png",
			description:
				"Fixed issue #2920, preventing synchronous timeouts to be detected.",
			github: "https://github.com/vitest-dev/vitest",
			link: "https://vitest.dev/",
		},
		{
			title: "Diary",
			tags: ["Web", "React"],
			illustration: "diary.jpg",
			description: "Small website for taking daily notes.",
			github: "https://github.com/ferdodo/diary",
			link: "https://ferdodo.github.io/diary/",
		},

		{
			title: "daily-prng",
			tags: ["Library", "Typescript", "RNG"],
			illustration: "daily-prng.png",
			description: "Procedural random number generator based on today's date.",
			github: "https://github.com/ferdodo/daily-prng",
			link: "https://ferdodo.github.io/daily-prng/",
		},
		{
			title: "Unsplit",
			tags: ["Web", "Puzzle", "Daily"],
			illustration: "unsplit.png",
			description: "Daily puzzle.",
			github: "https://github.com/ferdodo/unsplit",
			link: "https://ferdodo.github.io/unsplit/",
		},
		{
			title: "Prince Duals",
			tags: ["Web", "Multiplayer", "WebRTC"],
			illustration: "prince-duals.png",
			description:
				"Two player game experimenting peer-to-peer networking with WebRTC.",
			github: "https://github.com/ferdodo/prince-duals",
			link: "https://ferdodo.github.io/prince-duals/",
		},
		{
			title: "Cheminot",
			tags: ["Web", "Game", "Railroad", "Daily"],
			illustration: "cheminot.png",
			description: "A game about closing every open railroad.",
			github: "https://github.com/ferdodo/cheminot",
			link: "https://ferdodo.github.io/cheminot/",
		},
		{
			title: "Tetromino",
			tags: ["Web", "Game", "Procedural"],
			illustration: "tetromino.png",
			description: "Daily challenge to fit all tetromino on the board.",
			github: "https://github.com/ferdodo/tetromino",
			link: "https://ferdodo.github.io/tetromino/",
		},
		{
			title: "procedural-tamago-sprite",
			tags: ["Rust", "Pixel Art", "Procedural"],
			illustration: "tamago.png",
			description:
				"Generate some tamagochi-like sprites with procedural pixel art generation in Rust.",
			github: "https://github.com/ferdodo/procedural-tamago-sprite",
			link: "https://ferdodo.github.io/procedural-tamago-sprite/",
		},
		{
			title: "Shufflet",
			tags: ["Anagrams", "Daily"],
			illustration: "shufflet.png",
			description: "Find all anagrams for the word of the day.",
			github: "https://github.com/ferdodo/shufflet",
			link: "https://ferdodo.github.io/shufflet/",
		},
		{
			title: "Reliade",
			tags: ["2D", "Puzzle", "Daily"],
			illustration: "reliade.png",
			description: "Link all nodes while filling the most space you can.",
			github: "https://github.com/ferdodo/reliade",
			link: "https://ferdodo.github.io/reliade/",
		},
		{
			title: "csgo-dof-screenshot",
			tags: ["Software", "Electron", "Csgo", "Depth of field"],
			illustration: "csgo-dof.jpg",
			description:
				"Optical hack to create screenshots with deep of field effect.",
			github: "https://github.com/ferdodo/csgo-dof-screenshot",
			link: "https://github.com/ferdodo/csgo-dof-screenshot",
		},
	];
}
