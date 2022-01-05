// check if object is plain object
export function isPlainObject(item: unknown): item is Record<keyof any, unknown> {
	return item !== null && typeof item === 'object' && item.constructor === Object;
}

// merge taget obect with source object
export function deepmerge<T>(
	target: T,
	source: unknown,
	clone = true,
): T {
	const output = clone ? { ...target } : target;

	if (isPlainObject(target) && isPlainObject(source)) {
		Object.keys(source).forEach((key) => {
			// Avoid prototype pollution
			if (key === '__proto__') {
				return;
			}

			if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
				// Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
				(output as Record<keyof any, unknown>)[key] = deepmerge(target[key], source[key], clone);
			} else {
				(output as Record<keyof any, unknown>)[key] = source[key];
			}
		});
	}

	return output;
}

// check if obect is empty
export const isObjectEmpty = (obj:any): boolean => {
	for (const prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return false;
		}
	}

	return JSON.stringify(obj) === JSON.stringify({});
};
