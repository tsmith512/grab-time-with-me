import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const RickRoll: React.FC = () => (
  <Container>
    <IntrinsicRatio>
      <ReactPlayer url='https://www.youtube.com/watch?v=DLzxrzFCyOs' width="100%" height="100%" className="video-player" />
    </IntrinsicRatio>

    <ShareLinkContainer>
      <Link to="/share/">Sorry About That</Link>
    </ShareLinkContainer>
  </Container>
);

export default RickRoll;
