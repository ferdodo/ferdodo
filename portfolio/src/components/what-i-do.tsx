import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";

export function WhatIDo() {
	const { t } = useLanguage();
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
		<section id="what-i-do" ref={sectionRef} style={{ display: "grid", placeContent: "center" }}>
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
						<h1 data-reveal="">{t.whatIDo}</h1>

						<h2 className="secondary" data-reveal="">
							{t.solutionArchitecture}
						</h2>

						<ul>
							{t.whatIDoItems.map((item) => (
								<li key={item} data-reveal="">
									{item}
								</li>
							))}
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
