import styled from 'styled-components';
import { Paragraph } from './Paragraph';
import {
	height, responsive, space, text,
} from '../../../theme/props';
import { Heading } from '../Heading/Heading';

export const BlogPreviewParagraph = styled(Paragraph)`
    font-size: 14px;
    line-height: 1.6;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
    ${responsive}
`;

export const BlogPreviewTitle = styled(Heading)`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
    ${responsive};
    ${text};
    ${space};
    ${height};
`;
