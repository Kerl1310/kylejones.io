import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { siteCover, pathPrefix, keywords } from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';
import { Link, graphql } from 'gatsby';
import '../components/i18n';
import { useTranslation } from 'react-i18next';

const BlogPostListItem = styled.li`
  list-style-type: none;
  margin-left: 0;
  width: 100%;
`;

const BlogPostList = styled.ul`
  list-style-type: none;
  margin-left: 0;
  width: 100%;
`;

const googleAnalyticsId = process.env.GA_ID;

const TagPageTemplate = ({ pageContext, data }) => {
  
  if (googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
    );
  }

  const { tag } = pageContext;
  const { edges } = data.allMarkdownRemark;
  const tagHeader = `Posts Tagged With "${tag}"`;
  const tagPath = `tags/${tag}`;
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title={`${tagHeader}`}
        keywords={keywords}
        description={`Listing page for blog posts with the tag ${tag}`}
        url={`${pathPrefix}${tagPath}`}
      />
      <Hero heroImg={siteCover} title={t("heroText")} />
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
              <BlogPostList>
                {edges.map(articleLink => (
                  <BlogPostListItem
                    className="blog-post"
                    key={articleLink.node.frontmatter.path}
                    id={articleLink.node.frontmatter.path}
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
                  </BlogPostListItem>
                ))}
              </BlogPostList>
            </Col>
          </Row>
          <Link to="/tags" target="__blank" rel="noopener noreferrer">
            All Tags
          </Link>
        </Container>
      </Wrapper>
    </>
  );
}

export default styled(TagPageTemplate)`
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
          excerpt(pruneLength: 145)
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
`;
