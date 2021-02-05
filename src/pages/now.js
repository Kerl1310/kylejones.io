import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { keywords, siteCover } from '../../data/siteConfig';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';
import Reading from '../components/now/reading';
import Watching from '../components/now/watching';
import Listening from '../components/now/listening';
import Playing from '../components/now/playing';
import Learning from '../components/now/learning';
import Working from '../components/now/working';
import '../components/i18n';
import { useTranslation } from 'react-i18next';

const googleAnalyticsId = process.env.GA_ID;

const Now = () => {
    
    if (googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      );
    }
    // const changeLanguage = (lng) => {
    //   i18n.changeLanguage(lng);
    // }

    const { t } = useTranslation();
    const title = t("heroText");
  
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
              <Hero heroImg={siteCover} title={title} />
              <Wrapper>
                <Container className="page-content" fluid>
                  <Row>
                    <Col>
                      <div>
                        <h1>{t("nowHeading")}</h1>
                        <h2>{t("nowSubheading")} {data.site.buildTime}</h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="now-content">
                        <ul>
                          <Reading book={book} authors={authors}/>
                          <Listening artist={artist}/>
                          <Watching/>
                          <Playing game={game}/>
                          <Learning/>
                          <Working/>
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
};


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
