import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import { translateTag } from "../i18n/translations";
import type { SideProject } from "../types/side-projet";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";

export function SideProjectEntry({
	sideProject,
	active,
	onActivate,
}: {
	sideProject: SideProject;
	active: boolean;
	onActivate: () => void;
}) {
	const { lang, t } = useLanguage();
	const outerRef = useRef<HTMLDivElement>(null);
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

	// Le premier clic agrandit et focalise la carte sans ouvrir son lien ; le second clic ouvre le lien.
	const handleClickCapture = (event: React.MouseEvent) => {
		if (active) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();
		onActivate();
		outerRef.current?.focus({ preventScroll: true });
	};

	return (
		<div
			ref={outerRef}
			className="side-project-slot"
			data-side-project=""
			data-active={active ? "" : undefined}
			tabIndex={-1}
			onClickCapture={handleClickCapture}
		>
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
	);
}
