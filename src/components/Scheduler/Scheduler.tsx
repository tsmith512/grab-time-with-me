import React from 'react';
import styled from 'styled-components';

import { Container, Panel } from '../Elements';
import { default as Bio } from './Bio';
import { default as Availability } from './Availability';

const Scheduler: React.FC = (props) => (
  <Container>
    <Panel>
      <Bio />
    </Panel>
    <Panel>
      <Availability />
    </Panel>
  </Container>
);

export default Scheduler;
