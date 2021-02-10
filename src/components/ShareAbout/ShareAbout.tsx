import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Headline, Subhead, Panel, Button, SectionTitle, Note } from '../Elements';

const Group = styled.div`
  padding: 1em;

  font-family: "Decimal A", "Decimal B";
  font-style: normal;
  font-weight: 300;
  font-size: 1.25em;

  label {
    color: #008C9E;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 0.25em;
  padding: 1em;

  font-family: "Decimal A", "Decimal B";
  font-style: normal;
  font-weight: 300;
  font-size: 0.75em;



  border: 1px solid #008C9E;
  border-radius: 3px;
  color: #008C9E;
  background: #fff;

  &:focus {
    border-color: #00DFFC;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    outline: none;
  }
`;

const makeURL = (input: string): string => (window.origin + '/i/' + encodeURI(input));

const ShareAbout: React.FC = () => {
  const [name, setName] = useState("Bill Brock");

  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <Container>
      <Panel>
        <Headline>Thanks</Headline>
        <Subhead>But this isn't a fit.</Subhead>
      </Panel>
      <Panel>

        <SectionTitle>Never give up on those cold callers.</SectionTitle>
        <Note>Customize your own invite link.</Note>

        <Group>
          <label>Your Name
            <Input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
          </label>
        </Group>
        <Group>
          <label>Send this link
            <Input type="text" value={makeURL(name)} readOnly />
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
