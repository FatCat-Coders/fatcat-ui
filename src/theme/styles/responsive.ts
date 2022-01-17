import { css } from 'styled-components';

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
	justifyContentCenter: css`
		justify-content: center;
	`,
	alignItemsCenter: css`
		align-items: center;
	`,
	alignItemsStart: css`
		align-items: flex-start;
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
	setBorderRadius: value => css`
		border-radius: ${value};
	`,
	setBorderLeft: value => css`
		border-left: ${value};
	`,
	setBorderTop: value => css`
		border-top: ${value};
	`,
	setBorderRight: value => css`
		border-right: ${value};
	`,
	boxShadow: value => css`
		box-shadow: ${value};
	`,
	// backgrounds
	unsetBackgroundImage: css`
		background-image: none;
	`,
	backgroundImage: value => css`
		background-image: url(${value});
	`,
	backgroundSize: value => css`
		background-size: ${value};
	`,
	backgroundPosition: value => css`
		background-position: ${value};
	`,
	reduceBackgroundSize: (value = '50%') => css`
		background-size: ${value};
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
	padding: value => css`
		${props => createSideSpacingRule('padding', parseSpace(value, props.theme.space))}
	`,
	margin: value => css`
		${props => createSideSpacingRule('margin', parseSpace(value, props.theme.space))}
	`,
	// text
	textSize: value => css`
		${props => props.theme.textSize[value]};
	`,
	fontSize: value => css`
		font-size: ${props => props.theme.fontSize[value]};
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
	maxWidth: value => css`
		max-width: ${value};
	`,
	minWidth: value => css`
		min-width: ${value};
	`,
	minHeight: value => css`
		min-height: ${value};
	`,
	maxHeight: value => css`
		max-height: ${value};
	`,
	width: value => css`
		width: ${value};
	`,
	height: value => css`
		height: ${value};
	`,
	// positions
	textCenter: css`
		text-align: center;
	`,
	textLeft: css`
		text-align: left;
	`,
	unsetPosition: css`
		position: unset;
	`,
	fixedPosition: css`
		position: fixed;
	`,
	top: value => css`
		top: ${value};
	`,
	left: value => css`
		left: ${value};
	`,
	right: value => css`
		right: ${value};
	`,
	bottom: value => css`
		bottom: ${value};
	`,
	// visibility
	hide: css`
		visibility: hidden;
	`,
	// hover
	hover: value => css`
		&:hover {
			${props => pickObjectProperties(props.theme.hover, value)}
		}
	`,
};
