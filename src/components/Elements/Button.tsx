import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  margin: 1em auto;
  padding: 1em 1.25em;

  font-family: "Decimal A", "Decimal B", Helvetica, Arial, sans-serif;
  font-weight: 500;

  border: 1px solid #343838;
  border-radius: 3px;
  color: #fff;
  background: #005F6B;

  &:hover, &:active, &:focus {
    background: #008C9E;
  }

  &:disabled {
    color: #343838;
    background: #eee;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, disabled, ...props}) => {
  onClick = onClick || ((e) => {e.preventDefault()});
  disabled = (typeof(disabled) === 'undefined') ? false : disabled;

  return (<StyledButton onClick={onClick} disabled={disabled}>{props.children}</StyledButton>);
}

export default Button;
