import React from 'react';
import { DefaultTheme } from 'styled-components';
import { ResponsiveTypePropCheck } from '../../theme/props/responsive/responsive';

// Props & Types
import {
	BackgroundProps,
	PositionProps,
	ResponsiveProps,
	SpaceProps,
	VisibilityProps,
} from '../../theme/props';

// Local atoms
import { SectionInnerWrapper, SectionOuterWrapper } from './Section.atoms';

export type TSection =
	{
		as?: 'section' | 'div' | 'header' | 'footer'
		$edge?: boolean
		$iDesktop?: ResponsiveTypePropCheck
		$iDesktopStandard?: ResponsiveTypePropCheck
		$iLargeDesktop?: ResponsiveTypePropCheck
		$iLargeTablet?: ResponsiveTypePropCheck
		$iMobile?: ResponsiveTypePropCheck
		$iTablet?: ResponsiveTypePropCheck
		$overflow?: string
		$scale?: boolean
		$sticky?: boolean
		$width?: keyof DefaultTheme['sectionWidth']
	}
	& BackgroundProps
	& PositionProps
	& ResponsiveProps
	& SpaceProps
	& VisibilityProps;

const Section: React.FC<TSection> = (props) => {
	const {
		as,
		children,
		$backgroundColor,
		$backgroundGradient,
		$backgroundImage,
		$backgroundPosition,
		$backgroundRepeat,
		$backgroundSize,
		$desktop,
		$desktopStandard,
		$edge,
		$hide,
		$iDesktop,
		$iDesktopStandard,
		$iLargeDesktop,
		$iLargeTablet,
		$iMobile,
		$iTablet,
		$largeDesktop,
		$largeTablet,
		$margin,
		$mobile,
		$overflow,
		$padding,
		$position,
		$scale,
		$show,
		$sticky,
		$tablet,
		$width,
		$zIndex,
	} = props;

	return (
		<SectionOuterWrapper
			as={as}
			$backgroundImage={$backgroundImage}
			$backgroundColor={$backgroundColor}
			$backgroundPosition={$backgroundPosition}
			$backgroundSize={$backgroundSize}
			$backgroundRepeat={$backgroundRepeat}
			$backgroundGradient={$backgroundGradient}
			$position={$position}
			$sticky={$sticky}
			$overflow={$overflow}
			$desktop={$desktop}
			$desktopStandard={$desktopStandard}
			$largeDesktop={$largeDesktop}
			$largeTablet={$largeTablet}
			$mobile={$mobile}
			$tablet={$tablet}
			$hide={$hide}
			$show={$show}
			$edge={$edge}
			$zIndex={$zIndex}
		>
			<SectionInnerWrapper
				$padding={$padding}
				$margin={$margin}
				$scale={$scale}
				$width={$width}
				$desktop={$iDesktop}
				$desktopStandard={$iDesktopStandard}
				$largeDesktop={$iLargeDesktop}
				$largeTablet={$iLargeTablet}
				$mobile={$iMobile}
				$tablet={$iTablet}
			>
				{children}
			</SectionInnerWrapper>
		</SectionOuterWrapper>
	);
};

Section.defaultProps = {
	as: 'section',
	$width: 'normal',
	$edge: false,
	$scale: false,
	$sticky: false,
	$overflow: null,
	$iMobile: null,
	$iTablet: null,
	$iLargeTablet: null,
	$iDesktop: null,
	$iLargeDesktop: null,
	$iDesktopStandard: null,
};

export default Section;
