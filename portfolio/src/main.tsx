import React from "react";
import { createRoot } from "react-dom/client";
import { loadDesignSystem } from "design-system/src/utils/load-design-system";
import { Welcome } from "./components/welcome";
import { WhatIDo } from "./components/what-i-do";
import { ThingsIDid } from "./components/things-i-did";
import { ContactMe } from "./components/contact-me";

declare module "react" {
	namespace JSX {
		interface FpComponent {
			children?: React.ReactNode;
			style?: React.CSSProperties;
			slot?: string;
		}

		interface IntrinsicElements {
			["fp-typography"]: FpComponent;
			["fp-background"]: FpComponent;
			["fp-scroll-indicator"]: FpComponent;
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

		createRoot(rootNode).render(
			<>
				<Welcome />
				<WhatIDo />
				<ThingsIDid />
				<ContactMe />
			</>,
		);
	})
	.catch(console.error);
