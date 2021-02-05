import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Tag from '../components/tag';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import siteConfig from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';
import ShareButtons from '../components/shareButtons';
import BlogCanonicalLink from '../components/blogCanonicalLink';
import '../components/i18n';
import { useTranslation } from 'react-i18next';
import Separator from '../components/separator';

const googleAnalyticsId = process.env.GA_ID;

const BlogTemplate = ({ data }) => {
  if (googleAnalyticsId === 'UA-000000000-1') {
    console.error(
      'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
    );
  }

  const { t } = useTranslation();
  const post = data.markdownRemark;
  const frontmatter = post.frontmatter;
  const { keywords } = siteConfig;
  const fullUrl = siteConfig.pathPrefix + frontmatter.path;
  const featuredImageUrl =
    siteConfig.pathPrefix + frontmatter.featuredImage;
  const postTitle = frontmatter.title;
  const canonicalUrl = frontmatter.canonicalUrl;
  const canonicalText = frontmatter.canonicalText;

  return (
    <>
      <SEO
        title={postTitle}
        keywords={keywords}
        description={post.excerpt}
        featuredImage={featuredImageUrl}
        url={fullUrl}
      />
      <Hero heroImg={siteConfig.siteCover} title={t("heroText")} />
      <Wrapper>
        <Container className="page-content" fluid>
          <Row>
            <Col>
              <div className="blog-post-container">
                {' '}
                <Helmet
                  title={`${postTitle} | ${siteConfig.authorName}`}
                />{' '}
                <div className="blog-post">
                  {' '}
                  <h1>{postTitle}</h1>{' '}
                  {frontmatter.tags.map(tag => (
                    <React.Fragment key={tag}>
                      <Tag
                        className="blog-post-tag"
                        path={`/tags/${tag}`}
                        text={tag}
                      />
                    </React.Fragment>
                  ))}
                  <Separator />
                  <BlogCanonicalLink canonicalUrl={canonicalUrl} canonicalText={canonicalText}/>
                  <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />{' '}
                </div>{' '}
                <ShareButtons
                  twitterHandle={siteConfig.twitterUsername}
                  url={canonicalUrl}
                  title={postTitle}
                  tags={frontmatter.tags}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
}

export default BlogTemplate;

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
        canonicalUrl
        canonicalText
      }
      excerpt(pruneLength: 285)
    }
  }
`;
