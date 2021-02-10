import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';

const goToTimes = () => {
  alert('Next up: show list of times');
}

const Container = styled.div`
  flex: 1 0 50%;
  border-left: 1px solid #ddd;
`

const DateLabel = styled.p`
  text-align: center;
  font-size: 1.25em;
  margin: 1em;
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
  const [date, setDate] = useState(null);
  const [focused, setFocus] = useState(true);

  if (stage === "day") {
    return (
      <Container>
        <DateLabel>Let's shoot for</DateLabel>
        <SingleDatePicker
          date={date} // momentPropTypes.momentObj or null
          onDateChange={newDate => setDate(date)} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={({ focused }) => setFocus(focused)} // PropTypes.func.isRequired
          id="day_input" // PropTypes.string.isRequired,
          numberOfMonths={1}
          isDayBlocked={availabilityDates}
          isDayHighlighted={availabilityToday}
          daySize={55}
          noBorder
          hideKeyboardShortcutsPanel={true}
        />
      </Container>
    );
  }

  else if (stage === "hour") {
    return (
      <Container>
        <p>Availability Container</p>
        <button onClick={() => (setStage("day"))}>Test Placeholder: Pick a different day</button>
        <Link to="/meet/">Test Placeholder: Pick this time</Link>
      </Container>
    );
  }

  // We have to return something otherwise compile fails but we should not ever
  // end up here.
  return (<p>There was an error</p>);
}

export default Availability;
