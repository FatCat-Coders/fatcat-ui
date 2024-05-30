import {
	css,
	DefaultTheme,
	FlattenInterpolation,
	ThemeProps,
} from 'styled-components';

export const SECTION_VARIANT = {
	default: {
		container: css`
			padding: 0 ${props => props.theme.space.s40};
	
			${props => props.theme.media.largeTablet} {
				padding-left: ${props => props.theme.space.s32};
				padding-right: ${props => props.theme.space.s32};
			}
	
			${props => props.theme.media.mobile} {
				padding: 0 ${props => props.theme.space.s20};
			}
		`,
		content: css`
			width: 100%;
			max-width: 1024px;
		`,
	},
} satisfies Record<
	string,
	{
		container: FlattenInterpolation<ThemeProps<DefaultTheme>>,
		content: FlattenInterpolation<ThemeProps<DefaultTheme>>,
	}
>;
