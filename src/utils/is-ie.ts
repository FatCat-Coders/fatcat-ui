export function isIE() {
	if (typeof window === 'undefined') return null;
	return window && /MSIE|Trident/.test(window.navigator.userAgent);
}
