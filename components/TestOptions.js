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
      <TestOptionCard price="10" type="Basic" />
      <TestOptionCard price="20" type="Premium" />
      <TestOptionCard price="30" type="Advanced" />
    </Container>
  );
};
export default TestOptions;
