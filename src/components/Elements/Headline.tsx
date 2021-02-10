import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-size: 3.5em;
  color: #008C9E;

  font-family: "Sagittarius A", "Sagittarius B";
  font-style: normal;
  font-weight: 400;
`;

const Headline: React.FC = (props) => (<StyledHeadline>{props.children}</StyledHeadline>);

export default Headline;
