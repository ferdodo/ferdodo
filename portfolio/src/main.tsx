import React from "react";
import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { loadDesignSystem } from "design-system/src/utils/load-design-system";
import { Welcome } from "./components/welcome";

const WhatIDo = lazy(() =>
	import("./components/what-i-do").then((module) => ({
		default: module.WhatIDo,
	})),
);

const ThingsIDid = lazy(() =>
	import("./components/things-i-did").then((module) => ({
		default: module.ThingsIDid,
	})),
);

const ContactMe = lazy(() =>
	import("./components/contact-me").then((module) => ({
		default: module.ContactMe,
	})),
);

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
