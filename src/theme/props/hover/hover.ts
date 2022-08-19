import { css, DefaultTheme, CSSProp } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

type THoverObj = {
	[key: keyof DefaultTheme['hover']]: (args: string | number) => CSSProp | CSSProp
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
