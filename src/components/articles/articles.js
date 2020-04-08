import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import siteConfig from '../../../data/siteConfig'

const ArticleLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const ArticleLink = styled(Link)`
  position: relative;
  text-decoration: bold;
  display: flex;
  align-items: center;
  color: #000;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

// TODO: Convert this in future into a single row with multiple columns (Most Popular and Newest?)
class Articles extends React.Component {
    render () {
      const { featuredArticles } = siteConfig
      return (
        <div className={this.props.className}>
            <h2>Featured Articles</h2>
            <ArticleLinkGroup>
                {featuredArticles.map((articleLink, i) => (
                    <a 
                    className={`article-link-${i}`}
                    href={articleLink.url}
                    target='_blank'
                    rel="noopener noreferrer"
                  >{articleLink.label}</a>
                ))}
            </ArticleLinkGroup>
        </div>
      )
    }
}

export default styled(Articles)`

position: relative;

a {
    display: list-item;          /* This has to be "list-item"                                               */
    list-style-type: disc;       /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
`