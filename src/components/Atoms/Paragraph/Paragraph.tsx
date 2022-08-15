import { styled } from '../../../utils/styled';

// Props
import { generalProps, GeneralProps } from '../../../theme/props';

export type TParagraph = GeneralProps;

export const Paragraph = styled('p') <TParagraph>`
	${props => props.theme.textStyle.paragraph}
	${generalProps};
`;

Paragraph.defaultProps = {
	textSize: 'paragraph',
	fontWeight: 'normal',
	textAlign: 'left',
	textColor: 'primary',
};
