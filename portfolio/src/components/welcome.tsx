import React from "react";

export function Welcome() {
	return (
		<section
			style={{
				display: "grid",
				gridTemplateRows: "1fr 5rem",
			}}
		>
			<div
				style={{
					gridArea: "1 / 1 / 2 / 2",
					display: "grid",
					placeContent: "center",
				}}
			>
				<fp-typography
					style={{
						maxWidth: "min(50vw, 28rem)",
					}}
				>
					<h1>Thomas Riffard</h1>
					<h2 className="secondary">Typescript Dev</h2>

					<p>
						Welcome! I'm a full stack developer from Nantes that loves to
						experiment with the web.
					</p>
				</fp-typography>
			</div>

			<div
				style={{
					gridArea: " 1 / 2 / 2 / 3",
					display: "grid",
					placeContent: "center",
				}}
			>
				<img
					src="./avataaars.png"
					fetchPriority="high"
					alt="Thomas Riffard"
					style={{
						maxWidth: "30vw",
						maxHeight: "min(50vh, 40rem)",
						margin: "5vw",
						zIndex: 1,
					}}
				/>
			</div>

			<fp-scroll-indicator
				style={{
					gridArea: " 2 / 1 / 3 / 3",
					zIndex: 1,
				}}
			/>
		</section>
	);
}
