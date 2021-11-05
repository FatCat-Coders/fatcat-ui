import styled from 'styled-components';

// Definitions
import { MEDIA } from '../../../../theme/definitions';

export const MobileMenuWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: ${props => props.theme.space.s24};
	> ul {
		flex-direction: column;
		align-items: flex-start;
		height: 100%;
		> li {
			width: 100%;
			&:not(.button-menu-item) {
				> a {
					padding: 0;
					width: 100%;
				}
			}
			
			&.button-menu-item {
				display: none;
			}
			
			&:last-child {
				padding: 0;
			}
	
			> a {
				width: 100%;
				margin: 0 0 ${props => props.theme.space.s32} 0;
			}

			div {
				position: static;
				margin-top: ${props => props.theme.space.s16};
				margin-bottom: ${props => props.theme.space.s16};
			}
		}
	
		li {
			&.arrow {
				> a {
					&:after {
						top: 10px
					}
					&:hover {
						&:after {
							top: 15px
						}
					}
				}
			}
		}
	}
`;
