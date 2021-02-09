import React from 'react';
import styled from 'styled-components';

import { default as Logo } from './Logo';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  margin-top: 2em;
  margin-bottom: 2em;
`;

const Headline = styled.h1`
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 1px;
`;

const LogoBox = styled.div`
  margin-right: 1em;
`;

const Header: React.FC = () => (
  <Container>
    <LogoBox>
      <Logo />
    </LogoBox>
    <Headline>Grab Time With</Headline>
  </Container>
);

export default Header;
