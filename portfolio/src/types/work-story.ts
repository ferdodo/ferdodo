import type { Localized } from "./localized";

export interface WorkStoryPhoto {
	src: string;
	alt: Localized<string>;
	caption?: Localized<string>;
}

export interface WorkStory {
	title: Localized<string>;
	company: string;
	place: Localized<string>;
	paragraphs: Localized<string[]>;
	tags: string[];
	photos: WorkStoryPhoto[];
}
