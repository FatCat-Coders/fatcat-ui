An unordered list starts with the ULList tag. Each list item starts with the <li> tag. Props that we can use for this component are:

- `Animation`
- `Hover`
- `Position`
- `Responsive`
- `Space`
- `Text`
- `Visibility`

listed in `Element Props` section and additionally:

- `$variant`
- `$bulletColor`

## Styling

For better reusability, we define our style in the theme provider and then we use defined variation as such. For example if we want to override `base` unorder list variation we can do something like this:

-   first we define style

```jsx
const const ULLIST_STYLE = {
	base: css`
		li::before {
			content: "•";
			position: absolute;
			display: block;
			height: 10px;
			width: 10px;
			left: -24px;
			top: 1px;
			font-size:24px;

			${props => props.theme.media.tablet} {
				top: -6px;
			}
			${props => props.$bulletColor && `color: ${props.theme.color[props.$bulletColor]}`}
		}
	`
}
```

-   and after we add sizes and styles to the theme

```jsx
import { UIThemeProvider } from "fatcat-ui-library/theme/theme";

const newTheme = {
	ullistStyle: ULLIST_STYLE,
};

<UIThemeProvider theme={newTheme}>{children}</UIThemeProvider>;
```

-   and also provide types for TS

```jsx
import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		ullistStyle: FatCatTheme['ullistStyle'] & typeof ULLIST_STYLE,
	}
}
```

## Usage

First we simply start with importing component:

```jsx

import { ULList } from 'fatcat-ui-library/components/Atoms/ULList';

```

and then simply use it in your code.

```jsx
<ULList>
	<Text as="li" $fontSize="s24">item 1</Text>
	<Text as="li" $fontSize="s24">item 2</Text>
	<Text as="li" $fontSize="s24">item 3</Text>
	<Text as="li" $fontSize="s24">item 4</Text>
</ULList>
```

Here we can test heading types already defined in library:
