import React from "react";
import { getSideProjets } from "../utils/get-side-projetcts";
import { SideProjectEntry } from "./side-project-entry";

export function ThingsIDid() {
	const sideProjects = getSideProjets();

	return (
		<section>
			<fp-typography>
				<h1 style={{ textAlign: "center" }}>Things I did 👨‍🔬</h1>
			</fp-typography>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 1fr))",
					gap: "2rem",
					width: "90vw",
					maxHeight: "35rem",
					overflowY: "scroll",
					scrollSnapType: "y mandatory",
					justifyItems: "center",
				}}
			>
				{sideProjects.map(SideProjectEntry)}
			</div>
		</section>
	);
}
