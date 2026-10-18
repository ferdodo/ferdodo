export const EASE = {
	out: "power3.out",
	inOut: "power2.inOut",
	spring: "back.out(1.7)",
};

export function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
