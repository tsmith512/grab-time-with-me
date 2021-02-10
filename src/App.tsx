import React from 'react';
import styled from 'styled-components';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { GlobalStyles, Header, Footer } from './components';
import { Routes } from './routes';

const Container = styled.div`
  margin: 1em;
  max-width: 60em;

  @media only screen and (min-width: 960px) {
    margin: 1em auto;
  }
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
