import { type RefObject, useLayoutEffect, useState } from "react";

// Indique si les cartes tiennent en maxRows lignes et en hauteur dans la fenêtre.
// Mesure un élément témoin invisible, car la section elle-même peut être masquée (display: none).
export function useFitsInWindow(probeRef: RefObject<HTMLElement | null>, itemCount: number, maxRows: number) {
	const [fits, setFits] = useState(true);

	useLayoutEffect(() => {
		const probe = probeRef.current;
		if (!probe) {
			return;
		}

		const measure = () => {
			const style = getComputedStyle(probe);
			const columns = style.gridTemplateColumns.split(" ").length;
			const rowHeight = parseFloat(style.gridAutoRows);
			const rows = Math.ceil(itemCount / columns);

			setFits(rows <= maxRows && rows * rowHeight <= window.innerHeight);
		};

		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [probeRef, itemCount, maxRows]);

	return fits;
}
