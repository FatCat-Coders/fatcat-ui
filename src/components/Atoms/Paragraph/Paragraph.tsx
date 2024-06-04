import styled, { CSSProp } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

type TParagraphSize = 'small' | 'large';

export type TParagraph = {
	size?: TParagraphSize,
} & GeneralProps;

export const Paragraph = styled.p.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TParagraph>`
	${({ theme, size }) => ((size && theme.textVariant.paragraph[size]) ? theme.textVariant.paragraph[size] : theme.textVariant.paragraph as CSSProp)}
	${generalProps};
`;

Paragraph.defaultProps = {
	textAlign: 'left',
	textColor: 'neutrals800',
	size: 'large',
	initialDisplay: 'block',
};
