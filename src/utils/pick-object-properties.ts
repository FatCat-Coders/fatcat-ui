import { CSSProp, FlattenSimpleInterpolation, css } from 'styled-components';

type StyleResult = FlattenSimpleInterpolation | CSSProp;
type StyleFunction = (args: unknown) => StyleResult;
type StyleValue = StyleResult | StyleFunction;

export type TProps = {
    [key: string]: StyleValue;
};

export default function pickObjectProperties(object: TProps, values): FlattenSimpleInterpolation[] {
	return values.reduce((acc, current) => {
		if (typeof current !== 'string') {
			Object.entries(current).forEach(([key, value]) => {
				const styleValue = object[key];
				if (styleValue) {
					if (typeof styleValue === 'function') {
						// If it's a function, call it with the provided value
						acc.push(styleValue(value));
					} else {
						// Otherwise, it's a static style value; just add it directly
						acc.push(styleValue);
					}
				}
			});
		} else {
			const styleValue = object[current];
			if (styleValue) {
				// If the referenced value is a function, this is an error case given current usage;
				// otherwise, push it directly.
				acc.push(styleValue);
			}
		}
		return acc;
	}, []);
}
