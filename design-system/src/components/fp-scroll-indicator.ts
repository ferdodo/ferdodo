import htm from "htm";
import h from "hyperscript";
import { getShadowRoot } from "../utils/get-shadow-root.js";
import { createTemplate } from "../utils/create-template.js";

const html = htm.bind(h);
const tagName = "fp-scroll-indicator";

const template = createTemplate(html`
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
			animation: move 3s infinite;
			transition: transform 0.5s;
			transform: translateX(0);
		}

		span:hover {
			transform: translateX(1rem);
		}

		span::before {
			content:">";
		}
	</style>

	<div>
		<span></span>
	</div>
`);

class ScrollIndicator extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const shadowRoot = getShadowRoot(this);
		const clonedTemplate = template.content.cloneNode(true);
		shadowRoot.appendChild(clonedTemplate);
	}
}

export function defineScrollIndicator() {
	customElements.define(tagName, ScrollIndicator);
}
