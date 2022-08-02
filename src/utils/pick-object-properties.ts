import { CSSProp } from 'styled-components';

export type TProps = {
	[key: string]: (args: unknown) => CSSProp | CSSProp
}

export default function pickObjectProperties(object: TProps, values) {
	return values.reduce((acc, current) => {
		if (typeof current !== 'string') {
			Object.entries(current).forEach((entry) => {
				const [key, value] = entry;
				if (object[key]) {
					acc.push(object[key](value));
				}
			});
		} else {
			acc.push(object[current]);
		}
		return acc;
	}, []);
}
