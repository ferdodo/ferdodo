import htm from "htm";
import h from "hyperscript";
import { getShadowRoot } from "../utils/get-shadow-root.js";
import { createTemplate } from "../utils/create-template.js";

const html = htm.bind(h);
const tagName = "fp-typography";

const template = createTemplate(html`
	<style>
		::slotted(*) {
			color: var(--ferdodo-portfolio-color-text);
			font-family: "QuicksandBook";
			font-weight: bold;
		}

		::slotted(.secondary) {
			color: var(--ferdodo-portfolio-color-text-secondary);
		}

		::slotted(h1) {
			font-size: clamp(2em, 6vw, 3em);
		}

		::slotted(h2) {
			font-size: clamp(1.2em, 3.6vw, 1.8em);
		}

		::slotted(p) {
			font-size: clamp(0.66em, 2vw, 1em);
		}

		::slotted(ul) {
			line-height: 2;
			font-size: clamp(0.66em, 2vw, 1em);
		}
	</style>

	<slot></slot>
`);

class Typography extends HTMLElement {
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

export function defineTypography() {
	customElements.define(tagName, Typography);
}
