import { css, DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';
import { rgba } from 'polished';

export type BackgroundProps = {
	$backgroundColor?: keyof DefaultTheme['backgroundColor'],
	$backgroundColorOpacity?: number
	$backgroundImage?: string,
	$backgroundRepeat?: Properties['backgroundRepeat'],
	$backgroundPosition?: Properties['backgroundPosition'],
	$backgroundSize?: Properties['backgroundSize'],
	$backgroundGradient?: string,
	$backgroundBlur?: string,
	$backgroundAttachment?: Properties['backgroundAttachment'],
	$backgroundBlendMode?: Properties['backgroundBlendMode'],
};

export const background = css<BackgroundProps>`
	${props => props.$backgroundColor && props.theme.backgroundColor[props.$backgroundColor] && `background-color: ${props.$backgroundColorOpacity
		? rgba(props.theme.backgroundColor[props.$backgroundColor], props.$backgroundColorOpacity)
		: props.theme.backgroundColor[props.$backgroundColor]};`}
	${props => props.$backgroundImage && `background-image: url(${props.$backgroundImage});`}
	${props => props.$backgroundPosition && `background-position: ${props.$backgroundPosition}`};
	${props => props.$backgroundSize && `background-size: ${props.$backgroundSize}`};
	${props => props.$backgroundRepeat && `background-repeat: ${props.$backgroundRepeat}`};
	${props => props.$backgroundGradient && `background: ${props.$backgroundGradient}`};
	${props => props.$backgroundBlur && `backdrop-filter: blur(${props.$backgroundBlur})`};
	${props => props.$backgroundAttachment && `background-attachment: ${props.$backgroundAttachment}`};
	${props => props.$backgroundBlendMode && `background-blend-mode: ${props.$backgroundBlendMode}`};
`;
