import { css, DefaultTheme } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

import { HOVER_BEHAVIORS } from '../../styles/hover';

type HoverTypes = keyof DefaultTheme['hover'];

export type HoverProps = {
	hover?: (HoverTypes | Partial<Record<HoverTypes, any>>)[]
};

export const hover = css<HoverProps>`
	${props => props.hover && css`
		&:hover {
			cursor: pointer;
			${pickObjectProperties(HOVER_BEHAVIORS, props.hover)}
		}
	`}
`;
