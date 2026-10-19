import React from "react";
import { useLanguage } from "../i18n/language";
import { getSideProjets } from "../utils/get-side-projetcts";
import { usePinnedTitle } from "../utils/use-pinned-title";
import { SideProjectEntry } from "./side-project-entry";

export function ThingsIDid() {
	const { t } = useLanguage();
	const sideProjects = getSideProjets();
	const { sectionRef, titleRef } = usePinnedTitle();

	return (
		<section ref={sectionRef} className="things-i-did">
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
					<h1 style={{ textAlign: "center" }}>{t.thingsIDid}</h1>
				</fp-typography>
			</div>

			<div
				data-snap-rows=""
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 1fr))",
					gridAutoRows: "100svh",
					alignItems: "center",
					gap: "0 6rem",
					width: "80vw",
					justifyItems: "center",
					zIndex: 1,
				}}
			>
				{sideProjects.map((sideProject, index) => (
					<SideProjectEntry key={sideProject.title} sideProject={sideProject} index={index} />
				))}
			</div>
		</section>
	);
}
