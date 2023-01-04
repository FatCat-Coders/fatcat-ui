import { css, CSSProp } from 'styled-components';

export type CustomCssProps = {
	styled?: CSSProp
};

export const customCss = css<CustomCssProps>`
	${props => props.styled}
`;
