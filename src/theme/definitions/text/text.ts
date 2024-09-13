import { css } from 'styled-components';

const base = css`
	${props => props.theme.textSize.text1};
	${props => props.theme.media.tablet} {
		${props => props.theme.textSize.text2};
	}
`;

// this is not beeing used at the moment
export const TEXT_VARIANT = {
	h1: css`
		${base}
	`,
	h2: css`
		${base}
	`,
	h3: css`
		${base}
	`,
	h4: css`
		${base}
	`,
	h5: css`
		${base}
	`,
	h6: css`
		${base}
	`,
	paragraph: {
		small: css`
			${base}
		`,
		large: css`
			${base}
		`,
	},
	button: css`
		${base}
	`,
	text: css`
		${base}
	`,
	link: css`
		${base}
	`,
};
