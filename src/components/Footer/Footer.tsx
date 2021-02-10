import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
`;

const FooterText = styled.h1`
  font-family: "Ringside Compressed SSm A", "Ringside Compressed SSm B";
  font-style: normal;
  font-weight: 300;
  color: #8E8981;
  text-shadow: 1px 1px 0 white;
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
