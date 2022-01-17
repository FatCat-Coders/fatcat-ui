import styled, { DefaultTheme } from 'styled-components';

import {
	text, TextProps,
} from '../../theme/props';

type TTable =
	{
		version?: keyof DefaultTheme['tableStyle']
	}
	& TextProps;

export const Table = styled.table<TTable>`
	${props => props.version && props.theme.tableStyle.[props.version]};

    thead th {
		border-bottom: 5px solid ${props => props.theme.color.white10};
        :nth-child(1) {
			color: ${props => props.theme.color.white};
            text-align: left;
        }
        color: ${props => props.theme.color.white50};
        text-align: center;
	}

   tbody td {
        :nth-child(1) {
            color: ${props => props.theme.color.white};
            text-align: center;
		}
        text-align: center;
		padding: 20px 20px;
    }

	${text};
`;

Table.defaultProps = {
	version: 'pricing',
};
