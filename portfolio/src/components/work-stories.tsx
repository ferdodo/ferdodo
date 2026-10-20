import React, { useRef } from "react";
import { useLanguage } from "../i18n/language";
import { getWorkStories } from "../utils/get-work-stories";
import { usePinnedTitle } from "../utils/use-pinned-title";
import { WorkStoryEntry } from "./work-story-entry";

export function WorkStories() {
	const { t } = useLanguage();
	const workStories = getWorkStories();
	const firstStoryRef = useRef<HTMLElement>(null);
	const lastStoryRef = useRef<HTMLElement>(null);
	const titleRef = usePinnedTitle(firstStoryRef, lastStoryRef);
	const lastIndex = workStories.length - 1;

	return (
		<>
			<div
				ref={titleRef}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					textAlign: "center",
					zIndex: 0,
				}}
			>
				<fp-typography>
					<h1 style={{ textAlign: "center" }}>{t.workStories}</h1>
				</fp-typography>
			</div>

			{workStories.map((story, index) => (
				<section
					key={story.company}
					ref={index === 0 ? firstStoryRef : index === lastIndex ? lastStoryRef : undefined}
					className="work-story-section"
				>
					<WorkStoryEntry story={story} index={index} />
				</section>
			))}
		</>
	);
}
