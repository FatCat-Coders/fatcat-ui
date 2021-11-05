// @TODO Add typechecks

export default function pickObjectProperties(object: Record<string, any>, values) {
	return values.map(value => {
		if (typeof value !== 'string') {
			return object[Object.keys(value)[0]](Object.values(value)[0]);
		}

		return object[value];
	});
}
