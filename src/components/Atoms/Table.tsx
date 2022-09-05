import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../utils/ui-props';

import { generalProps, GeneralProps } from '../../theme/props';

export type TTable = {
	variant?: keyof DefaultTheme['tableStyle']
} & GeneralProps;

export const Table = styled.table.withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TTable>`
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

	${props => props.variant && props.theme.tableStyle[props.variant]};
	${generalProps};
`;

Table.defaultProps = {
	variant: 'pricing',
};
