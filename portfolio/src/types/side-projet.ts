import type { Localized } from "./localized";

export interface SideProject {
	title: string;
	tags: string[];
	illustration: string;
	description: Localized<string>;
	github: string;
	link: string;
}
