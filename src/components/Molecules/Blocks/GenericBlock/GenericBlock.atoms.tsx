import styled from 'styled-components';

// Definitions
import { MEDIA } from '../../../../theme/definitions';

import { Wrapper } from '../../../Atoms';

export const GenericBlockRemarkWrapper = styled(Wrapper)`
	p {
		letter-spacing: -0.01em;
		text-align: left;
		color: rgba(255, 255, 255, 0.7);
		font-family: "Circular Std";
		font-size: 1.125rem;
		line-height: 1.5;
		font-weight: 400;
		&:not(:last-child) {
			padding-bottom: ${props => props.theme.space.s20};
		}
	}
	
	&.center {
		p {
			text-align: center;
		}
	}
	
	ul {
		list-style: none;
		position: relative;
		padding-left: ${props => props.theme.space.s32};
		
		li::before {
			content: "";
			background-color: transparent;

			/* position the checkbox */
			position: absolute;
			left: -24px;
			top: 6px;

			/* setting the checkbox */
			/* short arm */
			width: 7px;
			border-bottom: 3px solid rgba(255, 255, 255);;
			/* long arm */
			height: 13px;
			border-right: 3px solid rgba(255, 255, 255);;

			/* rotate the mirrored L to make it a checkbox */
			transform: rotate(45deg);
			-o-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			-webkit-transform: rotate(45deg);
		}
	
		> li {
			position: relative;
			letter-spacing: -0.01em;
			text-align: left;
			color: rgba(255, 255, 255, 0.7);
			font-family: "Circular Std";
			font-size: 1.125rem;
			line-height: 1.5;
			font-weight: 400;
			padding-bottom: 16px;
			${MEDIA.tablet} {
				font-family: ${props => props.theme.fontFamily.main};
				font-size: ${props => props.theme.fontSize.s18};
				line-height: 1.5;
				font-weight: normal;
			}
		}
	}
`;
