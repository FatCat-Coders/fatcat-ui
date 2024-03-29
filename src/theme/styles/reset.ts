/* stylelint-disable */
import { css } from 'styled-components';

// Reset css
export default css`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
		display: none;
	}
	body {
		line-height: 1;
		padding: 0px !important;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	/* Additional resets */
	a {
		text-decoration: none;
		color: inherit;
	}
	button {
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;
		background: transparent;
		color: inherit;
		font: inherit;
		text-align: inherit;
		outline: none;
		line-height: inherit;
		-webkit-appearance: none;
		-moz-appearance:    none;
		appearance:         none;
	}
	*, *:before, *:after {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		user-select: none;
	}
	a, p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea, span, code, .selectable {
		user-select: text;
	}
	*:focus {
	    outline: none;
	}
	textarea:focus, input:focus {
	    outline: none;
	}
`;
