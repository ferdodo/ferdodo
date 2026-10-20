import { html } from "../utils/html.js";

const tagName = "fp-scroll-indicator";

const template = html`
	<style>
		:host {
			display: grid;
			place-items: center;
		}

		a {
			display: grid;
			padding: 0.5rem 1rem;
			user-select: none;
			color: inherit;
			text-decoration: none;
			cursor: pointer;
		}

		a:focus-visible {
			outline: 2px solid var(--ferdodo-portfolio-color-text-secondary);
			outline-offset: 0.5rem;
			border-radius: 0.25rem;
		}

		span {
			display: inline-block;
			transform: rotate(90deg);
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
				transform: rotate(90deg) translateX(0);
			}
			50% {
				transform: rotate(90deg) translateX(0.8rem);
			}
		}

		@media (prefers-reduced-motion: reduce) {
			span {
				animation: none;
			}
		}
	</style>

	<a>
		<span aria-hidden="true"></span>
	</a>
`;

class ScrollIndicator extends HTMLElement {
	static get observedAttributes() {
		return ["href", "label"];
	}

	async connectedCallback() {
		this.attachShadow({ mode: "open" });
		const clonedTemplate = template.content.cloneNode(true);
		this.shadowRoot?.appendChild(clonedTemplate);
		this.syncLink();
	}

	attributeChangedCallback() {
		this.syncLink();
	}

	syncLink() {
		const link = this.shadowRoot?.querySelector("a");
		if (!link) {
			return;
		}

		const href = this.getAttribute("href");
		if (href) {
			link.setAttribute("href", href);
		} else {
			link.removeAttribute("href");
		}

		const label = this.getAttribute("label");
		if (label) {
			link.setAttribute("aria-label", label);
		} else {
			link.removeAttribute("aria-label");
		}
	}
}

export function defineScrollIndicator() {
	customElements.define(tagName, ScrollIndicator);
}
