import React, { Component } from 'react';
import { withPrefix } from 'gatsby';
import { siteCover } from '../../../data/siteConfig';
import styled from 'styled-components';
import HeroContainer from './heroContainer';
import HeroTitle from './heroTitle';
import TitleContainer from './titleContainer';

class Hero extends Component {
  render() {
    const { title, className } = this.props;

    return (
      <HeroContainer className={className}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
        </TitleContainer>
      </HeroContainer>
    );
  }
}

export default styled(Hero)`
  ${p =>
    `background-image: url(${p.heroImg || withPrefix(siteCover)});`}
  height: 70vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
