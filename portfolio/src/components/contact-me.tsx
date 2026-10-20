import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";
import { SplitChars } from "./split-chars";

export function ContactMe() {
	const { t } = useLanguage();
	const sectionRef = useRef<HTMLElement>(null);
	const photoRef = useRef<HTMLImageElement>(null);
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

			gsap.from([photoRef.current, imageRef.current], {
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

	const hoverImage = (image: HTMLImageElement | null, scale: number) => {
		if (!prefersReducedMotion()) {
			gsap.to(image, { scale, duration: 0.4, ease: EASE.out });
		}
	};

	return (
		<section ref={sectionRef} style={{ display: "grid", placeContent: "center" }}>
			<div className="contact-row">
				<fp-typography style={{ textAlign: "center" }}>
					<h1>
						<SplitChars text={t.contactMe} />
					</h1>
					<img
						ref={imageRef}
						src="./contact.png"
						alt={t.contactMe}
						onPointerEnter={() => hoverImage(imageRef.current, 1.04)}
						onPointerLeave={() => hoverImage(imageRef.current, 1)}
					/>
				</fp-typography>
				<img
					ref={photoRef}
					className="contact-photo"
					src="./photo.jpg"
					alt="Thomas Riffard"
					onPointerEnter={() => hoverImage(photoRef.current, 1.04)}
					onPointerLeave={() => hoverImage(photoRef.current, 1)}
				/>
			</div>
		</section>
	);
}
