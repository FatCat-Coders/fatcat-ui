import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// React-icons
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar';

// Theme
import { generalProps, GeneralProps } from '../../../theme/props';

export type TIcon = {
	svgColor?: keyof DefaultTheme['color']
} & GeneralProps;

export const Icon = styled(AiFillStar).withConfig({
	shouldForwardProp: (prop: string | number, defaultValidatorFn) => !UIprops.includes(String(prop)) && defaultValidatorFn(prop),
}) <TIcon>`
	${props => props.svgColor && `color: ${props.theme.color[props.svgColor]};`}
	${generalProps};
`;
