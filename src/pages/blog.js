import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'
import Link from 'gatsby-link'

const googleAnalyticsId = process.env.GA_ID

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  width: 100%;
`

class Blog extends React.Component {
  render() {
    // Validate siteConfig settings
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      )
    }

    const title = siteConfig.siteTitle
    const { keywords } = siteConfig

    return (
      <StaticQuery
        query={blogQuery}
        render={data => {
          const articleLinks = data.allMarkdownRemark.edges

          return (
            <Layout location={this.props.location}>
              <SEO title={title} keywords={keywords} />
              <Hero heroImg={siteConfig.siteCover} title={title} />
              <Wrapper className={this.props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <div>
                        <h1>Blog</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {' '}
                      <ul>
                        {articleLinks.map(articleLink => (
                          <li
                            id={`blog-post-${articleLink.node.frontmatter.date}`}
                            className="blog-post"
                          >
                            <div className="blog-post-date">
                              <h4>
                                {new Date(
                                  articleLink.node.frontmatter.date
                                ).toLocaleDateString('en-GB')}
                              </h4>
                            </div>
                            <Link
                              to={articleLink.node.frontmatter.path}
                              target="__blank"
                              rel="noopener noreferrer"
                            >
                              {articleLink.node.frontmatter.title}
                            </Link>
                            <p>{articleLink.node.excerpt}</p>
                            <Separator />
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </Wrapper>
            </Layout>
          )
        }}
      />
    )
  }
}

export default styled(Blog)`
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

  .blog-post-date {
    font-size: 12px;
  }
`

const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 25
    ) {
      edges {
        node {
          frontmatter {
            path
            date
            title
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`
