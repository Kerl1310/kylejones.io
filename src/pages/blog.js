import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { keywords, siteCover } from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';
import '../components/i18n';
import { withTranslation } from 'react-i18next';
import BlogListing from '../components/blogListing/blogListing';

const googleAnalyticsId = process.env.GA_ID;

class Blog extends Component {
  render() {
    
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }

    const { t } = this.props;
    const title = t("heroText");

    return (
      <StaticQuery
        query={blogQuery}
        render={data => {
          const articleLinks = data.allMarkdownRemark.edges;

          return (
            <>
              <SEO title={title} keywords={keywords} />
              <Hero heroImg={siteCover} title={title} />
              <Wrapper className={this.props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <div>
                        <h1>{t("blogTitle")}</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {' '}
                      <ul>
                        {articleLinks.map(articleLink => (
                          <BlogListing articleLink={articleLink}/>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </Wrapper>
            </>
          );
        }}
      />
    );
  }
}

const blogComponent = withTranslation()(Blog);

export default styled(blogComponent)`
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
`;

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
          excerpt(pruneLength: 285)
        }
      }
    }
  }
`;
