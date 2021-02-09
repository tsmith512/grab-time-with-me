import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const Headline = styled.h1`
  font-size: 3em;
  text-transform: upper-case;
  letter-spacing: -1px;
  margin: 2em auto;
  text-align: center;
`;

const RickRoll: React.FC = () => (
  <Container>
    <Headline>Never Gonna Give You Up</Headline>
    <Link to="/share/">Share / About</Link>
  </Container>
);

export default RickRoll;
