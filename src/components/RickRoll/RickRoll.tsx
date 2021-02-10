import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const IntrinsicRatio = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%;
`;

const ShareLinkContainer = styled.div`
  padding: 1em;
  text-align: center;
`;

const Button = styled.button`
  display: block;
  margin: 1em auto;
`;

const RickRoll: React.FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/share/');

  return (
    <Container>
      <IntrinsicRatio>
        <ReactPlayer url='https://www.youtube.com/watch?v=DLzxrzFCyOs' width="100%" height="100%" className="video-player" />
      </IntrinsicRatio>

      <ShareLinkContainer>
        <Button onClick={handleClick}>Sorry About That</Button>
      </ShareLinkContainer>
    </Container>
  );
}

export default RickRoll;
