import styled, { DefaultTheme } from 'styled-components';

import {
	background, BackgroundProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	visibility, VisibilityProps,
} from '../../theme/props';

export type TSectionInnerWrapper =
	{
		width: keyof DefaultTheme['sectionWidth']
	}
	& BackgroundProps
	& SpaceProps;

export const SectionInnerWrapper = styled.div<TSectionInnerWrapper>`
	max-width: ${props => props.theme.sectionWidth[props.width]};
	width: 100%;
	${background};
	${space};
`;

export type TSectionOuterWrapper =
	{
		sticky?: boolean,
		overflow?: string,
		edge?: boolean
	}
	& BackgroundProps
	& ResponsiveProps
	& VisibilityProps;

export const SectionOuterWrapper = styled.section<TSectionOuterWrapper>`
	display: flex;
	justify-content: center;
	${props => props.sticky && 'position: sticky;'}
	${props => props.overflow && `overflow: ${props.overflow};`}

	padding: 0 ${props => props.theme.space.s40};

	${props => props.theme.media.largeTablet} {
		padding-left: ${props => props.theme.space.s32};
		padding-right: ${props => props.theme.space.s32};
	}

	${props => props.theme.media.mobile} {
		padding: 0 ${props => props.theme.space.s20};
	}

	${props => props.edge && 'padding: 0px !important;'};

	${background};
	${visibility};
	${responsive};
`;

SectionOuterWrapper.defaultProps = {
	initialDisplay: 'flex',
	edge: false,
};
