import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';

import TimeSelector from './TimeSelector';

const Container = styled.div`
  flex: 1 0 50%;
  border-left: 1px solid #BDB8AD;
  padding: 1em;
`

const StageHeadline = styled.p`
  display: block;
  text-align: center;
  font-size: 1.25em;
  margin: 1em;
`;

const Button = styled.button`
  display: block;
  margin: 1em auto;
`;

const Note = styled.p`
  text-align: center;
  font-size: 0.875em;
  font-style:italic;
  margin-top: -1.25em;
  margin-bottom: 2em;
`;

const availabilityToday = (dateTest: moment.Moment) => {
  return dateTest.isSame(new Date, 'day');
}

const availabilityDates = (dateTest: moment.Moment) => {
  // BLock out weekends
  const isWeekend = [0, 6].includes(parseInt(dateTest.format('d')));

  // Give each day a 20% chance of being blocked randomly
  const isRandoDay = (Math.random() * 100) < 20;

  // Never block out today. Block out all weekend and random days.
  return (!availabilityToday(dateTest) && (isWeekend || isRandoDay));
}



const Availability: React.FC = () => {
  const [stage, setStage] = useState('day');
  const [date, setDate] = useState<moment.Moment | null>(null);

  if (stage === "day") {
    return (
      <Container>
        <StageHeadline>Find a Day</StageHeadline>
        <SingleDatePicker
          placeholder="Let's try for"
          date={date} // momentPropTypes.momentObj or null
          onDateChange={(newDate) => setDate(newDate)} // PropTypes.func.isRequired
          focused={true}
          onFocusChange={() => {}} // PropTypes.func.isRequired
          id="day_input" // PropTypes.string.isRequired,
          numberOfMonths={1}
          isDayBlocked={availabilityDates}
          isDayHighlighted={availabilityToday}
          daySize={55}
          noBorder
          hideKeyboardShortcutsPanel={true}
        />

        <Button onClick={() => (setStage("hour"))} disabled={date === null}>Find a time</Button>
      </Container>
    );
  }

  else if (stage === "hour") {
    return (
      <Container>
        <StageHeadline>Looking at {date?.format('dddd, MMM Do')}</StageHeadline>
        <Note>Times shown in your system's local timezone.</Note>
        <TimeSelector />
        <Button onClick={() => (setStage("day"))}>Pick a Different Day</Button>
      </Container>
    );
  }

  // We have to return something otherwise compile fails but we should not ever
  // end up here.
  return (<p>There was an error</p>);
}

export default Availability;
