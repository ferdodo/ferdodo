import React from "react";
import type { SideProject } from "../../types/side-projet";

export function SideProjectEntry(sideProject: SideProject) {
	return (
		<fp-side-project style={{ scrollSnapAlign: "start", zIndex: "1" }}>
			<img
				slot="illustration"
				loading="lazy"
				src={sideProject.illustration}
				alt={sideProject.title}
			/>
			<fp-typography slot="title">{sideProject.title}</fp-typography>
			<fp-typography slot="description">
				{sideProject.description}
			</fp-typography>
			{sideProject.tags.map((tag, i) => (
				<span slot={`tag-${i + 1}`}>{tag}</span>
			))}
			<a slot="github" href={sideProject.github}>
				GitHub
			</a>
			<a slot="link" href={sideProject.link}>
				Link
			</a>
		</fp-side-project>
	);
}
