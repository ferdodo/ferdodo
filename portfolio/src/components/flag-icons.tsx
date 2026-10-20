import React from "react";

const FLAG_STYLE: React.CSSProperties = { height: "1.1rem", width: "auto", display: "block" };

export function FlagGB() {
	return (
		<svg viewBox="0 0 60 30" style={FLAG_STYLE} aria-hidden="true" focusable="false">
			<rect width="60" height="30" fill="#012169" />
			<path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
			<path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
			<path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
			<path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
		</svg>
	);
}

export function FlagFR() {
	return (
		<svg viewBox="0 0 3 2" style={FLAG_STYLE} aria-hidden="true" focusable="false">
			<rect width="1" height="2" fill="#0055A4" />
			<rect x="1" width="1" height="2" fill="#FFFFFF" />
			<rect x="2" width="1" height="2" fill="#EF4135" />
		</svg>
	);
}
