import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import type { WorkStoryPhoto } from "../types/work-story";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";

interface PhotoPlacement {
	left: number; // en % du conteneur
	top: number; // en % du conteneur ; la hauteur d'une photo vaut sa largeur (ratio 4/3 du conteneur)
	width: number; // en % du conteneur
	rotate: number; // en degrés
}

// Placements « photos souvenirs » : top + width ≤ 100 pour rester dans le conteneur.
const PLACEMENTS: Record<number, PhotoPlacement[]> = {
	1: [{ left: 8, top: 4, width: 84, rotate: -3 }],
	2: [
		{ left: 0, top: 2, width: 56, rotate: -5 },
		{ left: 42, top: 40, width: 56, rotate: 4 },
	],
	3: [
		{ left: 0, top: 0, width: 52, rotate: -6 },
		{ left: 46, top: 8, width: 50, rotate: 5 },
		{ left: 20, top: 48, width: 48, rotate: -2 },
	],
	5: [
		{ left: 0, top: 0, width: 46, rotate: -6 },
		{ left: 52, top: 2, width: 46, rotate: 4 },
		{ left: 4, top: 36, width: 40, rotate: 3 },
		{ left: 54, top: 46, width: 40, rotate: -5 },
		{ left: 30, top: 22, width: 36, rotate: 2 },
	],
};

// Un article sur deux est inversé : les placements sont alors mis en miroir.
function placementFor(index: number, count: number, flip: boolean): PhotoPlacement {
	const placements = PLACEMENTS[count] ?? PLACEMENTS[5];
	const base = placements[index % placements.length];
	if (!flip) {
		return base;
	}
	return { ...base, left: 100 - base.left - base.width, rotate: -base.rotate };
}

export function WorkStoryPhotos({ photos, flip }: { photos: WorkStoryPhoto[]; flip: boolean }) {
	const { lang } = useLanguage();
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const container = containerRef.current;
			if (!container || prefersReducedMotion()) {
				return;
			}

			const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-photo]"));
			const scrollTrigger = { trigger: container, start: "top 80%", once: true };

			cards.forEach((card, index) => {
				gsap.from(card, {
					x: index % 2 === 0 ? -80 : 80,
					opacity: 0,
					duration: 1,
					delay: index * 0.15,
					ease: EASE.out,
					scrollTrigger,
				});

				gsap.to(card, {
					y: (index % 3 - 1) * 40,
					ease: "none",
					scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: true },
				});
			});
		},
		{ scope: containerRef },
	);

	return (
		<div ref={containerRef} className="work-story-photos">
			{photos.map((photo, index) => {
				const placement = placementFor(index, photos.length, flip);
				const credit = photo.credit?.[lang];
				return (
					<div
						key={photo.src}
						data-photo=""
						className="work-story-photo"
						style={
							{
								"--x": `${placement.left}%`,
								"--y": `${placement.top}%`,
								"--w": `${placement.width}%`,
								"--r": `${placement.rotate}deg`,
							} as React.CSSProperties
						}
					>
						<figure className="work-story-photo-frame">
							<img src={photo.src} alt={photo.alt[lang]} />
							{credit && <figcaption>{credit}</figcaption>}
						</figure>
					</div>
				);
			})}
		</div>
	);
}
