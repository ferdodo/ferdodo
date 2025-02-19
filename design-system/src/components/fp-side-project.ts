import htm from "htm";
import h from "hyperscript";
import { getShadowRoot } from "../utils/get-shadow-root.js";
import { createTemplate } from "../utils/create-template.js";

const html = htm.bind(h);
const tagName = "fp-side-project";

const template = createTemplate(html`
	<style>
		.container {
			width: 20rem;
			height: 32rem;
			background-color: var(--ferdodo-portfolio-color-lighter);
			border-radius: 0.5rem;
			padding: 1rem;
		}

		.pre-illustration {
			min-height: 9.5rem;
		}

		.description-block {
			min-height: 3.6rem;
		}

		::slotted(img) {
			width: 100%;
			max-height: 12rem;
			object-fit: cover;
			object-position: top left;
		}
		

		.tags > ::slotted(span) {
			display: inline-block;
			margin: 0.2rem;
			padding: 0.2rem 0.5rem;
			border-radius: 0.5rem;
			background-color: var(--ferdodo-portfolio-color-lighter-primary);
			color: var(--ferdodo-portfolio-color-text-primary);
		}

		::slotted([slot="link"]) {
			display: inline-block;
			margin: 0.2rem;
			padding: 0.2rem 0.5rem;
			border-radius: 0.5rem;
			background-color: var(--ferdodo-portfolio-color-primary);
			color: var(--ferdodo-portfolio-color-background);
			text-decoration: none;
		}

		::slotted([slot="github"]) {
			display: inline-block;
			margin: 0.2rem;
			padding: 0.2rem 0.5rem;
			border-radius: 0.5rem;
			background-color: var(--ferdodo-portfolio-color-primary);
			color: var(--ferdodo-portfolio-color-background);	
			text-decoration: none;

		}

	</style>

	<div className="container">
		<div className="pre-illustration">
			<fp-typography>
				<h2><slot name="title"></slot></h2>
				<p className="tags">
					<slot name="tag-1"></slot>
					<slot name="tag-2"></slot>
					<slot name="tag-3"></slot>
					<slot name="tag-4"></slot>
					<slot name="tag-5"></slot>
					<slot name="tag-6"></slot>
					<slot name="tag-7"></slot>
					<slot name="tag-8"></slot>
				</p>
			</fp-typography>
		</div>
		<div>
			<slot name="illustration"></slot>
		</div>
		<div className="description-block">
			<fp-typography>
				<p>
					<slot name="description"></slot>
				</p>
			</fp-typography>
		</div>
		<div>
			<fp-typography>
				<p style="text-align: right;">
					<slot name="github"></slot>
					<slot name="link"></slot>
				</p>
			</fp-typography>
		</div>
	</div>
`);

class SideProjet extends HTMLElement {
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

export function defineSideProjet() {
	customElements.define(tagName, SideProjet);
}
