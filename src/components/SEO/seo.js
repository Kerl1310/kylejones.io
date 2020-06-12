import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title, featuredImage, url }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <React.Fragment><script type="application/ld+json"> {`
          {
            "@context": "https://schema.org",
            "@type": "Author",
            "birthDate": "1992-10-13",
            "email": "kylejones1310@outlook.com",
            "gender": "Male",
            "jobTitle": "Senior Software Engineer",
            "knowsLanguage": "English",
            "name": "Kyle Jones",
            "telephone": "07432 829513",
            "url": "https://kylejones.io"
            "name": "Kyle Jones",
          }
        `}
        </script><Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`${data.site.siteMetadata.author}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: url,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:locale`,
                content: `en-GB`,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: featuredImage,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.twitter,
              },
              {
                name: `twitter:image`,
                content: featuredImage,
              },
              {
                name: `twitter:domain`,
                content: data.site.siteMetadata.siteUrl,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          /></React.Fragment>
        )
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
