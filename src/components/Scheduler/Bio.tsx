import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Headline, Subhead } from '../Elements';

const Bio: React.FC = () => {
  let { name } = useParams<{ name: string }>();
  name = typeof(name) !== 'undefined' ? decodeURI(name).replace('+', ' ') : "Bill Brock";

  return (
    <>
      <Headline>{name}</Headline>
      <Subhead>Schedule a 30 minute follow-up</Subhead>
    </>
  );
}

export default Bio;
