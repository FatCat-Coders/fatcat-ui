import { FatCatTheme } from './theme/theme';

import 'styled-components';

declare module 'styled-components' {
	// eslint-disable-next-line
	interface DefaultTheme extends FatCatTheme {}
}
