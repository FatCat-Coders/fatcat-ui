import { css, DefaultTheme } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

export type HoverTypes = (keyof DefaultTheme['hover'] | Partial<Record<keyof DefaultTheme['hover'], any>>)[];

export type HoverProps = {
	hover?: HoverTypes
};

export const hover = css<HoverProps>`
	${props => props.hover && css`
		&:hover {
			cursor: pointer;
			${pickObjectProperties(props.theme.hover, props.hover)}
		}
	`}
`;
