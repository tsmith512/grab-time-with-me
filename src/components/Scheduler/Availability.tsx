import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 0 50%;
  border-left: 1px solid #ddd;
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

const availabilityToday = (dateTest: moment.Moment) => {
  return dateTest.isSame(new Date, 'day');
}

const availabilityDates = (dateTest: moment.Moment) => {
  const isWeekend = [0, 6].includes(parseInt(dateTest.format('d')));
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
        <p>Availability Container</p>
        <Button onClick={() => (setStage("day"))}>Test Placeholder: Pick a different day</Button>
        <Link to="/meet/">Test Placeholder: Pick this time</Link>
      </Container>
    );
  }

  // We have to return something otherwise compile fails but we should not ever
  // end up here.
  return (<p>There was an error</p>);
}

export default Availability;
