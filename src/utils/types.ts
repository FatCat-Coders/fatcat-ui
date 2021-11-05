import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

export type ContentfulFileType = {
	file: {
		url: string,
	}
}

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
