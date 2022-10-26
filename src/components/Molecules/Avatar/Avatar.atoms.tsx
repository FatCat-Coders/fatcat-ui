import styled, { css } from 'styled-components';
import { Wrapper } from '../../Atoms/Wrapper';
import { Heading } from '../../Atoms/Heading';

export const AvatarTitle = styled(Heading)`

`;

export const AvatarWrapper = styled(Wrapper) <{ profile?: boolean, size?: string }>`
	width: ${props => props.size};
	height: ${props => props.size};
	& > * {
		border-radius: 50%;
		width: 100%;
		box-shadow: 1px 1px 5px rgb(136 136 159 / 30%);
	}
	${({ profile }) => profile && css`
		position: relative;
	`};
`;

export const AvatarProfile = styled(Wrapper)`
	border-radius: 50%;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	right: -10%;
	width: 50%;
	height: 50%;
	padding: clamp(2px, 5%, 15px);
	background-color: #fff;
	box-shadow: 1px 1px 5px rgb(136 136 159 / 30%);
	& > * {
		border-radius: 50%;
		width: 100%;
	}
`;
