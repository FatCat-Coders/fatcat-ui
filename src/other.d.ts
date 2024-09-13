import { FatCatTheme } from './theme/theme';

declare module 'styled-components' {
	// eslint-disable-next-line
	export interface DefaultTheme extends FatCatTheme {}
}
