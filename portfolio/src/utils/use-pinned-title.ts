import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";
import { prefersReducedMotion } from "./motion";

// Fait apparaître le titre épinglé de la section quand la grille de cartes atteint le milieu de l'écran.
export function usePinnedTitle() {
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		const section = sectionRef.current;
		const title = titleRef.current;
		if (!section || !title) {
			return;
		}

		const duration = prefersReducedMotion() ? 0 : 0.5;
		gsap.set(title, { yPercent: -100 });
		const show = () => gsap.to(title, { yPercent: 0, duration });
		const hide = () => gsap.to(title, { yPercent: -100, duration });

		const grid = section.querySelector("[data-snap-rows]");
		if (!grid) {
			return;
		}

		const trigger = ScrollTrigger.create({
			trigger: grid,
			start: "top 50%",
			end: "bottom 50%",
			onToggle: (self) => (self.isActive ? show() : hide()),
		});

		return () => trigger.kill();
	}, []);

	return { sectionRef, titleRef };
}
