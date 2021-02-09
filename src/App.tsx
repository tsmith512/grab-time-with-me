import React from 'react';
import styled from 'styled-components';

import { GlobalStyles, Header } from './components';
import Scheduler from './components/Scheduler/Scheduler';

const Container = styled.div`
  margin: 1em auto;
  max-width: 60em;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Scheduler />
    </Container>
  );
}

export default App;
