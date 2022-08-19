List of grid props, and example.

## 	Definition

The Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

Property that adds to the component are:

- `gap (default: 16px)` 
- `rowGap`
- `grid`
- `gridTemplateAreas`
- `gridTemplateColumns`
- `gridTemplateRows`
- `gridAutoColumns`
- `gridAutoFlow`
- `gridAutoRows`
- `alignItems`
- `justifyContent`
- `justifyItems`

## Usage 

```jsx
<Grid
	gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
>
	<div style={{ width: '200px'}} />
	<div style={{ width: '100px'}} />
	<div style={{ width: '200px'}} />
	<div style={{ width: '300px'}} />
</Grid>
```

Here we can see example:
