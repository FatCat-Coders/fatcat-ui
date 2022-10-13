import styled, { css } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

// Types
import { HeadingType } from '../../../utils/types';

export type THeading = HeadingType & GeneralProps;

export const Heading = styled.h1.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <THeading>`
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
