import styled, { css } from 'styled-components';

// Themes
import { COLOR } from '../../../../theme/definitions';

const toggleCSS = {
	inactive: css`
		background-color: ${COLOR.blackLighter};
		color: ${COLOR.white};
		right: 31px;
		left: 0;
    `,
	active: css`
		background-color: white;
		color: black;
		right: 0;
	`,
};

type ButtonAtomProps = {
    isOn?: boolean,
}
export const Button = styled.button<ButtonAtomProps>`
	padding: 10px 25px;
	cursor: pointer;
    background: white;
	font-size: 14px;
	${props => (props.isOn ? toggleCSS.active : toggleCSS.inactive)};
	display: inline-block;
	&.active {
		transform: translateX(calc(100% - 2px));
	}
	
`;
