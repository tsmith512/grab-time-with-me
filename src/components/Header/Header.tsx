import React from 'react';
import styled from 'styled-components';

import { default as Logo } from './Logo';

const Container = styled.header`
  text-align: center;
  margin-top: 2em;
  margin-bottom: 2em;

  @media only screen and (min-width: 380px) {
    display: flex;
    flex-direction: row;
    flex-wrap: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

const Headline = styled.h1`
  font-size: 2.5em;
  @media only screen and (min-width: 480px) {
    font-size: 3.5em;
  }
  @media only screen and (min-width: 640px) {
    font-size: 4.25em;
  }

  letter-spacing: -1px;
  color: #008C9E;

  font-family: "Sagittarius A", "Sagittarius B";
  font-style: normal;
  font-weight: 400;
`;

const LogoBox = styled.div`
  margin-right: 1em;
`;

const Header: React.FC = () => (
  <Container>
    <LogoBox>
      <Logo />
    </LogoBox>
    <Headline>Grab Time With Me</Headline>
  </Container>
);

export default Header;
