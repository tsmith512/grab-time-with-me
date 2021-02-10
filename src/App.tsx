import React from 'react';
import styled from 'styled-components';

import { GlobalStyles, Header, Footer } from './components';
import { Routes } from './routes';

const Container = styled.div`
  margin: 1em auto;
  max-width: 60em;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
