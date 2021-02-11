import React from 'react';
import styled from 'styled-components';

const StyledSubhead = styled.h2`
  font-size: 1.125em;
  color: #999;
  color: #008C9E;

  font-family: "Decimal A", "Decimal B", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 300;
`;

const Subhead: React.FC = (props) => (<StyledSubhead>{props.children}</StyledSubhead>);

export default Subhead;
