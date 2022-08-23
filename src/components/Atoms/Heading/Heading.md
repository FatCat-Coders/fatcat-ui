Simple Heading components that we can use for layout. Props that we can use for this component are:

- `Animation`
- `Background`
- `Border`
- `CustomCss`
- `Hover`
- `Overflow`
- `Position`
- `Responsive`
- `Size`
- `Space`
- `Text`
- `Transitions`
- `Visibility`

listed in `Element Props` section and additionally:

- `as`


## 	Styling

For better reusability, we define our style and size in the theme provider and then we use defined variation as such. For example, if we want to define desktop, tablet and mobile sizes for our `h1` element, we will add sizes first like this:

- first we define size

```jsx
const TEXT_SIZE = {
	h1: css`
		font-size: ${props => props.theme.fontSize.s54};
		line-height: ${props => props.theme.lineHeight.s125};
	`,
	h1LargeTablet: css`
		font-size: ${props => props.theme.fontSize.s42};
	`,
	h1Mobile: css`
		font-size: ${props => props.theme.fontSize.s30};
		line-height: ${props => props.theme.lineHeight.s100};
	`,
}
```
- and then we define our style and breakpoints for given element

```jsx
const const TEXT_STYLE = {
	h1: css`
		${props => props.theme.textSize.h1};
		font-weight: ${props => props.theme.fontWeight.bold};

		${props => props.theme.media.largeTablet} {
			${props => props.theme.textSize.h1LargeTablet};
		}

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.h1Mobile};
		}
	`,
}
```

- and after we add sizes and styles to the theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	textSize: TEXT_SIZE,
	textStyle: TEXT_STYLE,
}

<UIThemeProvider theme={newTheme}>
	{children}
</UIThemeProvider>
```

- and also provide types for TS

```jsx
import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		textSize: FatCatTheme['textSize'] & typeof TEXT_SIZE
		textStyle: FatCatTheme['textStyle'] & typeof TEXT_STYLE
	}
}
```

## Usage 

First we simply start with importing component:

```jsx

import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

```

and then simply use it in your code with the `as` props for changing type of heading element.

```jsx
<Heading
	as="h1"
>
	Title
</Heading>

```

Here we can test heading types already defined in library:
