import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";

export function WhatIDo() {
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (prefersReducedMotion()) {
				return;
			}

			const scrollTrigger = {
				trigger: sectionRef.current,
				start: "top 70%",
				once: true,
			};

			gsap.from("[data-reveal]", {
				y: 40,
				opacity: 0,
				duration: 0.8,
				ease: EASE.out,
				stagger: 0.08,
				scrollTrigger,
			});

			gsap.from("[data-beaker]", {
				scale: 0.8,
				opacity: 0,
				duration: 1.2,
				ease: EASE.spring,
				scrollTrigger,
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section ref={sectionRef} style={{ display: "grid", placeContent: "center" }}>
			<div
				style={{
					display: "grid",
					minWidth: "65vw",
					gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
				}}
			>
				<div
					style={{
						display: "grid",
						placeContent: "center",
						height: "50vh",
						minHeight: "33rem",
					}}
				>
					<fp-typography>
						<h1 data-reveal="">What I Do ✅</h1>

						<h2 className="secondary" data-reveal="">
							Solution architecture
						</h2>

						<ul>
							<li data-reveal="">🌱 Prototyping and Proof of Concepts</li>
							<li data-reveal="">🕹️ Complex and reactive feature design</li>
							<li data-reveal="">📈 Scaling up full stack applications</li>
							<li data-reveal="">🔀 Technological migration strategies</li>
							<li data-reveal="">⛁ Data modelisation</li>
							<li data-reveal="">🧑🏻‍💻 UI and frontend restructuring </li>
						</ul>
					</fp-typography>
				</div>

				<div
					className="what-i-do-beaker"
					style={{
						placeContent: "center",
						height: "50vh",
						overflow: "visible",
					}}
				>
					<div style={{ width: "30rem", height: "30rem", overflow: "visible" }}>
						<div
							data-beaker=""
							style={{ position: "relative", top: "-63.5rem", left: "-8rem" }}
						>
							<fp-beaker></fp-beaker>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
