import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.p`
  display: block;
  text-align: center;
  font-size: 1.25em;
  margin: 1em;

  font-family: "Decimal A", "Decimal B";
  font-style: normal;
  font-weight: 500;
`;

const SectionTitle: React.FC = (props) => (<StyledSectionTitle>{props.children}</StyledSectionTitle>);

export default SectionTitle;
