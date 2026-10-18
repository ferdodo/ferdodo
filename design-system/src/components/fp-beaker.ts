import { Engine, Render, Runner, Bodies, Composite } from "matter-js";
import { html } from "../utils/html.js";

const tagName = "fp-beaker";

const template = html`
	<style>
		:host {
			display: block;
		}

		.container {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			align-items: end;
			z-index:-1;
			animation: fade-in 1s ease-out both;
		}

		@keyframes fade-in {
			from {
				opacity: 0;
				transform: translateY(2rem);
			}
		}

		@media (prefers-reduced-motion: reduce) {
			.container {
				animation: none;
			}
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

	<div class="container">
		<img loading="lazy" src="./beaker.png"/>
		<div id="matter-mount-point"></div>
		<img loading="lazy" src="./beaker-mask.png"/>
		<img loading="lazy" src="./beaker-front.png"/>
	</div>
`;

class Beaker extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const clonedTemplate = template.content.cloneNode(true);
		this.shadowRoot?.appendChild(clonedTemplate);
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

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		Composite.add(engine.world, beaker);
		Render.run(render);
		const runner = Runner.create();

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

		let running = false;
		let onScreen = true;
		let wheelPaused = false;
		let wheelTimeout: number | undefined;

		const sync = () => {
			const shouldRun = onScreen && !wheelPaused;

			if (shouldRun && !running) {
				Runner.run(runner, engine);
				running = true;
			} else if (!shouldRun && running) {
				Runner.stop(runner);
				running = false;
			}
		};

		window.addEventListener("wheel", () => {
			wheelPaused = true;
			sync();

			clearTimeout(wheelTimeout);
			wheelTimeout = window.setTimeout(() => {
				wheelPaused = false;
				sync();
			}, 500);
		});

		new IntersectionObserver(([entry]) => {
			onScreen = entry.isIntersecting;
			sync();
		}).observe(this);

		sync();

		for (const logo of logos) {
			addBall(logo);
			await new Promise((resolve) => setTimeout(resolve, Math.random() * 8500));
		}
	}
}

export function defineBeaker() {
	customElements.define(tagName, Beaker);
}
