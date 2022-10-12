import styled from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

type TParagraphSize = 'small' | 'large';

export type TParagraph = {
	size?: TParagraphSize,
} & GeneralProps;

export const Paragraph = styled.p.withConfig({
	shouldForwardProp: (prop: string | number, defaultValidatorFn) => !UIprops.includes(String(prop)) && defaultValidatorFn(prop),
}) <TParagraph>`
	${({ theme, size }) => (theme.textStyle.paragraph[size as TParagraphSize] ? theme.textStyle.paragraph[size as TParagraphSize] : theme.textStyle.paragraph)}
	${generalProps};
`;

Paragraph.defaultProps = {
	fontWeight: 'normal',
	textAlign: 'left',
	textColor: 'primary',
	size: 'large',
	initialDisplay: 'block',
};
