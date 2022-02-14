import { css, DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';

// Types
import { SideSpacingValue } from '../props/space/space';
import { HoverTypes } from '../props/hover/hover';

// helpers
import { createSideSpacingRule, parseSpace } from '../props';
import pickObjectProperties from '../../utils/pick-object-properties';

export const RESPONSIVE_BEHAVIORS = {
	// flex
	fluid: css`
		width: 100%;
		min-width: auto;
		max-width: 100%;
		flex-basis: auto;
	`,
	contentCenter: css`
		justify-content: center;
		align-items: center;
	`,
	flexWrap: css`
		flex-wrap: wrap;
	`,
	spaceBetween: css`
		justify-content: space-between;
	`,
	justifyContentFlexStart: css`
		justify-content: flex-start;
	`,
	justifyContentFlexEnd: css`
		justify-content: flex-end;
	`,
	justifyContentCenter: css`
		justify-content: center;
	`,
	alignItemsCenter: css`
		align-items: center;
	`,
	alignItemsStart: css`
		align-items: flex-start;
	`,
	alignItemsEnd: css`
		align-items: flex-end;
	`,
	slideHorizontal: css`
		display: flex;
		justify-content: flex-start;
		overflow-x: scroll;
	`,
	clearFlex: css`
		flex: none;
	`,
	row: css`
		flex-direction: row;
	`,
	column: css`
		flex-direction: column;
	`,
	columnReverse: css`
		flex-direction: column-reverse;
	`,
	rowReverse: css`
		flex-direction: row-reverse;
	`,
	// border
	clearTopBorder: css`
		border-top: unset;
	`,
	borderNone: css`
		border: unset;
	`,
	setBorderRadius: (value: Properties['borderRadius']) => css`
		border-radius: ${value};
	`,
	setBorder: (value: Properties['border']) => css`
		border: ${value};
	`,
	setBorderLeft: (value: Properties['borderLeft']) => css`
		border-left: ${value};
	`,
	setBorderTop: (value: Properties['borderTop']) => css`
		border-top: ${value};
	`,
	setBorderRight: (value: Properties['borderRight']) => css`
		border-right: ${value};
	`,
	setBorderBottom: (value: Properties['borderBottom']) => css`
		border-bottom: ${value};
	`,
	boxShadow: (value: Properties['boxShadow']) => css`
		box-shadow: ${value};
	`,
	// backgrounds
	unsetBackgroundImage: css`
		background-image: none;
	`,
	backgroundImage: (value: string) => value && css`
		background-image: url(${value});
	`,
	backgroundGradient: (value: string) => css`
		background: ${value};
	`,
	backgroundColor: (value: keyof DefaultTheme['color']) => css`
		background-color: ${props => props.theme.color[value]};;
	`,
	backgroundSize: (value: Properties['backgroundSize']) => css`
		background-size: ${value};
	`,
	backgroundPosition: (value: Properties['backgroundPosition']) => css`
		background-position: ${value};
	`,
	// spacing
	clearSideSpacing: css`
		margin-right: 0;
		margin-left: 0;
		padding-left: 0;
		padding-right: 0;
	`,
	clearLeftSideSpacing: css`
		margin-left: 0;
		padding-left: 0;
	`,
	clearRightSideSpacing: css`
		margin-right: 0;
		padding-right: 0;
	`,
	clearTopSideSpacing: css`
		margin-top: 0;
		padding-top: 0;
	`,
	clearBottomSideSpacing: css`
		margin-bottom: 0;
		padding-bottom: 0;
	`,
	padding: (value: SideSpacingValue[]) => css`
		${props => createSideSpacingRule('padding', parseSpace(value, props.theme.space))};
	`,
	margin: (value: SideSpacingValue[]) => css`
		${props => createSideSpacingRule('margin', parseSpace(value, props.theme.space))};
	`,
	gap: (value: Properties['gap']) => css`
		gap: ${value};
	`,
	// opacity
	opacity: (value: Properties['opacity']) => css`
		opacity: ${value};
	`,
	// text
	textColor: (value: keyof DefaultTheme['textColor']) => css`
		color: ${props => props.theme.textColor[value]};
	`,
	textSize: (value: keyof DefaultTheme['textSize']) => css`
		${props => props.theme.textSize[value]};
	`,
	fontSize: (value: keyof DefaultTheme['fontSize']) => css`
		font-size: ${props => props.theme.fontSize[value]};
	`,
	fontWeight: (value: keyof DefaultTheme['fontWeight']) => css`
		font-weight: ${props => props.theme.fontWeight[value]};
	`,
	letterSpacing: (value: Properties['letterSpacing']) => css`
		letter-spacing: ${value};
	`,
	lineHeight: (value: keyof DefaultTheme['lineHeight']) => css`
		line-height: ${props => props.theme.lineHeight[value]};
	`,
	noWrap: css`
		white-space: nowrap;
	`,
	preWrap: css`
		white-space: pre-wrap;
	`,
	// width and heights
	autoWidth: css`
		width: auto;
	`,
	autoHeight: css`
		height: auto;
	`,
	split: css`
		max-width: 50%;
		width: 100%;
	`,
	maxWidth: (value: Properties['maxWidth']) => css`
		max-width: ${value};
	`,
	minWidth: (value: Properties['minWidth']) => css`
		min-width: ${value};
	`,
	minHeight: (value: Properties['minHeight']) => css`
		min-height: ${value};
	`,
	maxHeight: (value: Properties['maxHeight']) => css`
		max-height: ${value};
	`,
	width: (value: Properties['width']) => css`
		width: ${value};
	`,
	height: (value: Properties['height']) => css`
		height: ${value};
	`,
	// positions
	textCenter: css`
		text-align: center;
	`,
	textLeft: css`
		text-align: left;
	`,
	textRight: css`
		text-align: right;
	`,
	unsetPosition: css`
		position: unset;
	`,
	fixedPosition: css`
		position: fixed;
	`,
	position: (value: Properties['position']) => css`
		position: ${value};
	`,
	top: (value: Properties['top']) => css`
		top: ${value};
	`,
	left: (value: Properties['left']) => css`
		left: ${value};
	`,
	right: (value: Properties['right']) => css`
		right: ${value};
	`,
	bottom: (value: Properties['bottom']) => css`
		bottom: ${value};
	`,
	inset: (value: Properties['inset']) => css`
		inset: ${value};
	`,
	zIndex: (value: Properties['zIndex']) => css`
		z-index: ${value};
	`,
	transform: (value: Properties['transform']) => css`
		transform: ${value};
	`,
	alignSelf: (value: Properties['alignSelf']) => css`
		align-self: ${value};
	`,
	// visibility
	visibility: (value: Properties['visibility']) => css`
		visibility: ${value};
	`,
	display: (value: Properties['display']) => css`
		display: ${value};
	`,
	// animation
	animation: (value: [keyof DefaultTheme['animation'], Properties['animation']]) => value.length === 2 && css`
		animation: ${props => props.theme.animation[value[0]]} ${value[1]};
	`,
	animationName: (value: keyof DefaultTheme['animation']) => css`
		animation-name: ${props => props.theme.animation[value]};
	`,
	animationDuration: (value: Properties['animationDuration']) => css`
		animation-duration: ${value};
	`,
	animationTimingFunction: (value: Properties['animationTimingFunction']) => css`
		animation-timing-function: ${value};
	`,
	animationDelay: (value: Properties['animationDelay']) => css`
		animation-delay: ${value};
	`,
	animationIterationCount: (value: Properties['animationIterationCount']) => css`
		animation-iteration-count: ${value};
	`,
	animationDirection: (value: Properties['animationDirection']) => css`
		animation-direction: ${value};
	`,
	animationFillMode: (value: Properties['animationFillMode']) => css`
		animation-fill-mode: ${value};
	`,
	animationPlayState: (value: Properties['animationPlayState']) => css`
		animation-play-state: ${value};
	`,
	// hover
	hover: (value: (HoverTypes | Partial<Record<HoverTypes, any>>)[]) => css`
		&:hover {
			${props => pickObjectProperties(props.theme.hover, value)}
		}
	`,
};
