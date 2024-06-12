import { createGlobalStyle } from 'styled-components';

// Styles
import { base, reset } from '../../theme/styles';

export const GlobalStyle = createGlobalStyle`
	${reset};
	${base};
`;
