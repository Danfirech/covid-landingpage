import React from 'react';
import styled from 'styled-components';
import TestOptionCard from './TestOptionCard';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const TestOptions = () => {
  return (
    <Container>
      <TestOptionCard price="149" type="Rapid Antigen" />
      <TestOptionCard price="199" type="RT-PCR" />
      <TestOptionCard price="349" type="Expedited RT-PCR" />
    </Container>
  );
};
export default TestOptions;
