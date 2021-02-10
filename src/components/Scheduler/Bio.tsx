import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Container = styled.header`
  flex: 1 0 50%;
  align-self: center;
  text-align: center;
`;

const BioName = styled.h1`
  font-size: 3em;
  color: #44749D;

  font-family: "Inkwell Sans A", "Inkwell Sans B";
  font-style: italic;
  font-weight: 800;
`;

const BioMeetingType = styled.h2`
  font-size: 1.25em;
  color: #44749D;

  font-family: "Ringside Compressed SSm A", "Ringside Compressed SSm B";
  font-style: normal;
  font-weight: 300;
`;

const Bio: React.FC = () => {
  let { name } = useParams<{ name: string }>();
  name = typeof(name) !== 'undefined' ? decodeURI(name).replace('+', ' ') : "Bill Brock";

  return (
    <Container>
      <BioName>{name}</BioName>
      <BioMeetingType>Schedule a 30 minute follow-up</BioMeetingType>
    </Container>
  );
}

export default Bio;
