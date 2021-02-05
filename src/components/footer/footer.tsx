import React, { Component } from 'react';
import FooterNav from './footerNav';
import FooterWrapper from './footerWrapper';
import CoffeeButton from '../coffeeButton';

const FooterLinkGroup = ({children}) => {
  return (
    <div>
      {children}
    </div>
    )
};

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterNav>
          <FooterLinkGroup>
            <CoffeeButton />
          </FooterLinkGroup>
        </FooterNav>
      </FooterWrapper>
    );
  }
}

export default Footer;
