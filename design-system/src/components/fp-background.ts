import htm from "htm";
import h from "hyperscript";
import { getShadowRoot } from "../utils/get-shadow-root.js";
import { createTemplate } from "../utils/create-template.js";

const html = htm.bind(h);
const tagName = "fp-background";

const template = createTemplate(html`
	<style>
		:host {
			display: block;
			background-color: var(--ferdodo-portfolio-color-background);
			padding: 1px;
		}
	</style>

	<slot></slot>
`);

class FpBackground extends HTMLElement {
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

export function defineBackground() {
	customElements.define(tagName, FpBackground);
}
