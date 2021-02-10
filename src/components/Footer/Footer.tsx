import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
`;

const FooterText = styled.h1`
  font-family: "Decimal A", "Decimal B";
  font-style: italic;
  font-weight: 300;
  color: #343838;

  a {
    color: #008C9E;
    text-decoration: none;
  }
`;

const LogoBox = styled.div`
  margin-right: 1em;
`;

const Header: React.FC = () => (
  <Container>
    <FooterText>
      &copy; 2021 Grab Time With Me. Simple on-demand scheduling for critical conversations. <a href="https://tsmith.com">Learn More!</a>
    </FooterText>
  </Container>
);

export default Header;
