import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

export type TParagraph = {
	size?: 'small' | 'large',
} & GeneralProps;

export const Paragraph = styled.p.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TParagraph>`
	${({ theme, size }) => (theme.textStyle.paragraph[size] ? theme.textStyle.paragraph[size] : theme.textStyle.paragraph)}
	${generalProps};
`;

Paragraph.defaultProps = {
	fontWeight: 'normal',
	textAlign: 'left',
	textColor: 'primary',
	size: 'large',
	initalDisplay: 'block',
};
