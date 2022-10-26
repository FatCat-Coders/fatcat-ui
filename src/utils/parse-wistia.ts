export function parseWistia(url: string): string {
	return url.split('/medias/')[1];
}
