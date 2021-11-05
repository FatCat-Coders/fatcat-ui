import styled, { css } from 'styled-components';

import { MEDIA } from '../../../theme/definitions';
import { TEXT_SIZE } from '../../../theme/styles';

// Props
import {
	space, SpaceProps,
	text, TextProps,
	responsive, ResponsiveProps,
	width, WidthProps,
	visibility, VisibilityProps,
	position, PositionProps,
	height, HeightProps,
} from '../../../theme/props';

const headingStyles = {
	h1: css`
		${TEXT_SIZE.h1};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${MEDIA.largeTablet} {
			${TEXT_SIZE.h1Tablet};
		}
		${MEDIA.mobile} {
			${TEXT_SIZE.h1Mobile};
		}
	`,
	h2: css`
		${TEXT_SIZE.h2};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${MEDIA.mobile} {
			${TEXT_SIZE.h2};
		}
	`,
	h3: css`
		${TEXT_SIZE.h3};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${MEDIA.mobile} {
			${TEXT_SIZE.h3Mobile};
		}
	`,
	h4: css`
		${TEXT_SIZE.h4};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${MEDIA.mobile} {
			${TEXT_SIZE.h4Mobile};
		}
	`,
	h5: css`
		${TEXT_SIZE.h5};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${MEDIA.mobile} {
			${TEXT_SIZE.h5Mobile};
		}
	`,
	h6: css`
		${TEXT_SIZE.h6};
		font-weight: ${props => props.theme.fontWeight.normal};
		letter-spacing: 0.125em;
		${MEDIA.mobile} {
			${TEXT_SIZE.h6Mobile};
		}
	`,
};

type HeadingType = {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type HeadingAtomProps = HeadingType & TextProps & SpaceProps & ResponsiveProps & WidthProps & VisibilityProps & PositionProps & HeightProps;

export const Heading = styled.h1<HeadingAtomProps>`
	${props =>
		props.as &&
		css`
			${headingStyles[props.as]};
			* {
				${headingStyles[props.as]};
				${responsive};
			}
		`};
	${text};
	${space};
	${responsive};
	${width};
	${visibility};
	${position};
	${height};
`;

Heading.defaultProps = {
	as: 'h1',
	textAlign: 'left',
	textColor: 'primary',
	initialDisplay: 'inline',
};
