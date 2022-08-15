import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

import { generalProps, GeneralProps } from '../../../theme/props';

export type TUlList = {
	variant?: keyof DefaultTheme['ullistStyle']
	bulletColor?: keyof DefaultTheme['color']
} & GeneralProps;

export const UlList = styled('ul') <TUlList>`
	list-style: none;
	padding-left: ${props => props.theme.space.s24};

	> li {
		position: relative;
	}

	${props => props.variant && props.theme.ullistStyle[props.variant]};
	${generalProps};
`;

UlList.defaultProps = {
	variant: 'base',
	bulletColor: 'black',
};
