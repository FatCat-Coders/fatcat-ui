import styled, { css } from 'styled-components';

// themes
import {
	responsive, ResponsiveProps, space, SpaceProps,
} from '../../../theme/props';

const ollistCSS = {
	base: css`
		color: ${props => props.theme.color.white};
	`,
	red: css`
		color: ${props => props.theme.color.purple};
	`,
};

type OLListAtomProps = {
	model?: keyof typeof ollistCSS,
}
// export type OlListAtomProps = ResponsiveProps & SpaceProps;

export const OlList = styled.ol<OLListAtomProps>`
	list-style: none;
	counter-reset: item;
	position: relative;
	border-radius: 40px;
	padding-left: 24px;
	${space};
	${responsive};
	color: ${props => props.theme.color.purple};

	> li {
		counter-increment: item;
		position: relative;
		&:before {
			content: counter(item) ". ";
			${props => props.model && ollistCSS[props.model]};
			//color: rgba(255,255,255, 0.7);
			position: absolute;
			font-size: ${props => props.theme.fontSize.s18};
			font-weight: 700;
			text-align: right;
			display: inline;
			width: 20px;
			margin-left: -30px;
			padding-top: 7px;
		}
		font-size: ${props => props.theme.fontSize.s18};
	}
`;

OlList.defaultProps = {
	model: 'base',
};
