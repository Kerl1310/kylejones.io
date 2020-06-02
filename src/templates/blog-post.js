import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Tag from '../components/tag'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'
import ShareButtons from '../components/shareButtons'

const googleAnalyticsId = process.env.GA_ID

function BlogTemplate({ data }) {
  if (googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
    )
  }

  const post = data.markdownRemark
  const title = siteConfig.siteTitle
  const { keywords } = siteConfig
  const fullUrl = siteConfig.pathPrefix + post.frontmatter.path

  return (
    <Layout location={post.frontmatter.path}>
      <SEO title={post.frontmatter.title} keywords={keywords} description={post.frontmatter.title} />
      <Hero heroImg={siteConfig.siteCover} title={title} />
      <Wrapper>
        <Container className="page-content" fluid>
          <Row>
            <Col>
              <div className="blog-post-container">
                {' '}
                <Helmet
                  title={`${post.frontmatter.title} | ${siteConfig.authorName}`}
                />{' '}
                <div className="blog-post">
                  {' '}
                  <h1>{post.frontmatter.title}</h1>{' '}
                  {post.frontmatter.tags.map(tag => (
                    <React.Fragment key={tag}>
                      <Tag text={tag} className="blog-post-tag"/>
                    </React.Fragment>
                  ))}
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />{' '}
                </div>{' '}
                <ShareButtons
                  title={post.frontmatter.title}
                  twitterHandle={siteConfig.twitterUsername}
                  url={fullUrl}
                  tags={post.frontmatter.tags}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
        featuredImage
        tags
      }
    }
  }
`
