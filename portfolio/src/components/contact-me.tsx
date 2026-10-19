import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";
import { SplitChars } from "./split-chars";

export function ContactMe() {
	const { t } = useLanguage();
	const sectionRef = useRef<HTMLElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

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

			gsap.from("[data-char]", {
				yPercent: 110,
				opacity: 0,
				duration: 0.8,
				ease: EASE.out,
				stagger: 0.05,
				scrollTrigger,
			});

			gsap.from(imageRef.current, {
				scale: 0.85,
				y: 40,
				opacity: 0,
				duration: 1,
				ease: EASE.out,
				delay: 0.3,
				scrollTrigger,
			});
		},
		{ scope: sectionRef },
	);

	const hoverImage = (scale: number) => {
		if (!prefersReducedMotion()) {
			gsap.to(imageRef.current, { scale, duration: 0.4, ease: EASE.out });
		}
	};

	return (
		<section ref={sectionRef} style={{ display: "grid", placeContent: "center" }}>
			<fp-typography style={{ textAlign: "center" }}>
				<h1>
					<SplitChars text={t.contactMe} />
				</h1>
				<img
					ref={imageRef}
					src="./contact.png"
					alt={t.contactMe}
					onPointerEnter={() => hoverImage(1.04)}
					onPointerLeave={() => hoverImage(1)}
				/>
			</fp-typography>
		</section>
	);
}
