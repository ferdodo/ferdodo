import React from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { loadDesignSystem } from "design-system/src/utils/load-design-system";
import { LanguageProvider } from "./i18n/language";
import { Welcome } from "./components/welcome";
import { WhatIDo } from "./components/what-i-do";
import { ThingsIDid } from "./components/things-i-did";
import { WorkStories } from "./components/work-stories";
import { ContactMe } from "./components/contact-me";
import { ScrollTrigger } from "./utils/gsap";

declare module "react" {
	namespace JSX {
		interface FpComponent {
			children?: React.ReactNode;
			style?: React.CSSProperties;
			slot?: string;
			ref?: React.Ref<HTMLElement>;
		}

		interface IntrinsicElements {
			["fp-typography"]: FpComponent;
			["fp-background"]: FpComponent;
			["fp-scroll-indicator"]: FpComponent & { href?: string; label?: string };
			["fp-beaker"]: FpComponent;
			["fp-side-project"]: FpComponent;
		}
	}
}

loadDesignSystem()
	.then(() => {
		const rootNode = document.getElementById("app-root");

		if (!rootNode) {
			throw new Error("No root node found !");
		}

		const root = createRoot(rootNode);
		flushSync(() => {
			root.render(
				<LanguageProvider>
					<Welcome />
					<WhatIDo />
					<ThingsIDid />
					<WorkStories />
					<ContactMe />
				</LanguageProvider>,
			);
		});

		ScrollTrigger.refresh();
	})
	.catch(console.error);
