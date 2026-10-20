import { html } from "../utils/html.js";

const tagName = "fp-typography";

const template = html`
	<style>
		::slotted(*) {
			color: var(--ferdodo-portfolio-color-text);
			font-family: "QuicksandBook", sans-serif;
			font-weight: bold;
			font-synthesis: none;
		}

		::slotted(.secondary) {
			color: var(--ferdodo-portfolio-color-text-secondary);
		}

		::slotted(h1) {
			font-size: clamp(2em, 2.6vw, 2.6vw);
		}

		::slotted(h2) {
			font-size: clamp(1.2em, 2.1vw, 2.1vw);
		}

		::slotted(p) {
			font-size: clamp(0.66em, 1.2vw, 1.2vw);
		}

		::slotted(ul) {
			line-height: 2;
			font-size: clamp(0.66em, 1.2vw, 1.2vw);
		}

		::slotted(li) {
			transition: transform 0.3s ease;
		}

		::slotted(li:hover) {
			transform: translateX(0.5rem);
		}

		::slotted(a) {
			transition: color 0.2s ease;
		}

		@media (prefers-reduced-motion: reduce) {
			::slotted(li),
			::slotted(a) {
				transition: none;
			}

			::slotted(li:hover) {
				transform: none;
			}
		}
	</style>

	<slot></slot>
`;

class Typography extends HTMLElement {
	static get observedAttributes() {
		return [];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const clonedTemplate = template.content.cloneNode(true);
		this.shadowRoot?.appendChild(clonedTemplate);
	}
}

export function defineTypography() {
	customElements.define(tagName, Typography);
}
