import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import siteConfig from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';

const googleAnalyticsId = process.env.GA_ID;

class Now extends React.Component {
  render() {
    // Validate siteConfig settings
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }

    const title = siteConfig.siteTitle;
    const { keywords } = siteConfig;

    return (
      <StaticQuery
        query={nowQuery}
        render={data => {
          const book = data.goodreadsBook.book;
          const authors = book.authors;
          const artist = data.allSpotifyTopArtist.edges[0].node;
          const game = data.allSteamGame.edges[0].node;

          return (
            <>
              <SEO title={title} keywords={keywords} />
              <Hero heroImg={siteConfig.siteCover} title={title} />
              <Wrapper className={this.props.className}>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <div>
                        <h1>What I'm Up To Now</h1>
                        <h2>Last Updated: {data.site.buildTime}</h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="now-content">
                        <ul>
                          <li>
                            <strong>Reading: </strong>
                            <a
                              className={`book-link-${book.isbn}`}
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
                                  className={'author-link'}
                                  id={`author-link-${author.id}`}
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
                            <strong>Listening to: </strong>
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
                            <strong>Watching: </strong>{siteConfig.now.watching}
                          </li>
                          <li>
                            <strong>Playing: </strong>
                            <a
                              className={'game-link'}
                              href={`https://store.steampowered.com/app/${game.steamId}`}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {game.name}
                            </a>
                          </li>
                          <li>
                            <strong>Learning about: </strong>{siteConfig.now.learning}
                          </li>
                          <li>
                            <strong>Working on: </strong>{siteConfig.now.working_on}
                          </li>
                        </ul>
                      </div>
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

export default styled(Now)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .author-link :not(:last-of-type) :after {
    content: ', ';
  }

  .author-link :nth-last-child(2) :not(:first-child) :after {
    content: ' and ';
  }

  ul {
    list-style-type: none;
    margin-left: 0;
  }

  ul li a:link,
  ul li a:visited {
    color: black;
    text-decoration: none;
  }

  ul li a:hover,
  ul li a:active {
    color: black;
    text-decoration: underline;
  }

  h2 {
    margin-bottom: 40px;
  }
`;

const nowQuery = graphql`
  query NowQuery {
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
    goodreadsBook(
      shelfNames: { eq: "currently-reading" }
    ) {
      book {
        authors {
          id
          name
          link
        }
        titleWithoutSeries
        link
      }
    }
    allSteamGame(
      sort: { order: DESC, fields: playtime_2weeks },
      limit: 1
    ) {
      edges {
        node {
          steamId
          name
          playtime_2weeks
          playtime_forever
          img_icon_url
          img_logo_url
        }
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
`;
