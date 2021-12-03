import styled from 'styled-components';

import { MEDIA, SectionWidthDefinition } from '../../../theme/definitions';
import {
	background, BackgroundProps,
	responsive, ResponsiveProps,
	space, SpaceProps,
	visibility, VisibilityProps,
} from '../../../theme/props';

export const SectionInnerWrapper = styled.div<BackgroundProps & SpaceProps & { width: SectionWidthDefinition }>`
	max-width: ${props => props.theme.sectionWidth[props.width]};
	width: 100%;
	${space};
	${background};
`;

type OuterWrapperProps = {
	sticky?: boolean,
	overflow?: string,
	edge: boolean
}

export const SectionOuterWrapper = styled.section<BackgroundProps & OuterWrapperProps & ResponsiveProps & VisibilityProps>`
	display: flex;
	justify-content: center;
	${props => props.sticky && 'position: sticky;'}
	${props => props.overflow && `overflow: ${props.overflow};`}

	padding: 0 ${props => props.theme.space.s56};

	${MEDIA.desktop} {
		padding-left: ${props => props.theme.space.s48};
		padding-right: ${props => props.theme.space.s48};
	}

	${MEDIA.largeTablet} {
		padding-left: ${props => props.theme.space.s32};
		padding-right: ${props => props.theme.space.s32};
	}

	${MEDIA.mobile} {
		padding: 0 ${props => props.theme.space.s20};
	}

	${props => props.edge && 'padding: 0px !important;'};

	${visibility};
	${background};
	${responsive};
`;

SectionOuterWrapper.defaultProps = {
	initialDisplay: 'flex',
	edge: false,
};
