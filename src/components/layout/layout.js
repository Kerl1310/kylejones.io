import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ResetCSS, GlobalStyle } from '../styles';
import Header from '../header';
import Footer from '../footer';
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
      <>
        <Suspense fallback={<h1>Loading page...</h1>}>
        <LocaleContext.Provider value={{ locale }}>
          <I18nextProvider i18n={i18n}>
            <Header/>
              <ResetCSS />
              <GlobalStyle />
              <div>
                <main>{children}</main>
              </div>
            <Footer/>
          </I18nextProvider>
        </LocaleContext.Provider>
        </Suspense>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
