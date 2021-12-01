import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

// Types
import { THead } from '../../../utils/types';

// Assets @TODO remove this way of loading
import metaImage from '../../../assets/images/meta1.jpeg';
import favicon16x16 from '../../../assets/grokFavicon/favicon-16x16.png';
import favicon32x32 from '../../../assets/grokFavicon/favicon-32x32.png';
import favicon96x96 from '../../../assets/grokFavicon/favicon-96x96.png';
import favicon120x120 from '../../../assets/grokFavicon/favico-120x120.png';
import favicon180x180 from '../../../assets/grokFavicon/favicon-180x180.png';
import favicon167x167 from '../../../assets/grokFavicon/favicon-167x167.png';
import favicon48x48 from '../../../assets/grokFavicon/favicon-48x48.png';
import favicon128x128 from '../../../assets/grokFavicon/favicon-128x128.png';
import favicon196x196 from '../../../assets/grokFavicon/favicon-196x196.png';
import favicon70x70 from '../../../assets/grokFavicon/favicon-70x70.png';

// Helpers
const Head: React.FC<THead> = (props) => {
	const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
	                siteUrl
                }
            }
        }
	`);
	const {
		meta,
	} = props;

	const {
		site,
	} = data;

	const pageTitle = meta.pageTitle || site.siteMetadata.title;
	const metaDescription = meta.metaDescription || site.siteMetadata.description;
	const ogTitle = meta.ogTitle || pageTitle;
	const ogDescription = meta.ogDescription || metaDescription;
	const twitterTitle = meta.twitterTitle || ogTitle;
	const twitterDescription = meta.twitterDescription || ogDescription;
	const ogImage = meta.ogImage?.file.url || metaImage;
	const twitterImage = meta.twitterImage?.file.url || ogImage;
	return (
		<Helmet encodeSpecialCharacters={false}>
			<html lang="en" />
			<link rel="shortcut icon" type="image/x-icon" href="/icons/icon-48x48.png" />
			<title>
				{pageTitle}
			</title>
			<meta name="description" content={metaDescription} />
			<meta name="application-name" content="grok" />
			{/* Facebook Tags */}
			<meta property="og:site_name" content={site.siteMetadata.siteUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${ogTitle}`} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image" content={ogImage} />
			{/* <meta property="og:url" content={metaUrl} /> */}
			{/* Twitter tags */}
			<meta property="twitter:title" content={`${twitterTitle}`} />
			<meta property="twitter:description" content={twitterDescription} />
			<meta name="twitter:image" content={`https:${twitterImage}`} />
			<link rel="apple-touch-icon" sizes="120x120" href={favicon120x120} />
			<link rel="apple-touch-icon" sizes="180x180" href={favicon180x180} />
			<link rel="apple-touch-icon" sizes="70x70" href={favicon70x70} />
			<link rel="apple-touch-icon" sizes="167x167" href={favicon167x167} />
			<link rel="apple-touch-icon" sizes="48x48" href={favicon48x48} />

			<link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
			<link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
			<link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
			<link rel="icon" type="image/png" sizes="128x128" href={favicon128x128} />
			<link rel="icon" type="image/png" sizes="196x196" href={favicon196x196} />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content={favicon128x128} />
			<meta name="theme-color" content="#ffffff" />
			<meta name="viewport" content="width=device-width,initial-scale=1" />
		</Helmet>
	);
};
export default Head;
