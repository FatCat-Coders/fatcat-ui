import { css } from 'styled-components';
import { Properties } from 'csstype';

import { MEDIA, MediaDefinition } from '../../definitions';

export type VisibilityProps = {
	show?: MediaDefinition,
	hide?: MediaDefinition,
	initialDisplay?: Properties['display']
};

export const visibility = css<VisibilityProps>`
	${props => props.show && css`
		display: none;
		${MEDIA[props.show]} {
			display: ${props.initialDisplay};
		}
	`}
	${props => props.hide && css`
		${MEDIA[props.hide]} {
			display: none;
		}
	`}
`;
