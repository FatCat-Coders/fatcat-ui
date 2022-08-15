import React from 'react';
import { DefaultTheme } from 'styled-components';
import { ResponsiveTypePropCheck } from '../../../theme/props/responsive/responsive';

// Props & Types
import {
	BackgroundProps,
	PositionProps,
	ResponsiveProps,
	SpaceProps,
	VisibilityProps,
	CustomCssProps,
} from '../../../theme/props';

// Local atoms
import { SectionInnerWrapper, SectionOuterWrapper } from './Section.atoms';

export type TSection =
	{
		as?: 'section' | 'div' | 'header' | 'footer'
		children: React.ReactNode
		edge?: boolean
		iDesktop?: ResponsiveTypePropCheck
		iStandardDesktop?: ResponsiveTypePropCheck
		iLargeDesktop?: ResponsiveTypePropCheck
		iLargeTablet?: ResponsiveTypePropCheck
		iMobile?: ResponsiveTypePropCheck
		iTablet?: ResponsiveTypePropCheck
		overflow?: string
		scale?: boolean
		sticky?: boolean
		width?: keyof DefaultTheme['sectionWidth']
	}
	& BackgroundProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& VisibilityProps
	& CustomCssProps;

const Section: React.FC<TSection> = (props) => {
	const {
		as,
		children,
		backgroundColor,
		backgroundColorHex,
		backgroundColorOpacity,
		backgroundGradient,
		backgroundImage,
		backgroundPosition,
		backgroundRepeat,
		backgroundSize,
		desktop,
		standardDesktop,
		edge,
		hide,
		iDesktop,
		iStandardDesktop,
		iLargeDesktop,
		iLargeTablet,
		iMobile,
		iTablet,
		largeDesktop,
		largeTablet,
		margin,
		mobile,
		overflow,
		padding,
		position,
		scale,
		show,
		sticky,
		tablet,
		width,
		zIndex,
		css,
	} = props;

	return (
		<SectionOuterWrapper
			as={as}
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			backgroundColorHex={backgroundColorHex}
			backgroundColorOpacity={backgroundColorOpacity}
			backgroundPosition={backgroundPosition}
			backgroundSize={backgroundSize}
			backgroundRepeat={backgroundRepeat}
			backgroundGradient={backgroundGradient}
			position={position}
			sticky={sticky}
			overflow={overflow}
			desktop={desktop}
			standardDesktop={standardDesktop}
			largeDesktop={largeDesktop}
			largeTablet={largeTablet}
			mobile={mobile}
			tablet={tablet}
			hide={hide}
			show={show}
			edge={edge}
			zIndex={zIndex}
			css={css}
		>
			<SectionInnerWrapper
				padding={padding}
				margin={margin}
				scale={scale}
				width={width}
				desktop={iDesktop}
				standardDesktop={iStandardDesktop}
				largeDesktop={iLargeDesktop}
				largeTablet={iLargeTablet}
				mobile={iMobile}
				tablet={iTablet}
			>
				{children}
			</SectionInnerWrapper>
		</SectionOuterWrapper>
	);
};

Section.defaultProps = {
	as: 'section',
	width: 'normal',
	edge: false,
	scale: false,
	sticky: false,
	overflow: null,
	iMobile: null,
	iTablet: null,
	iLargeTablet: null,
	iDesktop: null,
	iLargeDesktop: null,
	iStandardDesktop: null,
};

export default Section;
