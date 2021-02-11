import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.p`
  display: block;
  text-align: center;
  font-size: 1.25em;
  margin-bottom: 1em;

  @media only screen and (min-width: 960px) {
    margin-top: 1em;
  }

  font-family: "Decimal A", "Decimal B", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
`;

const SectionTitle: React.FC = (props) => (<StyledSectionTitle>{props.children}</StyledSectionTitle>);

export default SectionTitle;
