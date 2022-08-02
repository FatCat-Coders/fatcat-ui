import { css, CSSProp } from 'styled-components';

export type CustomCssProps = {
	css?: CSSProp
};

export const customCss = css<CustomCssProps>`
	${props => props.css}
`;
