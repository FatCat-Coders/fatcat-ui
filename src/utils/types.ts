export type ContentfulFileType = {
	file: {
		url: string,
	}
}

export type HeadingType = {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type ContentfulMeta = {
	ogImage: ContentfulFileType,
	metaDescription: string,
	pageTitle: string,
}

export type THead = {
	meta: {
		pageTitle: string,
		metaDescription: string,
		metaKeywords?: string
		ogTitle?: string,
		ogDescription?: string,
		ogImage?: {
			file: {
				url: string
			}
		}
		twitterTitle?: string,
		twitterDescription?: string,
		twitterImage?: {
			file: {
				url: string
			}
		}
	}
}

export type TContentfulAsset = {
	file: {
		url: string
	}
}

// Parsed contentful link
export type TParsedLink = {
	to: string
	title: string
	icon?: string
	as: React.ElementType | HTMLElementTagNameMap
	'aria-label': string
	target: '_self' | '_blank'
}

export type TContentfulOptions = {
	identifier: string
	key: string
	value: string
}

// Contentful link definition
export type TContentfulLink = {
	identifier: string
	title: string
	url: string
	icon?: TContentfulAsset
	page?: {
		slug: string
		__typename: string
	}
	asset?: {
		file: {
			url: string
		}
	}
	openInNewTab: boolean
	items?: TContentfulLink[]
}

type ButtonColorVariants = 'primary' | 'secondary' | 'secondaryInvert' | 'ghost' |
'ghostInvert' | 'outline' | 'outlineInvert' | 'textLink' | 'textLinkInvert' | 'navLink' |
'navLinkInvert' | 'success';
interface ButtonState {
    background: string;
    text: string;
    ringColor?: string;
    underLineColor?: string;
}

interface ButtonType {
    default: ButtonState;
    hover: ButtonState;
    pressed: ButtonState;
    focus: ButtonState;
}
export type TButtonColor=Record<ButtonColorVariants, ButtonType>
