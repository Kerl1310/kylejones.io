import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { keywords, siteCover, siteTitle, siteUrl } from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';
import { withTranslation } from 'react-i18next';
import TagListing from '../components/tagListing';

const googleAnalyticsId = process.env.GA_ID;

class TagsPage extends Component {
  render() {
    
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }

    const { t } = this.props;
    
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
              <Hero heroImg={siteCover} title={t("heroText")} />
              <Wrapper className={this.props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <div>
                        <h1>{t("tagsTitle")}</h1>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {' '}
                      <ul>
                        {group.map(tag => (
                          <TagListing key={tag.fieldValue} tag={tag} />
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

const tagsPageComponent = withTranslation()(TagsPage);

export default styled(tagsPageComponent)`
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
