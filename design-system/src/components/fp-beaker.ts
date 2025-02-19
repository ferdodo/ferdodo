import htm from "htm";
import h from "hyperscript";
import { getShadowRoot } from "../utils/get-shadow-root.js";
import { createTemplate } from "../utils/create-template.js";
import { Engine, Render, Runner, Bodies, Composite } from "matter-js";

const html = htm.bind(h);
const tagName = "fp-beaker";

const template = createTemplate(html`
	<style>
		.container {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			grid-column-gap: 0px;
			grid-row-gap: 0px; 
			align-items: end;
			z-index:-1;
		}

		.container > * {
			grid-area: 1 / 1 / 2 / 2;
		}

		img {
			margin-bottom: 800px;
			margin-left: 200px;
		}

		canvas {
			z-index: -1;
		}
	</style>

	<div className="container">
		<img loading="lazy" src="./beaker.png"/>
		<div id="matter-mount-point"></div>
		<img loading="lazy" src="./beaker-mask.png"/>
		<img loading="lazy" src="./beaker-front.png"/>
	</div>
`);

class Beaker extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		const clonedTemplate = template.content.cloneNode(true);
		shadowRoot.appendChild(clonedTemplate);
		this.render();
	}

	async render() {
		const engine = Engine.create();

		const element: HTMLElement | null =
			this.shadowRoot?.querySelector("#matter-mount-point") || null;

		if (!element) {
			throw new Error("No div found !");
		}

		const wireframes = false;

		const render = Render.create({
			element,
			engine,
			options: {
				width: 720,
				height: 2300,
				wireframes,
				background: "transparent",
			},
		});

		const beaker = [
			Bodies.rectangle(360, 1520, 250, 60, {
				isStatic: true,
				render: { visible: wireframes },
			}),
			Bodies.rectangle(250, 1340, 10, 320, {
				isStatic: true,
				render: { visible: wireframes },
			}),
			Bodies.rectangle(470, 1340, 10, 320, {
				isStatic: true,
				render: { visible: wireframes },
			}),
			Bodies.rectangle(230, 1165, 10, 10, {
				isStatic: true,
				render: { visible: wireframes },
			}),
			Bodies.rectangle(490, 1165, 10, 10, {
				isStatic: true,
				render: { visible: wireframes },
			}),
		];

		Composite.add(engine.world, beaker);
		Render.run(render);
		const runner = Runner.create();
		Runner.run(runner, engine);

		const logos = [
			"./logos/svelte.png",
			"./logos/react.png",
			"./logos/vue.png",
			"./logos/bun.png",
			"./logos/graphql.png",
			"./logos/mongo.png",
			"./logos/node.png",
			"./logos/redis.png",
			"./logos/openapi.png",
			"./logos/postgres.png",
			"./logos/prometheus.png",
			"./logos/docker.png",
			"./logos/js.png",
			"./logos/typescript.png",
			"./logos/stryker.png",
			"./logos/rxjs.png",
			"./logos/three.png",
		].sort(function sortRantom() {
			return Math.random() - 0.5;
		});

		function addBall(image: string) {
			const x = Math.floor(Math.random() * 200) + 250;

			const ball = Bodies.circle(x, 200, 35, {
				render: {
					sprite: {
						texture: image,
						xScale: 1,
						yScale: 1,
					},
				},
			});

			Composite.add(engine.world, ball);
		}

		let runnerRunning = true;

		window.addEventListener("wheel", () => {
			if (runnerRunning) {
				Runner.stop(runner);
				runnerRunning = false;
			}

			setTimeout(() => {
				if (!runnerRunning) {
					Runner.run(runner, engine);
					runnerRunning = true;
				}
			}, 500);
		});

		for (const logo of logos) {
			addBall(logo);
			await new Promise((resolve) => setTimeout(resolve, Math.random() * 8500));
		}
	}
}

export function defineBeaker() {
	customElements.define(tagName, Beaker);
}
