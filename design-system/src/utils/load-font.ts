export async function loadFont(
	fontFamily: string,
	fontUrl: string,
): Promise<void> {
	const fontFace = new FontFace(fontFamily, `url(${fontUrl})`);
	await fontFace.load();
	document.fonts.add(fontFace);
}
