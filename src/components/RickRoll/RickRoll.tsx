import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ReactPlayer from 'react-player'
import { Button } from '../Elements';

const IntrinsicRatio = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%;
`;

const ShareLinkContainer = styled.div`
  padding: 1em;
  text-align: center;
`;

const RickRoll: React.FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/share/');

  return (
    <>
      <IntrinsicRatio>
        <ReactPlayer url='https://www.youtube.com/watch?v=DLzxrzFCyOs' width="100%" height="100%" className="video-player" />
      </IntrinsicRatio>

      <ShareLinkContainer>
        <Button onClick={handleClick}>Sorry About That</Button>
      </ShareLinkContainer>
    </>
  );
}

export default RickRoll;
