import React from "react";

export function SplitChars({ text }: { text: string }) {
	return (
		<span aria-label={text} style={{ display: "inline-block" }}>
			{Array.from(text).map((char, i) => (
				<span
					key={i}
					aria-hidden="true"
					data-char=""
					style={{ display: "inline-block", whiteSpace: "pre" }}
				>
					{char}
				</span>
			))}
		</span>
	);
}
