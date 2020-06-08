import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ArticleLinkGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const ArticleLink = styled.div`
  display: block;
  width: 100%;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`

function Articles() {
  return (
    <StaticQuery
      query={articlesQuery}
      render={data => {
        const articleLinks = data.allMarkdownRemark.edges
        return (
          <div className="recent-articles-container">
            <h2 className="recent-articles-title">Recent Articles</h2>
            <ArticleLinkGroup className="recent-articles-link-group-container">
              {' '}
              {articleLinks.map(articleLink => (
                <React.Fragment key={articleLink.node.frontmatter.path}>
                  <ArticleLink
                    className="recent-articles-link-container"
                    id={`recent-articles-link-container-${articleLink.node.frontmatter.path}`}
                  >
                    <Link
                      className="recent-articles-link"
                      id={`recent-articles-link-${articleLink.node.frontmatter.path}`}
                      to={articleLink.node.frontmatter.path}
                      target="__blank"
                      rel="noopener noreferrer"
                    >
                      <strong>{articleLink.node.frontmatter.title}</strong>
                    </Link>
                  </ArticleLink>
                </React.Fragment>
              ))}
            </ArticleLinkGroup>
          </div>
        )
      }}
    />
  )
}

export default styled(Articles)`
  position: relative;

  a {
    display: list-item; /* This has to be "list-item"                                               */
    list-style-type: none; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
  }
`

const articlesQuery = graphql`
  query ArticlesQuery {
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
`
