import styled from "styled-components";

const CallToActionContainer = styled.div`
  height: 400px;
  width: 100vw;
  background-color: pink;
  padding-left: 70px;
  padding-top: 30px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 130px;
  background-color: black;
  color: white;
`;

const CallToAction = () => {
  return (
    <>
      <CallToActionContainer>
        <h1>Need Testing?</h1>
        <h3>
          Let our team walk you through <br></br>
          our test options.
        </h3>
        <Button>Get Started</Button>
      </CallToActionContainer>
    </>
  );
};

export default CallToAction;
