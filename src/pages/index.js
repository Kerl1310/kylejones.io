import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import {
  FaGithub,
  FaLinkedin,
  FaDev,
  FaMedium,
  FaStackOverflow,
  FaEnvelope,
  FaTwitter,
} from 'react-icons/fa';
import siteConfig from '../../data/siteConfig';
import Hero from '../components/hero';
import SEO from '../components/SEO';
import Wrapper from '../components/wrapper';
import About from '../components/about';
import Skills from '../components/skills';
import Timeline from '../components/timeline';
import Repositories from '../components/repositories';
import Articles from '../components/articles';

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`;
const googleAnalyticsId = process.env.GA_ID;

class Home extends React.Component {
  render() {
    // validate siteConfig settings
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }

    const title = siteConfig.siteTitle;
    const { keywords } = siteConfig;
    return (
      <>
        <SEO title={title} keywords={keywords} />

        <Hero heroImg={siteConfig.siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src="/images/avatar.jpeg"
                  alt="user avatar"
                />
                <div className="social">
                  {siteConfig.social.github && (
                    <a
                      className="social-link github"
                      href={siteConfig.social.github}
                    >
                      <FaGithub className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={siteConfig.social.linkedin}
                    >
                      <FaLinkedin className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.dev && (
                    <a className="social-link dev" href={siteConfig.social.dev}>
                      <FaDev className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.medium && (
                    <a
                      className="social-link medium"
                      href={siteConfig.social.medium}
                    >
                      <FaMedium className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.twitter && (
                    <a
                      className="social-link twitter"
                      href={siteConfig.social.twitter}
                    >
                      <FaTwitter className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.stackOverflow && (
                    <a
                      className="social-link stackOverflow"
                      href={siteConfig.social.stackOverflow}
                    >
                      <FaStackOverflow className="social-icon" size="32" />
                    </a>
                  )}
                  {siteConfig.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${siteConfig.social.email}`}
                    >
                      <FaEnvelope className="social-icon" size="32" />
                    </a>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title="About" text={siteConfig.authorDescription} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title="Skills" skills={siteConfig.skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Articles />
            <Separator />
            <Repositories />
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.dev:hover {
    color: #24292e;
  }

  a.social-link.medium:hover {
    color: #24292e;
  }

  a.social-link.stackOverflow:hover {
    color: #f68104;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`;
