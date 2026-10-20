import { gsap, Observer } from "./gsap";

const SNAP_DURATION = 1.2;
const TOUCH_THRESHOLD = 30;

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

// Un cran de snap dans la direction donnée (positive = descendre).
function snapBy(direction: number) {
	const scroller = document.documentElement;
	const from = scroller.scrollTop;
	const target = getNextSnapPoint(from, direction);

	gsap.killTweensOf(scroller);

	gsap.to(scroller, {
		scrollTop: target,
		duration: SNAP_DURATION,
		ease: "power3.out",
	});
}

// Le tactile est géré par nos propres écouteurs : un geste déclenche au plus un cran.
function setupTouchSnap() {
	let startY = 0;
	let triggered = false;

	window.addEventListener(
		"touchstart",
		(event) => {
			startY = event.touches[0].clientY;
			triggered = false;
		},
		{ passive: true },
	);

	window.addEventListener(
		"touchmove",
		(event) => {
			// Un doigt qui monte donne un deltaY positif : la page doit descendre.
			const deltaY = startY - event.touches[0].clientY;

			if (event.cancelable) {
				event.preventDefault();
			}

			if (!triggered && Math.abs(deltaY) > TOUCH_THRESHOLD) {
				triggered = true;
				snapBy(Math.sign(deltaY));
			}
		},
		{ passive: false },
	);

	["touchend", "touchcancel"].forEach((type) => {
		window.addEventListener(
			type,
			() => {
				triggered = false;
			},
			{ passive: true },
		);
	});
}

export function setupSectionSnap() {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return;
	}

	// Sans cela, le navigateur défile lui-même au doigt et nos écouteurs ne reçoivent plus le geste.
	document.documentElement.style.touchAction = "none";
	document.body.style.touchAction = "none";

	setupTouchSnap();

	Observer.create({
		type: "wheel",
		preventDefault: true,
		onChangeY: (self: { deltaY: number }) => {
			if (self.deltaY === 0) {
				return;
			}

			snapBy(Math.sign(self.deltaY));
		},
	});
}
