import React, { Component } from 'react';
import { headerLinks} from '../../../data/siteConfig';
import '../i18n';
import { withTranslation } from 'react-i18next';
import GithubLink from './githubLink';
import HeaderLink from './headerLink';
import HeaderLinkGroup from './headerLinkGroup';
import HeaderNav from './headerNav';
import HeaderWrapper from './headerWrapper';

class Header extends Component {
  render() {
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
