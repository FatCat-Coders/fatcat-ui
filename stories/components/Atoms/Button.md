Simple Button components that we can use in our project. Props that we can use for this component are:

- `Animation`
- `Border`
- `Hover`
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

For better reusability, we define our style in the theme provider and then we use defined variaton as such. For example if we want to add a new `red` button variation and override `base` variation we can do something like this:

- first we add some styles

```jsx
const BUTTON_STYLE = {
	base: css`
		/** we can take color from theme */
		background-color: ${props => props.theme.color.yellow};
		min-width: 140px;
		border-radius: 12px;
		padding: 6px 12px;
		...some more CSS
	`,
	red: css`
		background-color: ${props => props.theme.color.red};
		...some more CSS
	`,
}
```
- and then add that style to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	buttonStyle: BUTTON_STYLE,
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
		buttonStyle: FatCatTheme['buttonStyle'] & typeof BUTTON_STYLE
	}
}
```

## Usage 

First we simply start with importing component:

```jsx

import { Button } from 'fatcat-ui-library/components/Atoms/Button';

```

and then simply use it in your code with the variaton you already provided in theme. If `$varinat` props is not provided Button use default value of `base` key from theme.

```jsx
<Button
	variant="some-variant"
>
	Button
</Button>
```

Here we can see all variants alredy defined in library:
