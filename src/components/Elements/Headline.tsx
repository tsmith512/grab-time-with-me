import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  font-size: 2.5em;
  @media only screen and (min-width: 640px) {
    font-size: 3.5em;
  }

  color: #008C9E;

  font-family: "Sagittarius A", "Sagittarius B", "Helvetica Narrow", "Arial Narrow", sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const Headline: React.FC = (props) => (<StyledHeadline>{props.children}</StyledHeadline>);

export default Headline;
