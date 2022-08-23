import { styled } from '../../../utils/styled';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

export type TParagraph = {
	size?: 'small' | 'large',
} & GeneralProps;

export const Paragraph = styled('p') <TParagraph>`
	${({ theme, size }) => (theme.textStyle.paragraph[size] ? theme.textStyle.paragraph[size] : theme.textStyle.paragraph)}
	${generalProps};
`;

Paragraph.defaultProps = {
	fontWeight: 'normal',
	textAlign: 'left',
	textColor: 'primary',
	size: 'large',
};
