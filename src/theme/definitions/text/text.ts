import { css } from 'styled-components';

export const TEXT_VARIANT = {
	h1: css`
		${props => props.theme.textSize.h1};
		font-weight: ${props => props.theme.fontWeight.bold};

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h1Mobile};
		}
	`,
	h2: css`
		${props => props.theme.textSize.h2};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h2Mobile};
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
		font-weight: ${props => props.theme.fontWeight.semiBold};
	`,
	h6: css`
		${props => props.theme.textSize.h6};
		font-weight: ${props => props.theme.fontWeight.semiBold};
	`,
	paragraph: {
		small: css`
			${props => props.theme.textSize.paragraphSmall};
		`,
		large: css`
			${props => props.theme.textSize.paragraph};

			${props => props.theme.media.mobile} {
				${props => props.theme.textSize.paragraphMobile};
			}
		`,
	},
	button: css`
		${props => props.theme.textSize.button};
		font-weight: ${props => props.theme.fontWeight.semiBold};
	`,
	text: css`
		${props => props.theme.textSize.text};
	`,
	link: css`
		${props => props.theme.textSize.link};
	`,
};
