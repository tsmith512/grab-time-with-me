import React from 'react';
import styled from 'styled-components';

const StyledPanel = styled.div`
  flex: 1 0 50%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1em;

  & + & {
    border-left: 1px solid #00B4CC;
  }
`;

const Panel: React.FC = (props) => (<StyledPanel>{props.children}</StyledPanel>);

export default Panel;
