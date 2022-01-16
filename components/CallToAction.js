import styled from "styled-components";

const CallToActionContainer = styled.div`
  height: 400px;
  width: 100vw;
  background-color: #219ebc;
  padding-left: 370px;
  padding-top: 80px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 130px;
  background-color: #ffb703;
  color: #01304;
`;

const CallToAction = () => {
  return (
    <>
      <CallToActionContainer>
        <h1 style={{ color: "#013047" }}>Need Testing?</h1>
        <h3 style={{ color: "#013047" }}>
          Let our team walk you through <br></br>
          our test options!
        </h3>
        <Button>Get Started</Button>
      </CallToActionContainer>
    </>
  );
};

export default CallToAction;
