import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 10%;
  background-color: white;
  color: #0c234b;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const FooterCorporate = () => {
  return (
    <Container>
      <Wrapper>
        <Copyright>Ⓒ 2022 CovidTesing || DAT WebDesign</Copyright>
      </Wrapper>
    </Container>
  );
};

export default FooterCorporate;
