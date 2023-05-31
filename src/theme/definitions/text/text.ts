import { css } from 'styled-components';

export const TEXT_VARIANT = {
	h1: css`
		${props => props.theme.textSize.h1};
		font-weight: ${props => props.theme.fontWeight.bold};

		${props => props.theme.media.tablet} {
			${props => props.theme.textSize.h1Tablet};
		}
	`,
	h2: css`
		${props => props.theme.textSize.h2};
		font-weight: ${props => props.theme.fontWeight.bold};

		${props => props.theme.media.tablet} {
			${props => props.theme.textSize.h2Tablet};
		}
	`,
	h3: css`
		${props => props.theme.textSize.h3};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.media.tablet} {
			${props => props.theme.textSize.h3Tablet};
		}
	`,
	h4: css`
		${props => props.theme.textSize.h4};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.media.tablet} {
			${props => props.theme.textSize.h4Tablet};
		}
	`,
	h5: css`
		${props => props.theme.textSize.h5};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.textSize.h5Tablet && props.theme.media.tablet} {
			${props => props.theme.textSize.h5Tablet};
		}
	`,
	h6: css`
		${props => props.theme.textSize.h6};
		font-weight: ${props => props.theme.fontWeight.semiBold};

		${props => props.theme.textSize.h6Tablet && props.theme.media.tablet} {
			${props => props.theme.textSize.h6Tablet};
		}
	`,
	paragraph: {
		small: css`
			${props => props.theme.textSize.paragraphSmall};
			font-weight: ${props => props.theme.fontWeight.normal};
		`,
		large: css`
			${props => props.theme.textSize.paragraph};
			font-weight: ${props => props.theme.fontWeight.normal};

			${props => props.theme.media.tablet} {
				${props => props.theme.textSize.paragraphTablet};
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
