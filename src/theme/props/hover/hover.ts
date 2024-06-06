// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck TODO: remove this after fixing types

import { css, DefaultTheme, CSSProp } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

type THoverObj = {
	[key in keyof DefaultTheme['hover']]: ((args: string | number) => CSSProp) | CSSProp
}

export type HoverTypes = (keyof DefaultTheme['hover'] | Partial<THoverObj>)[];

export type HoverProps = {
	hover?: HoverTypes
};

export const hover = css<HoverProps>`
	${props => props.hover && css`
		&:hover {
			${pickObjectProperties(props.theme.hover, props.hover)}
		}
	`}
`;
