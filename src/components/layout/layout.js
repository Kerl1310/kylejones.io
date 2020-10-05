import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../data/siteConfig';
import { ResetCSS, GlobalStyle } from '../styles';
import Header from '../header';

const Layout = ({ children, t, i18n }) => {
  return(
    <>
      <Suspense fallback={<h1>Loading page...</h1>}>
        <React.Fragment>
          <Header headerLinks={siteConfig.headerLinks} />
          <ResetCSS />
          <GlobalStyle />
          <div>{children}</div>
          <footer>
            © {new Date().getFullYear()}
          </footer>
        </React.Fragment>
      </Suspense>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
