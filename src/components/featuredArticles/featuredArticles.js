import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../i18n';
import { useTranslation } from 'react-i18next';
import Articles from '../articles';

const FeaturedArticles = () => {
  const { t } = useTranslation();
  
  return (
    <StaticQuery
      query={featuredArticlesQuery}
      render={data => {
        const articles = data.allMarkdownRemark.edges;

        return (
          <Articles title={t("featuredArticlesTitle")} articles={articles}/>
        );
      }}
    />
  );
}

export default FeaturedArticles;

const featuredArticlesQuery = graphql`
  query FeaturedArticlesQuery {
    allMarkdownRemark(
        filter: {
            frontmatter: {
                isFeatured: {eq: true
                }
            }
        },
        limit: 5,
        sort: {
            fields: frontmatter___date,
            order: DESC
        }) {
        edges {
          node {
            frontmatter {
              date
              path
              title
              featuredImage
            }
          }
        }
      }
  }
`;
