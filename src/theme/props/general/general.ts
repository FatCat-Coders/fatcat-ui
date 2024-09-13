import { css, CSSProp } from 'styled-components';

import { animation, AnimationProps } from '../animation/animation';
import { background, BackgroundProps } from '../background/background';
import { border, BorderProps } from '../border/border';
import { customCss, CustomCssProps } from '../customCss/customCss';
import { hover, HoverProps } from '../hover/hover';
import { overflow, OverflowProps } from '../overflow/overflow';
import { position, PositionProps } from '../position/position';
import { responsive, ResponsiveProps } from '../responsive/responsive';
import { size, SizeProps } from '../size/size';
import { space, SpaceProps } from '../space/space';
import { text, TextProps } from '../text/text';
import { transition, TransitionsProps } from '../transition/transition';
import { visibility, VisibilityProps } from '../visibility/visibility';

/**
 * when using generalProps in your component,
 * put it on bottom of the list to override other styles
 */
export const generalProps = css`
 ${animation}
 ${background}
 ${border}
 ${overflow}
 ${position}
 ${size}
 ${space}
 ${text}
 ${transition}
 ${visibility}
 ${hover}
 ${responsive}
 ${customCss}
`;

export type GeneralProps =
	AnimationProps
	& BackgroundProps
	& BorderProps
	& CustomCssProps
	& HoverProps
	& OverflowProps
	& PositionProps
	& ResponsiveProps
	& SizeProps
	& SpaceProps
	& TextProps
	& TransitionsProps
	& VisibilityProps;
