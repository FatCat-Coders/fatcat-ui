import styled from 'styled-components';
import { MEDIA } from '../../../../theme/definitions';

export const NavbarWrapper = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	li {
		position: relative;

		&:not(.button-menu-item) {
			> a {
				padding: ${props => props.theme.space.s24};
				display: block;
				${MEDIA.desktop} {
					padding: ${props => props.theme.space.s16};
				}
			}
		}

		> a:not([variant]) {
			&:hover {
				color: ${props => props.theme.linkColor.primary};
			}
		}
		
		&.button-menu-item {
			display: flex;
			justify-content: center;
			align-content: center;
			> * {
				align-self: center;
			}
		}

		&:hover {
			> div {
				display: flex;
			}
		}
	}

	li {
		&.arrow {
			> a {
				position: relative;

				&:after {
					border-left: 1px solid ${props => props.theme.color.white};
					border-top: 1px solid ${props => props.theme.color.white};
					width: 5px;
					content: '';
					height: 5px;
					transform: rotate(-135deg);
					position: absolute;
					right: 8px;
					top: calc(50% - 3px);
				}

				&:hover {
					&:after {
						border-left: 1px solid ${props => props.theme.linkColor.primary};
						border-top: 1px solid ${props => props.theme.linkColor.primary};
						transform: rotate(45deg);
						top: calc(60% - 5px);
					}
				}
			}
		}
	}

	li:last-child {
		padding-left: ${props => props.theme.space.s12};
	}
`;

export const NavbarDropdown = styled.div`
	display: none;
	flex-direction: column;
	position: absolute;
	top: 100%;
	border-radius: 8px;
	background-color: black;
	//background-color: #1D1D1E;
	overflow: hidden;
	z-index: 10000;
	> a {
		color: white;
		padding: ${props => props.theme.space.s20} ${props => props.theme.space.s28};
		white-space: nowrap;
		font-size: ${props => props.theme.fontSize.s16};
		
		&:hover {
			background-color: ${props => props.theme.color.yellow10};
			color: ${props => props.theme.color.yellow};
		}
	}
`;
