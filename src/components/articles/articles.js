import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const ArticleLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`

function Articles() {
  return (
    <StaticQuery
      query={articlesQuery}
      render={data => {
        const articleLink = data.internalArticles
        return (
          <div className="featuredArticles">
            <h2>Featured Articles</h2>
            <ArticleLinkGroup>
              {' '}
              {
                //  meta.map((articleLink, i) => (
                <a
                  className={`article-link-${articleLink.id}`}
                  href={articleLink.canonical_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={articleLink.cover_image}
                      alt="Cover image for the article ${articleLink.title}"
                      width="512"
                      height="192"
                    ></img>
                    <br></br>[
                    {new Intl.DateTimeFormat('en-GB', 'en-US').format(
                      new Date(articleLink.published_at)
                    )}
                    ] <strong>{articleLink.title}</strong> -{' '}
                    {articleLink.page_views_count} views
                  </div>
                </a>
                // ))
              }
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
    display: list-item;          /* This has to be "list-item"                                               */
    list-style-type: none;       /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
`

const articlesQuery = graphql`
  query ArticlesQuery {
    internalArticles {
      id
      cover_image
      canonical_url
      description
      published_at
      positive_reactions_count
      page_views_count
      title
      url
    }
  }
`
