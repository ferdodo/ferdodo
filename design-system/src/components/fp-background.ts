import { html } from "../utils/html.js";

const tagName = "fp-background";

const template = html`
	<style>
		:host {
			display: block;
			background-color: var(--ferdodo-portfolio-color-background);
			padding: 1px;
		}
	</style>

	<slot></slot>
`;

class FpBackground extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const clonedTemplate = template.content.cloneNode(true);
		this.shadowRoot?.appendChild(clonedTemplate);
	}
}

export function defineBackground() {
	customElements.define(tagName, FpBackground);
}
