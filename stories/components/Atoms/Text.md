The Text component or <span> tag is an inline container used to mark up a part of a text, or a part of a document. Props that we can use for this component are:

- `Animation`
- `Background`
- `Border`
- `Hover`
- `Position`
- `Responsive`
- `Size`
- `Space`
- `Text`
- `Transitions`
- `Visibility`

listed in `Element Props` section.


## 	Styling

For better reusability, we define our style and size in the theme provider and then we use defined variation as such. For example, if we want to define desktop, tablet and mobile sizes for our `text` element, we will add sizes first like this:

- first we define size

```jsx
const TEXT_SIZE = {
	text: css`
		font-size: ${props => props.theme.fontSize.s54};
		line-height: ${props => props.theme.lineHeight.s125};
	`,
	textLargeTablet: css`
		font-size: ${props => props.theme.fontSize.s42};
	`,
	textMobile: css`
		font-size: ${props => props.theme.fontSize.s30};
		line-height: ${props => props.theme.lineHeight.s100};
	`,
}
```
- and then we define our style and breakpoints for given element

```jsx
const const TEXT_STYLE = {
	text: css`
		${props => props.theme.textSize.text};
		font-weight: ${props => props.theme.fontWeight.bold};

		${props => props.theme.media.largeTablet} {
			${props => props.theme.textSize.textLargeTablet};
		}

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.textMobile};
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

import { Text } from 'fatcat-ui-library/components/Atoms/Text';

```

and then simply use it in your code.

```jsx
<Text textColor="black">
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
	the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
	but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
	sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</Text>

```

Here we can test heading types already defined in library:
