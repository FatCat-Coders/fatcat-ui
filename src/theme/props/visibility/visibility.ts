import { css } from 'styled-components';
import { Properties } from 'csstype';

import { MEDIA, MediaDefinition } from '../../definitions';

export type VisibilityProps = {
	show?: MediaDefinition
	hide?: MediaDefinition
	visibility?: Properties['visibility']
	initialDisplay?: Properties['display']
	display?: Properties['display']
	opacity?: Properties['opacity']
	pointerEvents?: Properties['pointerEvents']
};

export const visibility = css<VisibilityProps>`
	${props => props.display && css`
		display: ${props.display};
	`}
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
	${props => props.opacity && `opacity: ${props.opacity};`}
	${props => props.pointerEvents && `pointer-events: ${props.pointerEvents};`}
`;
