import styled, { css } from 'styled-components';

import {
	text, TextProps,
} from '../../../theme/props';
import { COLOR } from '../../../theme/definitions';

const tableCSS = {
	pricing: css`
		color: white;
		width: 100%;
		text-align: left;
    `,
};

type TableAtomProps = {
    version?: keyof typeof tableCSS
} & TextProps;

export const Table = styled.table<TableAtomProps>`
    ${text};
	${props => props.version && tableCSS[props.version]};

    thead th {
		border-bottom: 5px solid ${COLOR.white10};
        :nth-child(1) {
			color: ${COLOR.white};
            text-align: left;
        }
        color: ${COLOR.white50};
        text-align: center;
	}
    
   tbody td {
        :nth-child(1) {
            color: ${COLOR.white};
            text-align: center;
		}
        text-align: center;
		padding: 20px 20px;
    }
    
`;

Table.defaultProps = {
	version: 'pricing',
};
