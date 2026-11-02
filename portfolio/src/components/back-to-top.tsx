import React, { useEffect, useState } from "react";
import { useLanguage } from "../i18n/language";

// Apparaît une fois l'écran d'accueil dépassé.
export function BackToTop() {
	const { t } = useLanguage();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const update = () => setVisible(window.scrollY > window.innerHeight);

		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, []);

	return (
		<a href="#welcome" className="back-to-top" aria-label={t.backToTop} hidden={!visible}>
			<span aria-hidden="true">↑</span>
		</a>
	);
}
