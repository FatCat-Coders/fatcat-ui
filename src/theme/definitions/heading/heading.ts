import { css } from 'styled-components';

export const HEADING_STYLE = {
	h1: css`
		${props => props.theme.textSize.h1};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${props => props.theme.media.largeTablet} {
			${props => props.theme.textSize.h1Tablet};
		}
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h1Mobile};
		}
	`,
	h2: css`
		${props => props.theme.textSize.h2};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h2Mobile};
		}
	`,
	h3: css`
		${props => props.theme.textSize.h3};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h3Mobile};
		}
	`,
	h4: css`
		${props => props.theme.textSize.h4};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h4Mobile};
		}
	`,
	h5: css`
		${props => props.theme.textSize.h5};
		font-weight: ${props => props.theme.fontWeight.bold};
		letter-spacing: -0.01em;
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h5Mobile};
		}
	`,
	h6: css`
		${props => props.theme.textSize.h6};
		font-weight: ${props => props.theme.fontWeight.normal};
		letter-spacing: 0.125em;
		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h6Mobile};
		}
	`,
};
