import React from 'react';
import styled from 'styled-components';

import { default as Bio } from './Bio';
import { default as Availability } from './Availability';

const Container = styled.div`
  background: #fff;
  border: 1px solid #00B4CC;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0,0,0,0.125);

  display: flex;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

const Scheduler: React.FC = (props) => (
  <Container>
    <Bio />
    <Availability />
  </Container>
);

export default Scheduler;
