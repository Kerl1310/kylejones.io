import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import '../i18n';

const ArticleLinkGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ArticleLink = styled.div`
  display: block;
  width: 100%;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

const Articles = ({ title, articles }) => {

  return (
    <div className="recent-articles-container">
      <h2 className="recent-articles-title">{title}</h2>
      <ArticleLinkGroup className="recent-articles-link-group-container">
        {' '}
        {articles.map(article => (
          <React.Fragment key={article.node.frontmatter.path}>
            <ArticleLink
              className="recent-articles-link-container"
              id={`recent-articles-link-container-${article.node.frontmatter.path}`}
            >
              <Link
                className="recent-articles-link"
                id={`recent-articles-link-${article.node.frontmatter.path}`}
                to={article.node.frontmatter.path}
                target="__blank"
                rel="noopener noreferrer"
              >
                <strong>{article.node.frontmatter.title}</strong>
              </Link>
            </ArticleLink>
          </React.Fragment>
        ))}
      </ArticleLinkGroup>
    </div>
  );
}

export default styled(Articles)`
  position: relative;

  a {
    display: list-item; /* This has to be "list-item"                                               */
    list-style-type: none; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
  }
`;
