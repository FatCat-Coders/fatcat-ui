/* stylelint-disable */
import { css } from 'styled-components';

export default css`
	html {
		scroll-behavior: smooth;
		font-size: 100%;
	}

	html, body, * {
		line-height: 1;
		font-family: ${props => props.theme.fontFamily.main};
	}

	/* Change the white to any color ;) */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active  {
	    -webkit-box-shadow: 0 0 0 30px white inset !important;
	}
`;
