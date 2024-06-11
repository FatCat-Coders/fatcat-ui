import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// Props
import { generalProps2, GeneralProps2 } from '../../../theme/props';

export type TParagraph = GeneralProps2;

export const Paragraph = styled.p.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TParagraph>`
	${props => props.theme.textSize[props.textSize]}
	${generalProps2};
`;

Paragraph.defaultProps = {
	textAlign: 'left',
	textColor: 'neutrals800',
	initialDisplay: 'block',
};
