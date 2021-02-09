import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const goToTimes = () => {
  alert('Next up: show list of times');
}

const Container = styled.div`
  flex: 1 0 50%;
  border-left: 1px solid #ddd;
  min-height: 500px;
`

const Availability: React.FC = () => {
  const [stage, setStage] = useState("day");

  if (stage === "day") {
    return (
      <Container>
        <p>Availability Container</p>
        <button onClick={() => (setStage("hour"))}>Test Placeholder: Pick this day</button>
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
