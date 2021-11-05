import { PropertiesHyphen } from 'csstype';

export function optional(cssProp: keyof PropertiesHyphen, value?: any) {
	if (value === null) {
		return '';
	}

	return `${cssProp}: ${value}`;
}
