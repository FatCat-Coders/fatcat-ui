import { css } from 'styled-components';

export const TEXT_STYLE = {
	h1: css`
		${props => props.theme.textSize.h1};
		font-weight: ${props => props.theme.fontWeight.extraBold};

		${props => props.theme.media.largeTablet} {
			${props => props.theme.textSize.h1Tablet};
		}

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h1Mobile};
		}
	`,
	h2: css`
		${props => props.theme.textSize.h2};
		font-weight: ${props => props.theme.fontWeight.extraBold};

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h2Mobile};
			font-weight: ${props => props.theme.fontWeight.semiBold};
		}
	`,
	h3: css`
		${props => props.theme.textSize.h3};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.bold};
		}
	`,
	h4: css`
		${props => props.theme.textSize.h4};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h4Mobile};
		}
	`,
	h5: css`
		${props => props.theme.textSize.h5};
		font-weight: ${props => props.theme.fontWeight.light};

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h5Mobile};
		}
	`,
	h6: css`
		${props => props.theme.textSize.h6};
		font-weight: ${props => props.theme.fontWeight.light};

 		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h6Mobile};
		}
	`,
	paragraph: css`
		
	`,
	button: css`
		${props => props.theme.textSize.button};
	`,
	text: css``,
};
