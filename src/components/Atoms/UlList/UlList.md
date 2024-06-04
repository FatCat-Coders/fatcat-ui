An unordered list starts with the ULList tag. Each list item starts with the <li> tag. Props that we can use for this component are:

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

- `variant`
- `bulletColor`

## Styling

For better reusability, we define our style in the theme provider and then we use defined variation as such. For example if we want to override `base` unorder list variation we can do something like this:

-   first we define style

```jsx
const const ULLIST_VARIANT = {
	base: css`
		li::before {
			content: "•";
			font-weight: bold;
			display: inline-block;
			width: 1em;
			${props => props.bulletColor && `color: ${props.theme.color[props.bulletColor]};`}
		}
	`
}
```

-   and after we add sizes and styles to the theme

```jsx
import { UIThemeProvider } from "fatcat-ui-library/theme/theme";

const newTheme = {
	ullistVariant: ULLIST_VARIANT,
};

<UIThemeProvider theme={newTheme}>{children}</UIThemeProvider>;
```

-   and also provide types for TS

```jsx
import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		ullistVariant: FatCatTheme['ullistVariant'] & typeof ULLIST_VARIANT,
	}
}
```

## Usage

First we simply start with importing component:

```jsx

import { UlList } from 'fatcat-ui-library/components/Atoms/UlList';

```

and then simply use it in your code.

```jsx
<UlList  bulletColor="neutrals800">
	<Text as="li" fontSize="s24">item 1</Text>
	<Text as="li" fontSize="s24">item 2</Text>
	<Text as="li" fontSize="s24">item 3</Text>
	<Text as="li" fontSize="s24">item 4</Text>
</UlList>
```

Here we can test heading types already defined in library:
