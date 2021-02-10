import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
  background: #fff;
  border: 1px solid #00B4CC;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0,0,0,0.125);

  @media only screen and (min-width: 960px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-items: stretch;
  }
`;

const Container: React.FC = (props) => (<StyledContainer>{props.children}</StyledContainer>);

export default Container;
