List of transition props, and example.

## 	Definition

CSS transitions allows you to change property values smoothly, over a given duration.

Property that adds to the component are:

- `transition`
- `transitionDelay`
- `transitionDuration`
- `transitionProperty`
- `transitionTimingFunction`
- `willChange`

## Usage 

```jsx
<Wrapper
	transition="background-color 300ms ease-in-out"
	w="200px"
	h="200px"
	backgroundColor="primary"
	hover={[{ backgroundColorHex: '#1D1D1E' }]}
/>
```

Here we can see example:
