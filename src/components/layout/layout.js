import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { ResetCSS, GlobalStyle } from '../styles';
import Header from '../header';

const Layout = ({ children, t, i18n }) => {
  return (
      <>
        {/* <Suspense fallback={<h1>Loading page...</h1>}> */}
          <Header/>
            <ResetCSS />
            <GlobalStyle />
            <div>
              <main>{children}</main>
            </div>
          <footer>
            © {new Date().getFullYear()}
          </footer>
        {/* </Suspense> */}
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
