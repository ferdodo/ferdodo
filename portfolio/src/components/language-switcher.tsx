import React from "react";
import { useLanguage } from "../i18n/language";
import type { Language } from "../i18n/translations";

const LANGUAGES: { code: Language; label: string }[] = [
	{ code: "en", label: "EN" },
	{ code: "fr", label: "FR" },
];

export function LanguageSwitcher() {
	const { lang, setLang, t } = useLanguage();

	return (
		<div
			role="group"
			aria-label={t.languageLabel}
			style={{
				position: "fixed",
				top: "1rem",
				right: "1rem",
				zIndex: 10,
				display: "flex",
				gap: "0.25rem",
				padding: "0.25rem",
				borderRadius: "999px",
				backgroundColor: "var(--ferdodo-portfolio-color-lighter)",
			}}
		>
			{LANGUAGES.map(({ code, label }) => {
				const active = lang === code;
				return (
					<button
						key={code}
						type="button"
						aria-pressed={active}
						onClick={() => setLang(code)}
						style={{
							border: "none",
							borderRadius: "999px",
							padding: "0.3rem 0.7rem",
							cursor: "pointer",
							fontWeight: active ? 700 : 400,
							backgroundColor: active ? "var(--ferdodo-portfolio-color-primary)" : "transparent",
							color: active
								? "var(--ferdodo-portfolio-color-background)"
								: "var(--ferdodo-portfolio-color-text-primary)",
						}}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
}
