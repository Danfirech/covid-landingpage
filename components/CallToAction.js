import styled from "styled-components";

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100vw;
  background-color: #219ebc;
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
        <h1 style={{ color: "#013047", fontSize: 80 }}>Need Testing?</h1>
        <h3
          style={{
            color: "#013047",
            fontSize: 20,
            marginTop: -30,
            marginBottom: 50,
          }}
        >
          Let our team walk you through our test options! <br></br> A certified
          medical assistant will come to you, <br></br> making the proceess
          easy, fast, and comfortable.
        </h3>
        <Button>Get Started</Button>
      </CallToActionContainer>
    </>
  );
};

export default CallToAction;
