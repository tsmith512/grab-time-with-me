import React from 'react';
import styled from 'styled-components';

import { default as Bio } from './Bio';
import { default as Availability } from './Availability';

const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

const Scheduler: React.FC = () => (
  <Container>
    <Bio />
    <Availability />
  </Container>
);

export default Scheduler;
