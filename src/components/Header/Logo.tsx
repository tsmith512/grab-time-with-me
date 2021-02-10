import React from 'react';

import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
  width: 48px;

  @media screen and (min-width: 520px) {
    width: 96px;
  }
`;

const Logo: React.FC = () => (
  <Img src={logo} />
);

export default Logo;
