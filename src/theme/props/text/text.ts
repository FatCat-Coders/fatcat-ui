import { css, DefaultTheme } from 'styled-components';
import { rgba } from 'polished';
import { Properties } from 'csstype';

export type TextProps = {
	textAlign?: Properties['textAlign']
	textColor?: keyof DefaultTheme['textColor']
	textSize?: keyof DefaultTheme['textSize']
	fontSize?: keyof DefaultTheme['fontSize']
	lineHeight?: keyof DefaultTheme['lineHeight']
	fontWeight?: keyof DefaultTheme['fontWeight']
	fontFamily?: keyof DefaultTheme['fontFamily']
	whiteSpace?: Properties['whiteSpace']
	uppercase?: boolean
	lowercase?: boolean
	capitalize?: boolean
	ellipsis?: number
	fontStyle?: Properties['fontStyle']
	textDecoration?: Properties['textDecoration']
	letterSpacing?: Properties['letterSpacing']
	textColorOpacity?: number
	textShadow?: Properties['textShadow']
	textDirection?: Properties['direction']
	unicodeBidi?: Properties['unicodeBidi']
};

export const text = css<TextProps>`
	${props => props.whiteSpace && `white-space: ${props.whiteSpace};`}
	${props => props.letterSpacing && `letter-spacing: ${props.letterSpacing};`}
	${props => props.textAlign && `text-align: ${props.textAlign};`}
	${props => props.textColor && props.theme.textColor[props.textColor]
			&& `color: ${props.textColorOpacity ? rgba(props.theme.textColor[props.textColor], props.textColorOpacity) : props.theme.textColor[props.textColor]};`}
	${props => props.textSize && props.theme.textSize[props.textSize]}
	${props => props.fontSize && props.theme.fontSize[props.fontSize] && `font-size: ${props.theme.fontSize[props.fontSize]};`}
	${props => props.lineHeight && props.theme.lineHeight[props.lineHeight] && `line-height: ${props.theme.lineHeight[props.lineHeight]};`}
	${props => props.fontWeight && props.theme.fontWeight[props.fontWeight] && `font-weight: ${props.theme.fontWeight[props.fontWeight]};`}
	${props => props.fontFamily && props.theme.fontFamily[props.fontFamily] && `font-family: ${props.theme.fontFamily[props.fontFamily]};`}
	${props => props.uppercase && 'text-transform: uppercase;'}
	${props => props.lowercase && 'text-transform: lowercase;'}
	${props => props.capitalize && 'text-transform: capitalize;'}
	${props => props.fontStyle && `font-style: ${props.fontStyle};`}
	${props => props.textDecoration && `text-decoration: ${props.textDecoration};`}
	${props => props.textDirection && `direction: ${props.textDirection};`}
	${props => props.unicodeBidi && `unicode-bidi: ${props.unicodeBidi};`}
	${props => props.ellipsis && css`
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box; // will this work on IE?
		-webkit-box-orient: vertical;
		-webkit-line-clamp: ${props.ellipsis};
	`}
	${props => props.textShadow && `text-shadow: ${props.textShadow};`}
`;
