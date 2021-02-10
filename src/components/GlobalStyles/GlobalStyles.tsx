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
    background: #EBE7E0;
    font-size: 1em;
    line-height: 1.375;
  }

  .video-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .SingleDatePicker, .SingleDatePickerInput {
    display: block;
    margin: 0 auto;
  }

  .SingleDatePicker_picker {
    position: static;
  }

  .DateInput {
    display: block;
    margin: 0.25em auto;
  }

  .DateInput_fang {
    display: none;
  }

  .DayPicker {
    margin: 0 auto 1em auto;
    box-shadow: none;
  }

  .CalendarDay {
    font-size: 16px;
  }

  .CalendarDay:hover,
  .CalendarDay__highlighted_calendar:hover {
    background: #44749D;
    color: #fff;
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: #eee;
    border-color: #ddd;
    color: #999;
  }

  .CalendarDay__highlighted_calendar,
  .CalendarDay__highlighted_calendar:active {
    background: #C6D4E1;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:hover,
  .CalendarDay__selected:active {
    background: #E04D4D;
    color: #fff;
    border-color: #BF3B3B;
  }

  .CalendarMonth_caption {
    font-family: "Ringside Compressed SSm A", "Ringside Compressed SSm B";
    font-style: normal;
    font-weight: 500;
  }

  .CalendarMonth_table {
    font-family: "Ringside Compressed SSm A", "Ringside Compressed SSm B";
    font-style: normal;
    font-weight: 300;
  }

  .DayPicker_weekHeader {
    font-family: "Ringside Compressed SSm A", "Ringside Compressed SSm B";
    font-style: normal;
    font-weight: 300;
  }

  #day_input {
    color: #44749D;
    border-bottom-color: #44749D;
  }
`;

export default GlobalStyles;
