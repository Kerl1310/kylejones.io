import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
        query={nowQuery}
        render={data => {
          const book = data.goodreadsBook.book
          const authors = book.authors
          const artist = data.allSpotifyTopArtist.edges[0].node

          // TODO: Add logic to add "and" and commas between values
          return (
            <Layout location={this.props.location}>
              <SEO title={title} keywords={keywords} />
              <Hero heroImg={siteConfig.siteCover} title={title} />
              <Wrapper className={this.props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <ul>
                      <li>
                        <strong>Reading:</strong>{' '}
                        <a
                          className={'book-link-${book.isbn}'}
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {book.titleWithoutSeries}
                        </a>{' '}
                        by{' '}
                        {authors.map(author => (
                          <React.Fragment key={author.id}>
                            <a
                              className={'author-link-${author.id}'}
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {author.name}
                            </a>
                          </React.Fragment>
                        ))}
                      </li>
                      <li>
                        <strong>Listening to:</strong>{' '}
                        <a
                          className={'artist-link'}
                          href={artist.external_urls.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {artist.name}
                        </a>
                      </li>
                      <li>
                        <strong>Watching:</strong> Star Wars: Rebels
                      </li>
                      <li>
                        <strong>Learning about:</strong> Gatsby and React
                      </li>
                      <li>
                        <strong>Working on:</strong> This website and decorating
                        our new home
                      </li>
                    </ul>
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

export default styled(Now)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`

const nowQuery = graphql`
  query NowQuery {
    goodreadsBook(shelfNames: { eq: "currently-reading" }) {
      book {
        authors {
          id
          name
          link
        }
        titleWithoutSeries
        link
        isbn13
      }
    }
    allSpotifyTopArtist(
      filter: { time_range: { eq: "short_term" } }
      sort: { fields: order }
      limit: 1
    ) {
      edges {
        node {
          name
          external_urls {
            spotify
          }
          order
        }
      }
    }
  }
`
