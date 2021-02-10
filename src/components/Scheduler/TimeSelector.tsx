import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const TimeOptions = styled.div`
  margin-bottom: 1em;
`;

const Option = styled.button`
  display: block;
  margin: 0.5em auto;
  width: 8em;
  padding: 0.75em 0.25em;

  border: 1px solid #008C9E;
  border-radius: 3px;
  color: #008C9E;
  background: #fff;

  font-family: "Decimal A", "Decimal B";
  font-style: normal;
  font-weight: 300;
  font-size: 1.25em;

  &:hover {
    color: #00B4CC;
    border-color: #00DFFC;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
  }
`;

const timesOptions = ["10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm", "3:00pm", "3:30pm", "4:00pm"];

const timesAvailable = (): Array<string> => {
  // Make a list of options where each has a 30% chance of appearing in the list
  const options = timesOptions.filter(time => ((Math.random() * 100) < 30));

  // If we have any options, present them, otherwise pick one to list
  return (options.length > 0) ? options : [timesOptions[Math.floor(Math.random() * 10)]];
}

const TimeSelector: React.FC = () => {
  const history = useHistory();
  const selectTime = () => history.push('/meet/');

  return (
    <TimeOptions>
      {timesAvailable().map((label, index) => (
        <Option key={index} onClick={selectTime}>{label}</Option>
      ))}
    </TimeOptions>
  );
}

export default TimeSelector;
