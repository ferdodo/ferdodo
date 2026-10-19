import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/language";
import type { WorkStory } from "../types/work-story";
import { gsap } from "../utils/gsap";
import { EASE, prefersReducedMotion } from "../utils/motion";
import { WorkStoryPhotos } from "./work-story-photos";

export function WorkStoryEntry({ story, index }: { story: WorkStory; index: number }) {
	const { lang } = useLanguage();
	const articleRef = useRef<HTMLElement>(null);
	const flip = index % 2 === 1;

	useGSAP(
		() => {
			const article = articleRef.current;
			if (!article || prefersReducedMotion()) {
				return;
			}

			gsap.from(article.querySelectorAll(".work-story-text > fp-typography > *"), {
				y: 24,
				opacity: 0,
				duration: 0.8,
				ease: EASE.out,
				stagger: 0.08,
				scrollTrigger: { trigger: article, start: "top 80%", once: true },
			});
		},
		{ scope: articleRef },
	);

	const text = (
		<div className="work-story-text">
			<fp-typography>
				<p className="work-story-meta">
					{story.company} · {story.place[lang]}
				</p>
				<h2>{story.title[lang]}</h2>
				{story.paragraphs[lang].map((paragraph, paragraphIndex) => (
					<p key={paragraphIndex}>{paragraph}</p>
				))}
				<p className="work-story-tags">
					{story.tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</p>
			</fp-typography>
		</div>
	);

	return (
		<article
			ref={articleRef}
			className={`work-story${flip ? " work-story--flip" : ""}${story.photos.length > 0 ? "" : " work-story--text-only"}`}
		>
			{story.photos.length > 0 && <WorkStoryPhotos photos={story.photos} flip={flip} />}
			{text}
		</article>
	);
}
