Our Section component that we use as container layout in our project. It's made from two elements `inner` and `outer` and they recive separated props and they are listed here:

### Outer:
- `as` -- one of html elements `section` | `div` | `header` | `footer` default value is section
- `Background`
- `Visibility`
- `Overflow`
- `CustomCss`
- `edge` -- spread section to edges, removing paddings default value is false
- `sticky` -- change section to positon - sticky default value is false

### Inner:
- `Space`
- `width` -- one of key defined in theme `sectionWidth` default value is normal
- `scale` -- scale paddings inside inner element on beakpoints default value is false
## Usage 

First we simply start with importing component:

```

import { Section } from 'fatcat-ui-library/components/Molecules/Section';

```

and then simply use it in your code with the variaton you already provided in theme. If `$varinat` props is not provided Button use default value of `base` key from theme.

```jsx
<Section
	scale
>
	<Flex
		tablet={['column']}
	>
		<Wrapper>
			<Heading as="h1">This is title</Heading>
		</Wrapper>
		<Image src="https://some-random-url" alt="" />
	</Flex>
</Section>
```

Here we can see all variants alredy defined in library:
