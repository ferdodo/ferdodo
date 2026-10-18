import { gsap, Observer } from "./gsap";

const SNAP_DURATION = 1.2;

function getSnapPoints() {
	const points: number[] = [];

	gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
		if (section.getClientRects().length === 0) {
			return;
		}

		const grid = section.querySelector<HTMLElement>("[data-snap-rows]");

		if (!grid) {
			points.push(section.getBoundingClientRect().top + window.scrollY);
			return;
		}

		const gridTop = grid.getBoundingClientRect().top + window.scrollY;
		const rowHeights = getComputedStyle(grid).gridTemplateRows.split(" ").map(parseFloat);

		let offset = 0;
		rowHeights.forEach((height) => {
			points.push(gridTop + offset);
			offset += height;
		});
	});

	return points;
}

function getNextSnapPoint(from: number, direction: number) {
	const threshold = window.innerHeight * 0.1;
	const ahead = getSnapPoints().filter((point) => (point - from) * direction > threshold);

	if (ahead.length === 0) {
		return from;
	}

	return ahead.reduce((best, point) =>
		Math.abs(point - from) < Math.abs(best - from) ? point : best,
	);
}

export function setupSectionSnap() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return;
	}

	const scroller = document.documentElement;
	let touchStepDone = false;

	window.addEventListener(
		"touchend",
		() => {
			touchStepDone = false;
		},
		{ passive: true },
	);

	Observer.create({
		type: "wheel,touch",
		preventDefault: true,
		onChangeY: (self: { deltaY: number; event: Event }) => {
			if (self.deltaY === 0) {
				return;
			}

			const isTouch = self.event.type.startsWith("touch");

			if (isTouch) {
				if (touchStepDone) {
					return;
				}

				touchStepDone = true;
			}

			// Un doigt qui monte produit un deltaY positif : la page doit descendre.
			const direction = isTouch ? -Math.sign(self.deltaY) : Math.sign(self.deltaY);
			const from = scroller.scrollTop;
			const target = getNextSnapPoint(from, direction);

			gsap.killTweensOf(scroller);

			gsap.to(scroller, {
				scrollTop: target,
				duration: SNAP_DURATION,
				ease: "power3.out",
			});
		},
	});
}
