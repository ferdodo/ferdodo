import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import { translateTag } from "../i18n/translations";
import type { SideProject } from "../types/side-projet";
import { gsap, ScrollTrigger } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";

const AMPLITUDE = 100; // en svh, décalage maximal quand la ligne est hors centre
const REST_ZONE = 0.15; // largeur maximale de la zone de repos, pour la dernière colonne (0 à 0.5)

// progress : position de la ligne dans l'écran (0.5 = centrée)
// deadDown / deadUp : largeur de la zone de repos d'un côté ou de l'autre du centre, propre à la colonne
function offsetFor(progress: number, deadDown: number, deadUp: number) {
	const x = 0.5 - progress;
	const dead = x > 0 ? deadDown : deadUp;
	const magnitude = Math.min(
		1,
		Math.max(0, (Math.abs(x) - dead) / (0.5 - dead)),
	);

	return Math.sign(x) * magnitude * AMPLITUDE * window.innerHeight / 100;
}

export function SideProjectEntry({
	sideProject,
	index,
}: {
	sideProject: SideProject;
	index: number;
}) {
	const { lang, t } = useLanguage();
	const outerRef = useRef<HTMLDivElement>(null);
	const offsetRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const card = cardRef.current;
			if (!card || prefersReducedMotion()) {
				return;
			}

			const scrollTrigger = { trigger: card, start: "top 80%", once: true };
			const image = card.querySelector('[slot="illustration"]');
			const tags = card.querySelectorAll('[slot^="tag-"]');

			gsap.from(card, {
				y: 80,
				rotateX: 12,
				duration: 1,
				ease: EASE.out,
				scrollTrigger,
			});

			gsap.from(image, {
				scale: 1.12,
				duration: 1.2,
				ease: EASE.out,
				scrollTrigger,
			});

			gsap.from(tags, {
				y: 12,
				duration: 0.5,
				stagger: 0.06,
				delay: 0.3,
				scrollTrigger,
			});
		},
		{ scope: cardRef },
	);

	useGSAP(
		() => {
			const outer = outerRef.current;
			const offset = offsetRef.current;
			if (!outer || !offset || prefersReducedMotion()) {
				return;
			}

			const setY = gsap.quickSetter(offset, "y", "px");
			let deadDown = 0;
			let deadUp = 0;

			ScrollTrigger.create({
				trigger: outer,
				start: "top bottom",
				end: "bottom top",
				onRefresh: (self) => {
					const columns = getComputedStyle(outer.parentElement!)
						.gridTemplateColumns.split(" ").length;
					const column = index % columns;
					const ratio = columns > 1 ? column / (columns - 1) : 0;

					deadDown = columns > 1 ? REST_ZONE * (1 - ratio) : 0;
					deadUp = columns > 1 ? REST_ZONE * ratio : 0;

					setY(offsetFor(self.progress, deadDown, deadUp));
				},
				onUpdate: (self) => {
					setY(offsetFor(self.progress, deadDown, deadUp));
				},
			});
		},
		{ scope: outerRef },
	);

	return (
		<div ref={outerRef}>
			<div ref={offsetRef}>
				<fp-side-project ref={cardRef} style={{ zIndex: "1" }}>
					<img
						slot="illustration"
						src={sideProject.illustration}
						alt={sideProject.title}
					/>
					<fp-typography slot="title">{sideProject.title}</fp-typography>
					<fp-typography slot="description">
						{sideProject.description[lang]}
					</fp-typography>
					{sideProject.tags.map((tag, i) => (
						<span key={tag} slot={`tag-${i + 1}`}>
							{translateTag(tag, lang)}
						</span>
					))}
					<a slot="github" href={sideProject.github}>
						{t.github}
					</a>
					<a slot="link" href={sideProject.link}>
						{t.link}
					</a>
				</fp-side-project>
			</div>
		</div>
	);
}
