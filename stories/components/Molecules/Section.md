Our Section component that we use as container layout in our project. It's made from two elements `inner` and `outer` and they recive separated props and they are listed here:

### Outer:
- `as`
- `$backgroundColor`
- `$backgroundColorOpacity`
- `$backgroundGradient`
- `$backgroundImage`
- `$backgroundPosition`
- `$backgroundRepeat`
- `$backgroundSize`
- `$desktop`
- `$desktopStandard`
- `$edge`
- `$hide`
- `$iDesktop`
- `$iDesktopStandard`
- `$iLargeDesktop`
- `$iLargeTablet`
- `$iMobile`
- `$iTablet`
- `$largeDesktop`
- `$largeTablet`
- `$margin`
- `$mobile`
- `$overflow`
- `$padding`
- `$position`
- `$scale`
- `$show`
- `$sticky`
- `$tablet`
- `$width`
- `$zIndex`

### Inner:


## 	Styling

For better reusability, we define our style in the theme provider and then we use defined variaton as such. For example if we want to add a new `red` button variation and override `base` variation we can do something like this:

- first we add some styles

```
const BUTTON_STYLE = {
	base: {
		/** we can take color form theme*/
		background-color: ${props => props.theme.color.yellow};
		min-width: 140px;
		border-radius: 12px;
		padding: 6px 12px;
		...some more CSS
	},
	red: {
		background-color: ${props => props.theme.color.red};
		...some more CSS
	}
}
```
- and then add that style to theme

```
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	buttonStyle: BUTTON_STYLE,
}

<UIThemeProvider theme={newTheme}>
	{children}
</UIThemeProvider>
```

- and also provide types for TS

```
import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		buttonStyle: FatCatTheme['buttonStyle'] & typeof BUTTON_STYLE
	}
}
```

## Usage 

First we simply start with importing component:

```

import { Button } from 'fatcat-ui-library/components/Atoms/Button';

```

and then simply use it in your code with the variaton you already provided in theme. If `$varinat` props is not provided Button use default value of `base` key from theme.

```
<Button
	$variant="some-variant"
>
	Button
</Button>
```

Here we can see all variants alredy defined in library:
