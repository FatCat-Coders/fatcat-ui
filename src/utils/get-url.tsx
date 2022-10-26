export function getUrl() {
	if (typeof window !== 'undefined') {
		return window.location.href;
	}
	return '';
}
