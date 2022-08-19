import { css, DefaultTheme, CSSProp } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

type ResponsiveTypes = keyof DefaultTheme['responsive'];

type TResponsiveObj = {
	[key: ResponsiveTypes]: (args: string | number) => CSSProp | CSSProp
}
export type ResponsiveTypePropCheck = (ResponsiveTypes | Partial<TResponsiveObj>)[];

export type ResponsiveProps = {
	wideDesktop?: ResponsiveTypePropCheck
	largeDesktop?: ResponsiveTypePropCheck
	standardDesktop?: ResponsiveTypePropCheck
	desktop?: ResponsiveTypePropCheck
	largeTablet?: ResponsiveTypePropCheck
	tablet?: ResponsiveTypePropCheck
	mobile?: ResponsiveTypePropCheck
	noHover?: ResponsiveTypePropCheck
};

export const responsive = css<ResponsiveProps>`
	${props => Object.keys(props.theme.media).reduce((acc, key) => {
		if (props[key]) {
			acc.push(css`
				${props.theme.media[key]} {
					${pickObjectProperties(props.theme.responsive, props[key])}
				}
			`);
		}
		return acc;
	}, [])}
`;
