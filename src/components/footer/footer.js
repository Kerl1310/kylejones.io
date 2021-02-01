import React, { Component } from 'react';
import styled from 'styled-components';
import CoffeeButton from '../coffeeButton';

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303b;
`;

const FooterNav = styled.div`
  margin-left: auto;
  margin-right: 3rem;
  height: 60px;
  max-width: 960px;
`;

const FooterLinkGroup = styled.div`
`;

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
