import styled, { css } from 'styled-components';

// Atoms
import { Wrapper } from '../../Atoms';
import { WrapperAtomProps } from '../../Atoms/Wrapper/Wrapper';

export const HeaderWrapper = styled(Wrapper)<WrapperAtomProps & { isOpen: boolean }>`
	${props => props.isOpen && css`
		height: 100%;
		> section {
			height: 100%;
		}
	`};
`;
