import React, { useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap";
import { prefersReducedMotion } from "./motion";

// Fait apparaître le titre épinglé quand la première section atteint le milieu de l'écran, jusqu'à la dernière.
export function usePinnedTitle(
	firstRef: React.RefObject<HTMLElement | null>,
	lastRef: React.RefObject<HTMLElement | null>,
) {
	const titleRef = useRef<HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		const first = firstRef.current;
		const last = lastRef.current;
		const title = titleRef.current;
		if (!first || !last || !title) {
			return;
		}

		const duration = prefersReducedMotion() ? 0 : 0.5;
		gsap.set(title, { yPercent: -100 });
		const show = () => gsap.to(title, { yPercent: 0, duration });
		const hide = () => gsap.to(title, { yPercent: -100, duration });

		const trigger = ScrollTrigger.create({
			trigger: first,
			endTrigger: last,
			start: "top 50%",
			end: "bottom 50%",
			onToggle: (self) => (self.isActive ? show() : hide()),
		});

		return () => trigger.kill();
	}, []);

	return titleRef;
}
