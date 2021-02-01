import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import siteConfig from '../../../data/siteConfig';

import '../i18n';
import { withTranslation } from 'react-i18next';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303b;
`;

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #25303b;
`;

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`;
const GithubLink = styled(({ className }) => (
  <a
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={32} />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`;

// const changeLanguage = (lng) => {
//   i18n.changeLanguage(lng);
//  <button onClick={() => changeLanguage('cy')}>cy</button>
//  <button onClick={() => changeLanguage('en')}>en</button>
// }

class Header extends Component {
  render() {
    const { headerLinks } = siteConfig;
    const { t } = this.props

    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
                {t(`${headerLink.label}`)}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>
          <GithubLink />
        </HeaderNav>
      </HeaderWrapper>
    );
  }
}

export default withTranslation()(Header);
