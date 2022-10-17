import styled, { DefaultTheme, css } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

import {
	background, BackgroundProps,
	responsiveWithProps, ResponsiveProps, type ResponsiveTypes,
	space, SpaceProps,
	visibility, VisibilityProps,
	position, PositionProps,
	customCss, CustomCssProps,
} from '../../../theme/props';

export type TSectionInnerWrapper =
	{
		width: keyof DefaultTheme['sectionWidth']
	}
	& SpaceProps
	& ResponsiveProps;

const splitedProps = [
	'padding',
	'paddingTop',
	'paddingRight',
	'paddingLeft',
	'paddingBottom',
	'paddingY',
	'paddingX',
	'margin',
	'margin',
	'marginTop',
	'marginRight',
	'marginLeft',
	'marginBottom',
	'marginY',
	'marginX',
	'clearSideSpacing',
	'clearLeftSideSpacing',
	'clearRightSideSpacing',
	'clearTopSideSpacing',
	'clearBottomSideSpacing',
] as ResponsiveTypes[];

export const SectionInnerWrapper = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TSectionInnerWrapper>`
	max-width: ${props => props.theme.sectionWidth[props.width]};
	width: 100%;
	${space};
	${responsiveWithProps(splitedProps)};
`;

export type TSectionOuterWrapper =
	{
		sticky?: boolean
		overflow?: string
		edge?: boolean
	}
	& BackgroundProps
	& ResponsiveProps
	& VisibilityProps
	& PositionProps
	& CustomCssProps;

export const SectionOuterWrapper = styled.section.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TSectionOuterWrapper>`
	width: 100%;
	justify-content: center;
	${props => props.sticky && 'position: sticky;'}
	${props => props.overflow && `overflow: ${props.overflow};`}

	${props => (props.theme.sectionLayout ? props.theme.sectionLayout
		: css`
			padding: 0 ${props => props.theme.space.s40};

			${props.theme.media.largeTablet} {
				padding-left: ${props.theme.space.s32};
				padding-right: ${props.theme.space.s32};
			}

			${props.theme.media.mobile} {
				padding: 0 ${props.theme.space.s20};
			}
		`)}

	${props => props.edge && 'padding: 0px !important;'};

	${background};
	${position};
	${visibility};
	${responsiveWithProps(splitedProps, true)};
	${customCss};
`;

SectionOuterWrapper.defaultProps = {
	initialDisplay: 'flex',
	display: 'flex',
	edge: false,
};
