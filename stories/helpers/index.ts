// format object keys for storbook display
export const formatObjectKeys = (obj) => {
	return Object.keys(obj).map(i => `\`${i}\``).join(', ');
};
// format Sizing object keys for storbook display
export const formatSizingObjectKeys = (obj) => {
	return Object.keys(obj).map(i => `\`${i.substring(1)}\``).join(', ');
};
