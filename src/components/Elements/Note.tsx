import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.p`
  text-align: center;
  font-size: 1em;
  margin-top: -1.25em;
  margin-bottom: 2em;

  font-family: "Decimal A", "Decimal B";
  font-style: italic;
  font-weight: 300;
`;

const Note: React.FC = (props) => (<StyledNote>{props.children}</StyledNote>);

export default Note;
