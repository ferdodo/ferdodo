import { html } from "../utils/html.js";

const tagName = "fp-scroll-indicator";

const template = html`
	<style>
		div {
			transform: rotate(90deg);
			height: 2rem;
			user-select: none;
			padding: 2rem;
			display: grid;
			place-content: center;
		}

		span {
			color: var(--ferdodo-portfolio-color-text-secondary);
			font-family: "QuicksandBook";
			font-size: 4rem;
			animation: move 3s ease-in-out infinite;
			transition: scale 0.5s;
		}

		span:hover {
			animation-play-state: paused;
			scale: 1.3;
		}

		span::before {
			content:">";
		}

		@keyframes move {
			0%,
			100% {
				transform: translateX(0);
			}
			50% {
				transform: translateX(0.8rem);
			}
		}

		@media (prefers-reduced-motion: reduce) {
			span {
				animation: none;
			}
		}
	</style>

	<div>
		<span></span>
	</div>
`;

class ScrollIndicator extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const clonedTemplate = template.content.cloneNode(true);
		this.shadowRoot?.appendChild(clonedTemplate);
	}
}

export function defineScrollIndicator() {
	customElements.define(tagName, ScrollIndicator);
}
