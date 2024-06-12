## FatCat UI library

This is a small component library created by the FatCat development team using styled-components, the full component list can be seen here:
- [Storybook](https://master--62becb0e755df7ca358ea2ad.chromatic.com/)

## Instaling

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

2. Add the global styles to your project:

```ts
// env.d.ts

declare module "styled-components" {
	import { FatCatTheme } from 'fatcat-ui-library';
	interface DefaultTheme extends FatCatTheme {}
}
```

## Usage
To start using the components in your project, follow next steps:

```jsx

import { Button } from 'fatcat-ui-library/components/Atoms/Button';


<Button
  variant="some-variant"
>
  Button
</Button>
```
## Publishing

Publishing is done by using the following command from the project root:

```$xslt
npm run publish
```

For versioning we followed the semver principle

* MAJOR

* MINOR

* PATCH
