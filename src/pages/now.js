import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Wrapper from '../components/wrapper'
import SEO from '../components/SEO'

const googleAnalyticsId = process.env.GA_ID

class Now extends React.Component {
  render() {
    // validate siteConfig settings
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      )
    }

    const title = siteConfig.siteTitle
    const { keywords } = siteConfig

    return (
      <Layout location={this.props.location}>
        <SEO title={title} keywords={keywords} />
        <Hero heroImg={siteConfig.siteCover} title={title} />
        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <ul>
                  <li>
                      <strong>Reading:</strong> Chaos by James Gleick
                  </li>
                  <li>
                      <strong>Listening to:</strong> Little Richard
                  </li>
                  <li>
                      <strong>Watching:</strong> Star Wars: Rebels
                  </li>
                  <li>
                      <strong>Learning about:</strong> Gatsby and React
                  </li>
                  <li>
                      <strong>Working on:</strong> This website and decorating our new home
                  </li>
              </ul>
            </Row>
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Now)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }`