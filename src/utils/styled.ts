import { default as styl } from 'styled-components'; // eslint-disable-line

// before adding new props to UI-components, check this prop list
// https://github.dev/styled-components/styled-components/tree/main/packages/styled-components
export const UIprops: string[] = [
	// animation props
	'animation',
	'animationName',
	'animationDuration',
	'animationTimingFunction',
	'animationDelay',
	'animationIterationCount',
	'animationDirection',
	'animationFillMode',
	'animationPlayState',
	// background props
	'backgroundColor',
	'backgroundColorOpacity',
	'backgroundImage',
	'backgroundRepeat',
	'backgroundPosition',
	'backgroundSize',
	'backgroundGradient',
	'backgroundBlur',
	'backgroundAttachment',
	'backgroundBlendMode',
	// border props
	'border',
	'borderTop',
	'borderRight',
	'borderBottom',
	'borderLeft',
	'borderRadius',
	'boxShadow',
	// flex props
	'flex',
	'direction',
	'alignItems',
	'justifyContent',
	'flexBasis',
	'wrap',
	'gap',
	// hover props
	'hover',
	// overflow props
	'overflow',
	'overflowY',
	'overflowX',
	// position props
	'position',
	'top',
	'right',
	'bottom',
	'left',
	'inset',
	'zIndex',
	'transform',
	'alignSelf',
	'order',
	// responsive props
	'mobile',
	'tablet',
	'largeTablet',
	'desktop',
	'largeDesktop',
	'desktopStandard',
	// size props
	'width',
	'maxWidth',
	'minWidth',
	'height',
	'maxHeight',
	'minHeight',
	// space props
	'padding',
	'paddingBottom',
	'paddingTop',
	'paddingLeft',
	'paddingRight',
	'margin',
	'marginBottom',
	'marginTop',
	'marginLeft',
	'marginRight',
	'scale',
	// text props
	'textAlign',
	'textColor',
	'textSize',
	'fontSize',
	'lineHeight',
	'fontWeight',
	'fontFamily',
	'whiteSpace',
	'uppercase',
	'lowercase',
	'ellipsis',
	'fontStyle',
	'textDecoration',
	'letterSpacing',
	'textColorOpacity',
	'textShadow',
	// transition props
	'transition',
	'transitionDelay',
	'transitionDuration',
	'transitionProperty',
	'transitionTimingFunction',
	'willChange',
	// visibility props
	'show',
	'hide',
	'visibility',
	'initialDisplay',
	'display',
	'opacity',
	// components props
	'variant',
	'rowGap',
	'gridTemplateColumns',
	'justifyItems',
	'inline',
	'edge',
	'sticky',
	'svgColor',
];

export const styled = (ele: any) => styl(ele).withConfig({
	shouldForwardProp: (prop: string) => !UIprops.includes(prop),
});
