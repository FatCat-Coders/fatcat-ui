import styled from 'styled-components';

import arrowRight from '../../../../assets/images/Icons/arrow-right1.svg';
import arrowLeft from '../../../../assets/images/Icons/arrow-left1.svg';
import { MEDIA } from '../../../../theme/definitions';

export const CarouselWrapper = styled.div`
	.splide {
		display: flex;
		flex-direction: column-reverse;
	}
	.splide__arrows {
		display: flex;
		justify-content: center;
		margin: 32px 0px;
		gap: 24px;
	}
	.splide--loop  {
		.splide__arrow {
			position: static;
			z-index: 1;
			background-color: rgba(255, 255, 255, 0.3);
			background-repeat: no-repeat;
			background-position: center;
			backdrop-filter: blur(35px);
			width: 44px;
			height: 44px;
			opacity: 0.5;
			border-radius: 50%;
			transform: translateY(0%);
			svg {
				display: none;
			}
			&.splide__arrow--next {
				background-image: url(${arrowRight});
				right: 5%;
			}
			&.splide__arrow--prev {
				background-image: url(${arrowLeft});
				left: 5%;
			}
			&:before {
				font-size: 0px;
			}
			&:hover {
				opacity: 0.7;
			}
		}
		&:hover {
			.splide__arrow {
				visibility: visible;
			}
		}
	}
`;
