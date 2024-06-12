import { css, DefaultTheme, CSSProp } from 'styled-components';
import { Properties } from 'csstype';

// Types
import { SideSpacingValue } from '../props';
import { HoverTypes } from '../props';

import { GapDefinition, SpaceDefinition } from '../definitions';

// helpers
import { createSideSpacingRule, parseSpace } from '../props';
import pickObjectProperties from '../../utils/pick-object-properties';

export const RESPONSIVE_BEHAVIORS = {
	// cursor
	pointer: css`
		cursor: pointer;
	`,
	resetCursor: css`
		cursor: auto;
	`,
	cursor: (value: Properties['cursor']) => css`
		cursor: ${value};
	`,
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
	wrap: css`
		flex-wrap: wrap;
	`,
	flexWrap: (value: Properties['flexWrap']) => css`
		flex-wrap: ${value};
	`,
	justifyContent: (value: Properties['justifyContent']) => css`
		justify-content: ${value};
	`,

	justifyItems: (value: Properties['justifyItems']) => css`
		justify-items: ${value};
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
	alignItems: (value: Properties['alignItems']) => css`
		align-items: ${value};
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
	flex: (value: Properties['flex']) => css`
		flex: ${value};
	`,
	clearFlex: css`
		flex: none;
	`,
	flexBasis: (value: Properties['flexBasis']) => css`
		flex-basis: ${value};
	`,
	flexGrow: (value: Properties['flexGrow']) => css`
		flex-grow: ${value};
	`,
	flexShrink: (value: Properties['flexShrink']) => css`
		flex-shrink: ${value};
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
	order: (value: Properties['order']) => css`
		order: ${value};
	`,
	// grid
	grid: (value: Properties['grid']) => css`
		grid: ${value};
	`,
	gridAutoColumns: (value: Properties['gridAutoColumns']) => css`
		grid-auto-columns: ${value};
	`,
	gridAutoFlow: (value: Properties['gridAutoFlow']) => css`
		grid-auto-flow: ${value};
	`,
	gridAutoRows: (value: Properties['gridAutoRows']) => css`
		grid-auto-rows: ${value};
	`,
	gridTemplateAreas: (value: Properties['gridTemplateAreas']) => css`
		grid-template-areas: ${value};
	`,
	gridTemplateColumns: (value: Properties['gridTemplateColumns']) => css`
		grid-template-columns: ${value};
	`,
	gridTemplateRows: (value: Properties['gridTemplateRows']) => css`
		grid-template-rows: ${value};
	`,
	// border
	borderNone: css`
		border: unset;
	`,
	borderRadius: (value: Properties['borderRadius']) => css`
		border-radius: ${value};
	`,
	border: (value: Properties['border']) => css`
		border: ${value};
	`,
	borderWidth: (value: Properties['borderWidth']) => css`
		border-width: ${value};
	`,
	borderStyle: (value: Properties['borderStyle']) => css`
		border-style: ${value};
	`,
	borderColor: (value: Properties['borderColor']) => css`
		border-color: ${value};
	`,
	borderLeft: (value: Properties['borderLeft']) => css`
		border-left: ${value};
	`,
	borderTop: (value: Properties['borderTop']) => css`
		border-top: ${value};
	`,
	borderRight: (value: Properties['borderRight']) => css`
		border-right: ${value};
	`,
	borderBottom: (value: Properties['borderBottom']) => css`
		border-bottom: ${value};
	`,
	boxShadow: (value: Properties['boxShadow']) => css`
		box-shadow: ${value};
	`,
	// backgrounds
	unsetBackgroundImage: css`
		background-image: none;
	`,
	background: (value: Properties['background']) => css`
		background: ${props => (props.theme.backgroundColor[value] ? props.theme.backgroundColor[value] : value)};
	`,
	backgroundImage: (value: string) => value && css`
		background-image: ${['none', 'initial', 'inherit'].includes(value) ? value : `url(${value})`};
	`,
	backgroundGradient: (value: string) => css`
		background: ${value};
	`,
	backgroundColor: (value: keyof DefaultTheme['backgroundColor']) => css`
		background-color: ${props => props.theme.color[value]};
	`,
	backgroundColorHex: (value: Properties['backgroundColor']) => css`
		background-color: ${value};
	`,
	backgroundSize: (value: Properties['backgroundSize']) => css`
		background-size: ${value};
	`,
	backgroundPosition: (value: Properties['backgroundPosition']) => css`
		background-position: ${value};
	`,
	backgroundRepeat: (value: Properties['backgroundRepeat']) => css`
		background-repeat: ${value};
	`,
	backgroundAttachment: (value: Properties['backgroundAttachment']) => css`
		background-attachment: ${value};
	`,
	backgroundBlur: (value: number) => css`
		backdrop-filter: blur(${value});
	`,
	backdropFilter: (value: Properties['backdropFilter']) => css`
		backdrop-filter: ${value};
	`,
	backgroundBlendMode: (value: Properties['backgroundBlendMode']) => css`
		background-blend-mode: ${value};
	`,
	filter: (value: Properties['filter']) => css`
		filter: ${value};
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
	paddingTop: (value: SpaceDefinition) => css`
		padding-top: ${props => props.theme.space[value]};
	`,
	paddingRight: (value: SpaceDefinition) => css`
		padding-right: ${props => props.theme.space[value]};
	`,
	paddingBottom: (value: SpaceDefinition) => css`
		padding-bottom: ${props => props.theme.space[value]};
	`,
	paddingLeft: (value: SpaceDefinition) => css`
		padding-left: ${props => props.theme.space[value]};
	`,
	paddingX: (value: SpaceDefinition) => css`
		padding-left: ${props => props.theme.space[value]};
		padding-right: ${props => props.theme.space[value]};
	`,
	paddingY: (value: SpaceDefinition) => css`
		padding-top: ${props => props.theme.space[value]};
		padding-bottom: ${props => props.theme.space[value]};
	`,
	margin: (value: SideSpacingValue[]) => css`
		${props => createSideSpacingRule('margin', parseSpace(value, props.theme.space))};
	`,
	marginTop: (value: SpaceDefinition) => css`
		margin-top: ${props => props.theme.space[value]};
	`,
	marginRight: (value: SpaceDefinition) => css`
		margin-right: ${props => props.theme.space[value]};
	`,
	marginBottom: (value: SpaceDefinition) => css`
		margin-bottom: ${props => props.theme.space[value]};
	`,
	marginLeft: (value: SpaceDefinition) => css`
		margin-left: ${props => props.theme.space[value]};
	`,
	marginX: (value: SpaceDefinition) => css`
		margin-left: ${props => props.theme.space[value]};
		margin-right: ${props => props.theme.space[value]};
	`,
	marginY: (value: SpaceDefinition) => css`
		margin-top: ${props => props.theme.space[value]};
		margin-bottom: ${props => props.theme.space[value]};
	`,
	gap: (value: GapDefinition) => css`
		gap: ${props => props.theme.gap[value]};
	`,
	// opacity
	opacity: (value: Properties['opacity']) => css`
		opacity: ${value};
	`,
	pointerEvents: (value: Properties['pointerEvents']) => css`
		pointer-events: ${value};
	`,
	// overflow
	overflow: (value: Properties['overflow']) => css`
		overflow: ${value};
	`,
	overflowY: (value: Properties['overflowY']) => css`
		overflow-y: ${value};
	`,
	overflowX: (value: Properties['overflowX']) => css`
		overflow-x: ${value};
	`,
	// text
	textColor: (value: keyof DefaultTheme['textColor']) => css`
		color: ${props => props.theme.textColor[value]};
	`,
	textColorHex: (value: string) => css`
		background-color: ${value};
	`,
	textSize: (value: keyof DefaultTheme['textSize']) => css`
		${props => props.theme.textSize[value]};
	`,
	textAlign: (value: Properties['textAlign']) => css`
		text-align: ${value};
	`,
	textShadow: (value: Properties['textShadow']) => css`
		text-shadow: ${value};
	`,
	textDirection: (value: Properties['direction']) => css`
		direction: ${value};
	`,
	textDecoration: (value: Properties['textDecoration']) => css`
		text-decoration: ${value};
	`,
	textTransform: (value: Properties['textTransform']) => css`
		text-transform: ${value};
	`,
	uppercase: css`
		text-transform: uppercase;
	`,
	lowercase: css`
		text-transform: lowercase;
	`,
	capitalize: css`
		text-transform: capitalize;
	`,
	fontFamily: (value: keyof DefaultTheme['fontFamily']) => css`
		font-family: ${props => props.theme.fontFamily[value]};
	`,
	fontSize: (value: keyof DefaultTheme['fontSize']) => css`
		font-size: ${props => props.theme.fontSize[value]};
	`,
	fontWeight: (value: keyof DefaultTheme['fontWeight']) => css`
		font-weight: ${props => props.theme.fontWeight[value]};
	`,
	fontStyle: (value: Properties['fontStyle']) => css`
		font-style: ${value};
	`,
	letterSpacing: (value: Properties['letterSpacing']) => css`
		letter-spacing: ${value};
	`,
	lineHeight: (value: keyof DefaultTheme['lineHeight']) => css`
		line-height: ${props => props.theme.lineHeight[value]};
	`,
	whiteSpace: (value: Properties['whiteSpace']) => css`
		white-space: ${value};
	`,
	textNoWrap: css`
		white-space: nowrap;
	`,
	textPreWrap: css`
		white-space: pre-wrap;
	`,
	ellipsis: (value: number) => css`
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box; // will this work on IE?
		-webkit-box-orient: vertical;
		-webkit-line-clamp: ${value};
	`,
	unicodeBidi: (value: Properties['unicodeBidi']) => css`
		unicode-bidi: ${value};
	`,
	// width and heights
	autoW: css`
		width: auto;
	`,
	autoH: css`
		height: auto;
	`,
	split: css`
		max-width: 50%;
		width: 100%;
	`,
	maxW: (value: Properties['maxWidth']) => css`
		max-width: ${value};
	`,
	minW: (value: Properties['minWidth']) => css`
		min-width: ${value};
	`,
	minH: (value: Properties['minHeight']) => css`
		min-height: ${value};
	`,
	maxH: (value: Properties['maxHeight']) => css`
		max-height: ${value};
	`,
	w: (value: Properties['width']) => css`
		width: ${value};
	`,
	h: (value: Properties['height']) => css`
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
	transformOrigin: (value: Properties['transformOrigin']) => css`
		transform-origin: ${value};
	`,
	alignSelf: (value: Properties['alignSelf']) => css`
		align-self: ${value};
	`,
	perspective: (value: Properties['perspective']) => css`
		perspective: ${value};
	`,
	perspectiveOrigin: (value: Properties['perspectiveOrigin']) => css`
		perspective-origin: ${value};
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
	// transition
	transition: (value: Properties['transition']) => css`
		transition: ${value};
	`,
	transitionDelay: (value: Properties['transitionDelay']) => css`
		transition-delay: ${value};
	`,
	transitionDuration: (value: Properties['transitionDuration']) => css`
		transition-duration: ${value};
	`,
	transitionProperty: (value: Properties['transitionProperty']) => css`
		transition-property: ${value};
	`,
	transitionTimingFunction: (value: Properties['transitionTimingFunction']) => css`
		transition-timing-function: ${value};
	`,
	willChange: (value: Properties['willChange']) => css`
		will-change: ${value};
	`,
	// hover
	// @TODO: check if pickObjectProperties is working properly here because it returns FlattenSimpleInterpolation array
	hover: (value: HoverTypes) => css`
		&:hover {
			${props => pickObjectProperties(props.theme.hover, value)}
		}
	`,
	// IMPORTANT: leave this props on bottom of the list
	styled: (value: CSSProp) => css`
		${value}
	`,
};
