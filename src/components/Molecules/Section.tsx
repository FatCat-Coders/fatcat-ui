import React from 'react';
import { DefaultTheme } from 'styled-components';

// Props & Types
import {
	BackgroundProps,
	ResponsiveProps,
	SpaceProps,
	VisibilityProps,
} from '../../theme/props';

// Local atoms
import { SectionInnerWrapper, SectionOuterWrapper } from './Section.atoms';

export type TSection =
	{
		width?: keyof DefaultTheme['sectionWidth']
		sticky?: boolean
		overflow?: string
		scale?: boolean
		edge?: boolean
	}
	& BackgroundProps
	& ResponsiveProps
	& SpaceProps
	& VisibilityProps;

const Section: React.FC<TSection> = (props) => {
	const {
		backgroundImage,
		backgroundPosition,
		backgroundColor,
		backgroundSize,
		backgroundRepeat,
		backgroundGradient,
		padding,
		margin,
		scale,
		children,
		width,
		sticky,
		overflow,
		tablet,
		mobile,
		largeTablet,
		largeDesktop,
		desktop,
		show,
		hide,
		edge,
	} = props;

	return (
		<SectionOuterWrapper
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			backgroundPosition={backgroundPosition}
			backgroundSize={backgroundSize}
			backgroundRepeat={backgroundRepeat}
			backgroundGradient={backgroundGradient}
			sticky={sticky}
			overflow={overflow}
			mobile={mobile}
			tablet={tablet}
			largeTablet={largeTablet}
			desktop={desktop}
			largeDesktop={largeDesktop}
			hide={hide}
			show={show}
			edge={edge}
		>
			<SectionInnerWrapper
				padding={padding}
				margin={margin}
				scale={scale}
				width={width}
			>
				{children}
			</SectionInnerWrapper>
		</SectionOuterWrapper>
	);
};

Section.defaultProps = {
	width: 'normal',
	edge: false,
	scale: false,
	sticky: false,
	overflow: null,
};

export default Section;
