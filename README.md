## FatCat UI library

### Start

1. Install node dependencies:

```$xsl
npm i fatcat-ui-library 
```

and then add theme provider for our project

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

<UIThemeProvider>
	{children}
</UIThemeProvider>
```
### Usage

```jsx

import { Button } from 'fatcat-ui-library/components/Atoms/Button';


<Button
	$variant="some-variant"
>
	Button
</Button>
```
### Publishing

Publishing is done by using the following command from the project root:

```$xslt
npm run publish
```

For versioning we followed the semver principle

* MAJOR

* MINOR

* PATCH
