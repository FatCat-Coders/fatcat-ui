<br />

## Text Area Field
The TextArea tag defines a multi-line text input control. Props that we can use for this component are:

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

we can also use all html input attributes for this component such as: `placholder`, `type`, `rows` etc.

## 	Styling

For better reusability, we define our style in the theme provider and then we use defined variaton as such. For example if we want to override `base` input variation we can do something like this:

- first we add some styles

```jsx
/**
 * Also applied to the input element
 */
const INPUT_VARIANT = {
	base: css`
		appearance: none;
		border: 1px solid ${props => props.theme.color.white};
        padding: 21px;
        color: ${props => props.theme.textColor.primary};
		opacity: 50%;
        font-weight: ${props => props.theme.fontWeight.bold};
		background: none;
		position: relative;
		outline: 0;
		-webkit-background-clip: text;
		${props => props.theme.textSize.button};

		&:hover {
			border-color: ${props => props.theme.color.white};
            opacity: 100%;
		}

		&:focus {
			border-color: ${props => props.theme.color.yellow};
		}
		&::placeholder {
			color: ${props => props.theme.color.white};
			opacity: 50%;
			text-transform: uppercase;
		}
    `,
};
```

- and then add that style to theme


```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	inputVariant: INPUT_VARIANT,
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
		inputVariant: FatCatTheme['inputVariant'] & typeof INPUT_VARIANT
	}
}
```

## Usage 

First we simply start with importing component:

```jsx

import { TextAreaField } from 'fatcat-ui-library/components/Atoms/TextAreaField';

```

and then simply use it in your code.

```jsx
<Flex
	backgroundColor="backgroundUltraDark"
	padding={['t64', 'b64', 'l24', 'r24']}
>
	<TextAreaField 
		onChange={(e) => { setValue(e.target.value); }}
		value={value}
		rows={10}
	/>
</Flex>
```

Here we can see our example	:
