import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

// React-icons
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';

// Theme
import { generalProps, GeneralProps } from '../../../theme/props';

export type TIcon = {
	svgColor?: keyof DefaultTheme['color']
} & GeneralProps;

export const Icon = styled(AiFillStar) <TIcon>`
	${props => props.svgColor && `color: ${props.theme.color[props.svgColor]};`}
	${generalProps};
`;
