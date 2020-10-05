import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Wrapper from '../components/wrapper';
import SEO from '../components/SEO';
import { Link, graphql } from 'gatsby';
import StringSimilarity from 'string-similarity';

const HomeButton = styled.button`
  background-color: #25303b;
  color: white;
  border-radius: 5px 5px 5px;
  border: 1px solid #25303b;
  padding: 2px 6px;
  margin-right: 5px;
  margin-bottom: 10px;
  display: inline-block;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
    background-color: #616161;
    border-color: #616161;
    border-radius: 5px 5px 5px;
  }

  :active {
    background-color: #999999;
    border-color: #999999;
    border-radius: 5px 5px 5px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
`

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`;

export default ({ location, data }) => {
  const pages = data.allSitePage.nodes.map(({ path }) => path);
  const pathname = location.pathname;
  const result = StringSimilarity.findBestMatch(pathname, pages).bestMatch;
  function renderContent() {
    return result.rating > 0.7 ? (
      <>
        <MainTitle>
          Page Not Found<br/>
          You Were Probably Looking For:{' '}
          <Link to={result.target} className="similar-target">
            {result.target}
          </Link>
        </MainTitle>
        <h3 style={{ textAlign: 'center' }}>
          Not what you're after? Click the button below and you'll be taken back
          to the home page.
        </h3>
      </>
    ) : (
      <>
        <MainTitle>Not All Those Who Wander Are Lost</MainTitle>
        <h3
          style={{ textAlign: 'center' }}
        >
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site. Click the button below and you'll be taken back to
          the home page.
        </h3>
      </>
    );
  }

  return (
    <>
      <SEO title={'404'} />
      <Hero title="" />
      <Wrapper>
            {renderContent()}
            <Link
              to={'/'}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="home-link"
            >
              <HomeButton className="home-link-button">
                Home
              </HomeButton>
            </Link>
      </Wrapper>
    </>
  );
};

export const pageQuery = graphql`
         {
           allSitePage(
             filter: {
               path: { nin: ["/dev-404-page", "/404", "/404/", "/404.html"] }
             }
           ) {
             nodes {
               path
             }
           }
         }
       `;
