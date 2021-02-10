import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border: 1px solid #BDB8AD;
  border-radius: 3px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: stretch;
  align-items: stretch;
`;

const Panel = styled.div`
  flex: 1 0 50%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 1em;

  & + & {
    border-left: 1px solid #BDB8AD;
  }
`;

const Headline = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: #44749D;
`;

const Subhead = styled.h2`
  font-size: 1.25em;
  color: #999;
  color: #44749D;
`;

const Explanation = styled.p`
  margin: 1em auto;
  max-width: 40em;
  font-weight: bold;
`;

const Group = styled.div`
  padding: 1em;

  label {
    color: #44749D;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 0.25em;

  padding: 1em;
  border: 1px solid #C6D4E1;
  border-radius: 3px;
  color: #44749D;
  background: #fff;
`;

const Button = styled.button`
  display: block;
  margin: 1em auto;
`;


const ShareAbout: React.FC = () => {
  const [name, setName] = useState("Test");

  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <Container>
      <Panel>
        <Headline>Thanks</Headline>
        <Subhead>But this isn't a fit.</Subhead>
      </Panel>
      <Panel>

        <Explanation>
          Let your cold calls schedule a time with you, too!
        </Explanation>

        <Group>
          <label>Your Name
            <Input type="text" value={name} onChange={(e) => (setName(e.target.value))} readOnly />
          </label>
        </Group>
        <Group>
          <label>Send this link
            <Input type="text" value={window.location.origin + "/" + name } readOnly />
          </label>
        </Group>
        <Group>
          <Button onClick={handleClick}>Start Over</Button>
        </Group>
      </Panel>
    </Container>
  );
}

export default ShareAbout;
