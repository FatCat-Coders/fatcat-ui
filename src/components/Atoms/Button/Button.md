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
- `size`

## 	Styling

For better reusability, we define our style in the theme provider and then we use defined variaton as such. For example if we want to add a new `red` button variation and override `primary` variation we can do something like this:

- first we add some new variaton

```jsx
const BUTTON_VARIANT = {
	primary: css`
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

- then some new colors

```jsx
export const BUTTON_COLOR = {
	// we can style disabled global style for buttons
	disabled: {
		default: 'green',
		text:'dark',
	}
	//or we can pass new color schema for buttons
	green: {
		default: 'green',
		text:'dark',
		hover: 'greenLight',
		hoverText: 'grey',
	},
};
```

- or we can change diffrent sizes

```jsx
export const BUTTON_SIZE = {
	large: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s40};
	`,
	medium: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s24};
	`,
};
```

- and then add that definations to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	buttonColor: BUTTON_COLOR,
	buttonSize: BUTTON_SIZE,
	buttonVariant: BUTTON_VARIANT,
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
		buttonVariant: FatCatTheme['buttonVariant'] & typeof BUTTON_VARIANT
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
	color="some-color"
	size="some-size"
>
	Button
</Button>
```

Here we can see all variants alredy defined in library:
