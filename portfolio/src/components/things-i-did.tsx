import React, { useRef } from "react";
import { getSideProjets } from "../utils/get-side-projetcts";
import { gsap, ScrollTrigger } from "../utils/gsap";
import { prefersReducedMotion } from "../utils/motion";
import { SideProjectEntry } from "./side-project-entry";

export function ThingsIDid() {
	const sideProjects = getSideProjets();
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		const section = sectionRef.current;
		const title = titleRef.current;
		if (!section || !title) {
			return;
		}

		const duration = prefersReducedMotion() ? 0 : 0.5;
		const show = () => gsap.to(title, { yPercent: 0, duration });
		const hide = () => gsap.to(title, { yPercent: -100, duration });

		const trigger = ScrollTrigger.create({
			trigger: section,
			start: "top top",
			end: "bottom bottom",
			onEnter: show,
			onEnterBack: show,
			onLeave: hide,
			onLeaveBack: hide,
		});

		return () => trigger.kill();
	}, []);

	return (
		<section ref={sectionRef} className="things-i-did">
			<div
				ref={titleRef}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					textAlign: "center",
					zIndex: 2,
					transform: "translateY(-100%)",
				}}
			>
				<fp-typography>
					<h1 style={{ textAlign: "center" }}>Things I did 👨‍🔬</h1>
				</fp-typography>
			</div>

			<div
				data-snap-rows=""
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 1fr))",
					gridAutoRows: "100svh",
					alignItems: "center",
					gap: "0 6rem",
					width: "80vw",
					justifyItems: "center",
					zIndex: 1,
				}}
			>
				{sideProjects.map((sideProject, index) => (
					<SideProjectEntry key={sideProject.title} sideProject={sideProject} index={index} />
				))}
			</div>
		</section>
	);
}
