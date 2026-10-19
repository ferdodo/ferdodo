import React, { createContext, useContext, useEffect, useState } from "react";
import { ScrollTrigger } from "../utils/gsap";
import { translations, type Language, type Translations } from "./translations";

const STORAGE_KEY = "lang";
const DEFAULT_LANGUAGE: Language = "en";

interface LanguageContextValue {
	lang: Language;
	setLang: (lang: Language) => void;
	t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
	lang: DEFAULT_LANGUAGE,
	setLang: () => {},
	t: translations[DEFAULT_LANGUAGE],
});

function readStoredLanguage(): Language {
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		return stored === "en" || stored === "fr" ? stored : DEFAULT_LANGUAGE;
	} catch {
		return DEFAULT_LANGUAGE;
	}
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLangState] = useState<Language>(readStoredLanguage);

	useEffect(() => {
		document.documentElement.lang = lang;
		document.title = translations[lang].documentTitle;
		// Les textes changent de hauteur : les points de déclenchement doivent être recalculés.
		ScrollTrigger.refresh();
	}, [lang]);

	const setLang = (next: Language) => {
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			// Stockage bloqué : la langue reste active pour cette visite seulement.
		}
		setLangState(next);
	};

	return (
		<LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	return useContext(LanguageContext);
}
