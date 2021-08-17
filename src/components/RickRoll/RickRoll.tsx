import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import YouTube, { Options, PlayerVars } from 'react-youtube';
import { Button } from '../Elements';

const IntrinsicRatio = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60%;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ShareLinkContainer = styled.div`
  padding: 1em;
  text-align: center;
`;

const playerOptions: Options = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 0,
    controls: 0,
  },
};

const playerReady = (event: any) => {
  console.log('player ready');
  event.target?.unMute();
  event.target?.playVideo();
};

const RickRoll: React.FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/share/');

  return (
    <>
      <IntrinsicRatio>
        <YouTube videoId="DLzxrzFCyOs" opts={playerOptions} onReady={playerReady} />
      </IntrinsicRatio>

      <ShareLinkContainer>
        <Button onClick={handleClick}>Sorry About That</Button>
      </ShareLinkContainer>
    </>
  );
};

export default RickRoll;
