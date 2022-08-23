An ordered list starts with the OlList tag. Each list item starts with the <li> tag. Props that we can use for this component are:

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

For better reusability, we define our style in the theme provider and then we use defined variation as such. For example if we want to override `base` order list variation we can do something like this:

-   first we define style

```jsx
const const OLLIST_STYLE = {
	base: css`
		li::before {
			content: counter(item) ". ";
		}
	`,
	alphabet: css`
		li::before {
			content: counter(item, lower-alpha) ". ";
		}
	`,
}
```

-   and after we add sizes and styles to the theme

```jsx
import { UIThemeProvider } from "fatcat-ui-library/theme/theme";

const newTheme = {
	ollistStyle: OLLIST_STYLE,
};

<UIThemeProvider theme={newTheme}>{children}</UIThemeProvider>;
```

-   and also provide types for TS

```jsx
import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		ollistStyle: FatCatTheme['ollistStyle'] & typeof OLLIST_STYLE,
	}
}
```

## Usage

First we simply start with importing component:

```jsx

import { OlList } from 'fatcat-ui-library/components/Atoms/OlList';

```

and then simply use it in your code.

```jsx
<OlList bulletColor="black">
	<Text as="li">item 1</Text>
	<Text as="li">item 2</Text>
	<Text as="li">item 3</Text>
	<Text as="li">item 4</Text>
</OlList>
```

Here we can test heading types already defined in library:
