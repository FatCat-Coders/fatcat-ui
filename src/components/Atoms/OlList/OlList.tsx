import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

// themes
import { generalProps, GeneralProps } from '../../../theme/props';

export type TOlList = {
	variant?: keyof DefaultTheme['ollistStyle']
} & GeneralProps;

export const OlList = styled('ol') <TOlList>`
	list-style: none;
	counter-reset: item;
	position: relative;
	border-radius: 40px;
	padding-left: 24px;

	> li {
		counter-increment: item;
		position: relative;
		&:before {
			content: counter(item) ". ";
			position: absolute;
			font-size: 1em;
			font-weight: 700;
			text-align: right;
			display: inline;
			width: 20px;
			margin-left: -30px;
		}
		font-size: ${props => props.theme.fontSize.s18};
	}

	${props => props.variant && props.theme.ollistStyle[props.variant]};
	${generalProps};
`;

OlList.defaultProps = {
	variant: 'base',
};
