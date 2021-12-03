import { css } from 'styled-components';
import { Properties } from 'csstype';

import { MEDIA, MediaDefinition } from '../../definitions';

export type VisibilityProps = {
	show?: MediaDefinition,
	hide?: MediaDefinition,
	visibility?: Properties['visibility']
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
	${props => props.visibility && `visibility: ${props.visibility};`}
`;
