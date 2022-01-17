import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

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

export type ContentfulJobPost = {
	title: string,
	slug: string,
	excerpt: string,
	logo: ContentfulFileType,
	location: string,
	salary: string,
	workModel: string,
	ogImage: ContentfulFileType,
	meta?: ContentfulMeta,
	jobContent: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

export type TJobs = {
	allContentfulJobFatCatCareers: {
		nodes: ContentfulJobPost[],
	},
}

export type TJobsPage = {
	data: TJobs
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
