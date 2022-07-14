Simple Link component. Props that we can use for this component are:

- `Animation`
- `Position`
- `Space`
- `Border`
- `Text`
- `Visibility`
- `Hover`
- `Transitions`
- `Responsive`

listed in `Element Props` section and additionally:

- `variant`

## 	Styling

For better reusability, we define our style in the theme provider and then we use defined variaton as such. For example if we want to override `underline` and `disabled` link variation we can do something like this:

- first we add some styles

```jsx
const LINK_STYLE = {
	underline: css`
		color: -webkit-link;
		text-decoration: underline;
	`,
	disabled: css`
		color: ${props => props.theme.color.grey};
		cursor: not-allowed;
	`,
}
```
- and then add that style to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	linkStyle: LINK_STYLE,
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
		linkStyle: FatCatTheme['linkStyle'] & typeof LINK_STYLE
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
