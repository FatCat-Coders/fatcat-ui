import { styled } from '../../utils/styled';
import { DefaultTheme, css } from 'styled-components';

import {
	background, BackgroundProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	visibility, VisibilityProps,
	position, PositionProps,
} from '../../theme/props';

export type TSectionInnerWrapper =
	{
		width: keyof DefaultTheme['sectionWidth']
	}
	& BackgroundProps
	& ResponsiveProps
	& SpaceProps;

export const SectionInnerWrapper = styled('div')<TSectionInnerWrapper>`
	max-width: ${props => props.theme.sectionWidth[props.width]};
	width: 100%;
	${background};
	${space};
	${responsive}
`;

export type TSectionOuterWrapper =
	{
		sticky?: boolean,
		overflow?: string,
		edge?: boolean
	}
	& BackgroundProps
	& PositionProps
	& ResponsiveProps
	& VisibilityProps;

export const SectionOuterWrapper = styled('section')<TSectionOuterWrapper>`
	display: flex;
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

	${position}
	${background};
	${visibility};
	${responsive};
`;

SectionOuterWrapper.defaultProps = {
	initialDisplay: 'flex',
	edge: false,
};
