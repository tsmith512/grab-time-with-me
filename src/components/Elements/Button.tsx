import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  margin: 1em auto;
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, disabled, ...props}) => {
  onClick = onClick || ((e) => {e.preventDefault()});
  disabled = (typeof(disabled) === 'undefined') ? false : disabled;

  return (<StyledButton onClick={onClick} disabled={disabled}>{props.children}</StyledButton>);
}

export default Button;
