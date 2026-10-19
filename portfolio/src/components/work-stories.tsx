import React from "react";
import { useLanguage } from "../i18n/language";
import { getWorkStories } from "../utils/get-work-stories";
import { usePinnedTitle } from "../utils/use-pinned-title";
import { WorkStoryEntry } from "./work-story-entry";

export function WorkStories() {
	const { t } = useLanguage();
	const workStories = getWorkStories();
	const { sectionRef, titleRef } = usePinnedTitle();

	return (
		<section ref={sectionRef} className="work-stories">
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

			<div
				data-snap-rows=""
				style={{
					display: "grid",
					gridTemplateColumns: "minmax(0, 1fr)",
					gridAutoRows: "100svh",
					alignItems: "center",
					width: "80vw",
					justifyItems: "center",
					zIndex: 1,
				}}
			>
				{workStories.map((story, index) => (
					<WorkStoryEntry key={story.company} story={story} index={index} />
				))}
			</div>
		</section>
	);
}
