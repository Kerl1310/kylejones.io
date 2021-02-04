import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import '../i18n';
import { useTranslation } from 'react-i18next';
import Articles from '../articles';

const RecentArticles = () => {
  const { t } = useTranslation();
  
  return (
    <StaticQuery
      query={recentArticlesQuery}
      render={data => {
        const articles = data.allMarkdownRemark.edges;

        return (
          <Articles title={t("recentArticlesTitle")} articles={articles}/>
        );
      }}
    />
  );
}

export default RecentArticles;

const recentArticlesQuery = graphql`
  query RecentArticlesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            path
            date
            title
            isFeatured
            featuredImage
          }
        }
      }
    }
  }
`;
