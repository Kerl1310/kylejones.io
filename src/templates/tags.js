import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'
import { Link, graphql } from 'gatsby'

const googleAnalyticsId = process.env.GA_ID

function TagPage({ pageContext, data }) {
  // Validate siteConfig settings
  if (googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
    )
  }

  const siteTitle = siteConfig.siteTitle
  const { keywords } = siteConfig
  const tag = pageContext.tag
  const totalCount = data.allMarkdownRemark.totalCount
  const edges = data.allMarkdownRemark.edges
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  const tagPath = `tags/${tag}`

  return (
    <Layout location={`/${tagPath}`}>
      <SEO
        title={`${tag} listing page`}
        keywords={keywords}
        description={`Listing page for blog posts with the tag ${tag}`}
        url={`${siteConfig.pathPrefix}${tagPath}`}
      />
      <Hero heroImg={siteConfig.siteCover} title={siteTitle} />
      <Wrapper>
        <Container className="page-content" fluid>
          <Row>
            <Col>
              <div>
                <h1>{tagHeader}</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                {edges.map(({ node }) => {
                  const path = node.frontmatter.path
                  const articleTitle = node.frontmatter.title
                  return (
                    <li key={path}>
                      <Link to={path}>{articleTitle}</Link>
                    </li>
                  )
                })}
              </ul>
              <Link to="/tags">All tags</Link>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(TagPage)`
  .page-content {
    display: block;
    max-width: 100%;
    margin-bottom: 40px;
  }

  h4 {
    margin-bottom: 5px;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    width: 100%;
  }

  ul li:last-child hr {
    display: none;
  }
`

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            path
            isFeatured
            featuredImage
            tags
          }
        }
      }
    }
  }
`
