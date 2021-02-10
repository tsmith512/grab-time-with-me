import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  border: 1px solid #00B4CC;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0,0,0,0.125);

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
    border-left: 1px solid #00B4CC;
  }
`;

const Headline = styled.h1`
  font-size: 4em;
  font-weight: bold;
  color: #008C9E;

  font-family: "Sagittarius A", "Sagittarius B";
  font-style: normal;
  font-weight: 400;
`;

const Subhead = styled.h2`
  font-size: 1.25em;
  color: #999;
  color: #008C9E;

  font-family: "Decimal A", "Decimal B";
  font-style: normal;
  font-weight: 300;
`;

const Explanation = styled.p`
  margin: 1em auto;
  font-size: 1.25em;
  font-weight: bold;

  font-family: "Decimal A", "Decimal B";
  font-style: normal;
  font-weight: 500;
`;

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

const Button = styled.button`
  display: block;
  margin: 1em auto;
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

        <Explanation>
          Let your cold calls schedule a time with you, too!
        </Explanation>

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
