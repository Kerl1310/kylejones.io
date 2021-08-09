import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import siteConfig from '../../data/siteConfig';
import Hero from '../components/hero';
import SEO from '../components/SEO';
import Wrapper from '../components/wrapper';
import About from '../components/about';
import Skills from '../components/skills';
import Timeline from '../components/timeline';
import Repositories from '../components/repositories';
import FeaturedArticles from '../components/featuredArticles';
import RecentArticles from '../components/recentArticles';
import Certifications from '../components/certifications';
import FuturePublicSpeaking from '../components/futurePublicSpeaking';
import PastPublicSpeaking from '../components/pastPublicSpeaking';
import '../components/i18n';
import { withTranslation } from 'react-i18next';
import SocialButtons from '../components/socialButtons';
import Separator from '../components/separator';

const googleAnalyticsId = process.env.GA_ID;

class Home extends Component {
  render() {
    
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }

    const { t } = this.props;
    const title = t("heroText");
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
                  src={siteConfig.authorAvatar}
                  alt="user avatar"
                />
                <SocialButtons />
              </Col>
            </Row>
            <Row>
              <Col xs={4} sm={4}>
                <About title="About" text={siteConfig.authorDescription} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills skills={siteConfig.skills} />
              </Col>
            </Row>
            <Separator />
            <Timeline />
            <Separator />
            <Certifications />
            <Separator />
            <FuturePublicSpeaking />
            <Separator />
            <PastPublicSpeaking />
            <Separator />
            <FeaturedArticles />
            <Separator />
            <RecentArticles />
            <Separator />
            <Repositories />
          </Container>
        </Wrapper>
      </>
    );
  }
}

const homeComponent = withTranslation()(Home);

export default styled(homeComponent)`
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
