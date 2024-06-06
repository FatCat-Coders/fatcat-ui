import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

export type TParagraph = GeneralProps;

export const Paragraph = styled.p.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TParagraph>`
	${props => props.theme.textSize[props.textSize]}
	${generalProps};
`;

Paragraph.defaultProps = {
	textAlign: 'left',
	textColor: 'neutrals800',
	initialDisplay: 'block',
};
