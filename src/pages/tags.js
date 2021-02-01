import React, { Component } from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import siteConfig from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';

const googleAnalyticsId = process.env.GA_ID;

class TagsPage extends Component {
  render() {
    // Validate siteConfig settings
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }

    const { keywords, siteTitle, siteUrl } = siteConfig;

    return (
      <StaticQuery
        query={pageQuery}
        render={data => {
          const { group } = data.allMarkdownRemark;

          return (
            <>
              <SEO
                title={siteTitle}
                keywords={keywords}
                description={`Listing page for all tags`}
                url={`${siteUrl}tags`}
              />
              <Hero heroImg={siteConfig.siteCover} title={siteTitle} />
              <Wrapper className={this.props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <div>
                        <h1>Tags</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {' '}
                      <ul>
                        {group.map(tag => (
                          <li id={tag.fieldValue} className="tag">
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                              {tag.fieldValue} ({tag.totalCount})
                            </Link>
                          </li>
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

export default styled(TagsPage)`
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
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
