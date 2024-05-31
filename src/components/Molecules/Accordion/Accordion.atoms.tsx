import styled from 'styled-components';
import { Wrapper } from '../../Atoms/Wrapper';
import { Heading } from '../../Atoms/Heading';

export const AccordionTitle = styled(Heading)`
	&:hover,
	&:hover * {
		cursor: pointer;
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.03);
	}
	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 8px;
	}
`;

export const Arrow = styled.svg<{ isOpen: boolean }>`
	position: relative;
	width: 16px;
	${props => (props.isOpen ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);')};
`;

export const Plus = styled.span<{ isOpen: boolean }>`
	position: relative;
	width: 8px;
	height: 1px;
	margin: 0 4px;
	background-color: #767986;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #767986;
		${props => (props.isOpen ? 'transform: rotate(0deg);' : 'transform: rotate(-90deg);')};
	}
`;

export const AccordionWrapper = styled(Wrapper)`
	overflow: hidden;
	border-bottom: 1px solid ${props => props.theme.color.neutrals500};
`;

export const AccordionContent = styled(Wrapper) <{ isOpen: boolean }>`
	height: ${props => (props.isOpen ? 'auto' : 0)};
`;
