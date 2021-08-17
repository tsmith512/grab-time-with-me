import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
`;

const FooterText = styled.p`
  font-family: "Decimal A", "Decimal B", Helvetica, Arial, sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 0.75em;
  color: #343838;

  a {
    color: #008C9E;
    text-decoration: none;
  }

  @media screen and (min-width: 560px) {
    font-size: 1em;
  }
`;

const LogoBox = styled.div`
  margin-right: 1em;
`;

const Footer: React.FC = () => (
  <Container>
    <FooterText>
      &copy; 2021 Grab Time With Me. Simple on-demand scheduling for critical conversations. <a href="https://tsmith.com">Learn More!</a>
    </FooterText>
  </Container>
);

export default Footer;
