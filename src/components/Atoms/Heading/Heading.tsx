import { styled } from '../../../utils/styled';
import { css } from 'styled-components';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

// Types
import { HeadingType } from '../../../utils/types';

export type THeading = HeadingType & GeneralProps;

export const Heading = styled('h1') <THeading>`
	${props =>
		props.as &&
		css`
			${props.theme.textStyle[props.as]};
		`};
	${generalProps};
`;

Heading.defaultProps = {
	as: 'h1',
	textAlign: 'left',
	textColor: 'primary',
	initialDisplay: 'inline',
};
