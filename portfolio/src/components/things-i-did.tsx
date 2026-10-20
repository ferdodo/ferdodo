import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/language";
import { getSideProjets } from "../utils/get-side-projetcts";
import { useFitsInWindow } from "../utils/use-fits-in-window";
import { usePinnedTitle } from "../utils/use-pinned-title";
import { SideProjectEntry } from "./side-project-entry";

const MAX_ROWS = 3;

export function ThingsIDid() {
	const { t } = useLanguage();
	const sideProjects = getSideProjets();
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = usePinnedTitle(sectionRef, sectionRef);
	const probeRef = useRef<HTMLDivElement>(null);
	const fits = useFitsInWindow(probeRef, sideProjects.length, MAX_ROWS);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// Un clic ou un toucher ailleurs que sur une carte, ou la touche Échap, referme la carte agrandie.
	useEffect(() => {
		if (activeIndex === null) {
			return;
		}

		const closeOnOutsidePointer = (event: PointerEvent) => {
			const target = event.target as Element | null;
			if (!target?.closest("[data-side-project]")) {
				setActiveIndex(null);
			}
		};

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				(document.activeElement as HTMLElement | null)?.blur();
				setActiveIndex(null);
			}
		};

		document.addEventListener("pointerdown", closeOnOutsidePointer);
		document.addEventListener("keydown", closeOnEscape);
		return () => {
			document.removeEventListener("pointerdown", closeOnOutsidePointer);
			document.removeEventListener("keydown", closeOnEscape);
		};
	}, [activeIndex]);

	return (
		<>
			<div ref={probeRef} className="side-projects-grid side-projects-probe" aria-hidden="true" />

			<section ref={sectionRef} className="things-i-did" data-fits={fits}>
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

				<div className="side-projects">
					<div className="side-projects-grid">
						{sideProjects.map((sideProject, index) => (
							<SideProjectEntry
								key={sideProject.title}
								sideProject={sideProject}
								active={activeIndex === index}
								onActivate={() => setActiveIndex(index)}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
