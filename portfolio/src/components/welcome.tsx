import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";
import { SplitChars } from "./split-chars";

export function Welcome() {
	const { t } = useLanguage();
	const sectionRef = useRef<HTMLElement>(null);
	const avatarWrapperRef = useRef<HTMLDivElement>(null);
	const avatarRef = useRef<HTMLImageElement>(null);

	useGSAP(
		() => {
			const hideScrollIndicator = () => {
				window.removeEventListener("wheel", hideScrollIndicator);
				window.removeEventListener("touchstart", hideScrollIndicator);
				gsap.killTweensOf("fp-scroll-indicator");
				gsap.to("fp-scroll-indicator", { opacity: 0, duration: 0.5 });
			};

			window.addEventListener("wheel", hideScrollIndicator, { passive: true });
			window.addEventListener("touchstart", hideScrollIndicator, { passive: true });

			if (prefersReducedMotion()) {
				return;
			}

			const intro = gsap.timeline({ defaults: { ease: EASE.out } });

			intro
				.from("[data-char]", {
					yPercent: 110,
					opacity: 0,
					rotate: 6,
					duration: 0.9,
					stagger: 0.04,
				})
				.from(
					"[data-intro]",
					{ y: 30, opacity: 0, duration: 0.8, stagger: 0.12 },
					"-=0.5",
				)
				.from(
					avatarRef.current,
					{ scale: 0.6, rotate: -8, opacity: 0, duration: 1.1, ease: EASE.spring },
					0.2,
				);

			gsap.from("fp-scroll-indicator", { opacity: 0, duration: 1, delay: 1.5 });

			gsap.to(avatarWrapperRef.current, {
				yPercent: -20,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom top",
					scrub: 0.6,
				},
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			style={{
				display: "grid",
				gridTemplateRows: "1fr 5rem",
			}}
		>
			<div
				style={{
					gridArea: "1 / 1 / 2 / 2",
					display: "grid",
					placeContent: "center",
				}}
			>
				<fp-typography
					style={{
						maxWidth: "min(50vw, 28rem)",
					}}
				>
					<h1>
						<SplitChars text="Thomas Riffard" />
					</h1>
					<h2 className="secondary" data-intro="">
						{t.typescriptDev}
					</h2>

					<p data-intro="">{t.welcome}</p>
				</fp-typography>
			</div>

			<div
				ref={avatarWrapperRef}
				style={{
					gridArea: " 1 / 2 / 2 / 3",
					display: "grid",
					placeContent: "center",
				}}
			>
				<img
					ref={avatarRef}
					src="./avataaars.png"
					fetchPriority="high"
					alt="Thomas Riffard"
					style={{
						maxWidth: "30vw",
						maxHeight: "min(50vh, 40rem)",
						margin: "5vw",
						zIndex: 1,
					}}
				/>
			</div>

			<fp-scroll-indicator
				style={{
					gridArea: " 2 / 1 / 3 / 3",
					zIndex: 1,
				}}
			/>
		</section>
	);
}
