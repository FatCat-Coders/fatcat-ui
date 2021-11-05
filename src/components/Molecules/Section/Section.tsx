import React from 'react';

// Props & Types
import { SectionWidthDefinition } from '../../../theme/definitions';

// Local atoms
import { SectionInnerWrapper, SectionOuterWrapper } from './Section.atoms';
import {
	BackgroundProps, SpaceProps, ResponsiveProps, VisibilityProps,
} from '../../../theme/props';

type PropTypes = {
	width?: SectionWidthDefinition;
	sticky?: boolean,
	overflow?: string,
	edge?: boolean
}

const Section: React.FC<PropTypes & SpaceProps & BackgroundProps & ResponsiveProps & VisibilityProps> = (props) => {
	const {
		backgroundImage,
		backgroundPosition,
		backgroundColor = 'backgroundLighter',
		backgroundSize,
		backgroundRepeat,
		backgroundGradient,
		padding,
		margin,
		scale = true,
		children,
		width = 'normal',
		sticky,
		overflow,
		tablet,
		mobile,
		largeTablet,
		desktop,
		show,
		hide,
		edge = false,
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
			tablet={tablet}
			mobile={mobile}
			largeTablet={largeTablet}
			desktop={desktop}
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

export default Section;
