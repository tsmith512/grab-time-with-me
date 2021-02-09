import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

const Panel = styled.header`
  flex: 1 0 50%;
  align-self: center;
  text-align: center;

  & + & {
    border-left: 1px solid #ddd;
  }
`;

const ShareAbout: React.FC = () => (
  <Container>
    <Panel>
      <p>About Info</p>
    </Panel>
    <Panel>
      <Link to="/">Start Over</Link>
    </Panel>
  </Container>
);

export default ShareAbout;
