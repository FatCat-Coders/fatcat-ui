Simple Link component. Props that we can use for this component are:

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

## 	Styling

For better reusability, we define our style in the theme provider and then we use defined variaton as such. For example if we want to override `underline` and `disabled` link variation we can do something like this:

- first we add some styles

```jsx
const LINK_VARIANT = {
	underline: css`
		color: -webkit-link;
		text-decoration: underline;
	`,
	disabled: css`
		color: ${props => props.theme.color.neutrals500};
		cursor: not-allowed;
	`,
}
```
- and then add that style to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	linkVariant: LINK_VARIANT,
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
		linkVariant: FatCatTheme['linkVariant'] & typeof LINK_VARIANT
	}
}
```

## Usage 

First we simply start with importing component:

```jsx

import { Link } from 'fatcat-ui-library/components/Atoms/Link';

```

and then simply use it in your code.

```jsx
<Flex
	padding={['t64', 'b64']}
>
	<Link
		to="https://fatcatcoders.com"
	>
		FatCat Coders
	</Link>
</Flex>
```

Here we can see our example	:
