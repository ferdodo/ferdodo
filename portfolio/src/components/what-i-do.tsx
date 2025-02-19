import React from "react";

export function WhatIDo() {
	return (
		<section style={{ display: "grid", placeContent: "center" }}>
			<div
				style={{
					display: "grid",
					minWidth: "65vw",
					gridTemplateColumns: "repeat(auto-fit, minmax(23rem, 1fr))",
				}}
			>
				<div
					style={{
						display: "grid",
						placeContent: "center",
						height: "50vh",
						minHeight: "33rem",
					}}
				>
					<fp-typography>
						<h1>What I Do ✅</h1>

						<h2 className="secondary">Solution architecture</h2>

						<ul>
							<li>🌱 Prototyping and Proof of Concepts</li>
							<li>🕹️ Complex and reactive feature design</li>
							<li>📈 Scaling up full stack applications</li>
							<li>🔀 Technological migration strategies</li>
							<li>⛁ Data modelisation</li>
							<li>🧑🏻‍💻 UI and frontend restructuring </li>
						</ul>
					</fp-typography>
				</div>

				<div
					style={{
						display: "grid",
						placeContent: "center",
						height: "50vh",
						overflow: "visible",
					}}
				>
					<div style={{ width: "30rem", height: "30rem", overflow: "visible" }}>
						<div
							style={{ position: "relative", top: "-63.5rem", left: "-8rem" }}
						>
							<fp-beaker></fp-beaker>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
