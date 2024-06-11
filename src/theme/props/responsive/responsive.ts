import {
	css, DefaultTheme, CSSProp, FlattenSimpleInterpolation,
} from 'styled-components';

import { SideSpacingValue } from '../space/space';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

type TResponsiveObj = {
    [key in ResponsiveTypes]: ResponsiveStyleValue;
};

export type ResponsiveTypes = keyof DefaultTheme['responsive'];

type ResponsiveStyleValue = CSSProp | FlattenSimpleInterpolation | ((args: string | number | SideSpacingValue[]) => CSSProp | FlattenSimpleInterpolation);

export type ResponsiveTypePropCheck = (ResponsiveTypes | Partial<TResponsiveObj>)[]| ResponsiveTypes | Partial<TResponsiveObj>;

export type ResponsiveProps = {
    [key in keyof DefaultTheme['media']]?: ResponsiveTypePropCheck;
};

export const responsive = css<ResponsiveProps>`
	${props => Object.keys(props.theme.media).reduce((acc, key) => {
		if (props[key as keyof ResponsiveProps]) {
			acc.push(css`
					${props.theme.media[key as keyof ResponsiveProps]} {
						${pickObjectProperties(props.theme.responsive, props[key as keyof ResponsiveProps])}
					}
				`);
		}
		return acc;
	}, [] as CSSProp[])}
`;

export const responsiveWithProps = (includedKeys: ResponsiveTypes[], excluded = false) => css<ResponsiveProps>`
	${(props) => {
		let newProps = {} as {[k in ResponsiveTypes]: any};
		if (!excluded) {
			includedKeys.forEach((key) => {
				newProps[key] = props.theme.responsive[key];
			});
		} else {
			newProps = { ...props.theme.responsive };
			includedKeys.forEach((key) => {
				delete newProps[key];
			});
		}

		return Object.keys(props.theme.media).reduce((acc, key) => {
			if (props[key as keyof ResponsiveProps]) {
				acc.push(css`
				${props.theme.media[key as keyof ResponsiveProps]} {
					${pickObjectProperties(newProps, props[key as keyof ResponsiveProps])}
				}
			`);
			}
			return acc;
		}, [] as CSSProp[]);
	}}
`;
