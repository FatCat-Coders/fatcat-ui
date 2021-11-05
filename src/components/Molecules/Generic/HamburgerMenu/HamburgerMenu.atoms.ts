import styled, { css } from 'styled-components';

const barItemOpen = css`
	position: absolute;
	top: 7px;
	border-radius: 4px;
`;

const barItem = css`
	transform: rotate(0deg);
	transition: 250ms ease-in;
	width: 20px;
	height: 2px;
	background-color: ${props => props.theme.color.white};
	margin: 3px 0;
`;

export const HamburgerMenuBarTop = styled.div`
	${barItem};
	width: 20px;
`;

export const HamburgerMenuBarCenter = styled.div`
	${barItem};
`;

export const HamburgerMenuBarBottom = styled.div`
	${barItem};
	width: 20px;
`;

export const HamburgerMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	position: relative;
	height: 24px;
	width: 20px;
	cursor: pointer;

	&:focus {
		outline: -webkit-focus-ring-color auto 5px;
	}

	&.active {
		${HamburgerMenuBarBottom} {
			${barItemOpen};
			transform: rotate(-45deg);
		}

		${HamburgerMenuBarCenter} {
			opacity: 0;
			width: 0;
			transition: unset;
		}

		${HamburgerMenuBarTop} {
			${barItemOpen};
			transform: rotate(45deg);
		}
	}
`;
