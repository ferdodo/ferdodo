import { defineBackground } from "../components/fp-background";
import { defineScrollIndicator } from "../components/fp-scroll-indicator";
import { defineBeaker } from "../components/fp-beaker";
import { defineTypography } from "../components/fp-typography";
import { loadFont } from "../utils/load-font";
import { defineSideProjet } from "../components/fp-side-project";

export async function loadDesignSystem() {
	await loadFont("QuicksandBook", "./Quicksand_Book.otf");
	defineBackground();
	defineTypography();
	defineScrollIndicator();
	defineBeaker();
	defineSideProjet();
}
