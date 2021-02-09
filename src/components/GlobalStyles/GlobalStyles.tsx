import { createGlobalStyle } from 'styled-components';

/**
 * Starts with a CSS reset and then includes some global defaults. See
 * https://github.com/jgthms/minireset.css/blob/master/minireset.css for
 * the reset stuff.
 */

const GlobalStyles = createGlobalStyle`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  body {
    background: #f2f2f2;
    font-size: 1em;
    line-height: 1.375;
  }
`;

export default GlobalStyles;
