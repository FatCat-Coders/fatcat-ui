import { css } from 'styled-components';
import { styled as styl } from '../../../utils/styled';

import {
	flex, FlexProps,
	generalProps, GeneralProps,
} from '../../../theme/props';

export type TTagWrapper = {
	variant?: keyof typeof tagVariant
} & FlexProps & GeneralProps;

export const tagVariant = {
	base: css`
		background-color: ${props => props.theme.backgroundColor.lightGrey};
	`,
	pill: css`
		background-color: ${props => props.theme.backgroundColor.lightGrey};
		border-radius: 50px;
	`,
	borderPill: css`
		border-radius: 50px;
		border: 1px solid ${props => props.theme.color.black};
	`,
};

export const TagWrapper = styl('div') <TTagWrapper>`
	${props => props.variant && tagVariant[props.variant]};
	${flex};
	${generalProps};
`;
