import styled from "styled-components";

const Aboutcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 100vw;
`;

const AboutContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100vw;
  background-color: #8ecae6;
  padding-left: 1000px;
  padding-top: 70px;
`;

const AboutContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
  width: 100vw;
  background-color: white;
  align-items: center;
  padding-left: 320px;
  padding-right: 320px;
`;

const BottomContainerBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 260px;
  width: 200px;
  background-color: white;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  background-color: white;
`;

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  width: 100px;
  background-color: #8ecae6;
  border-radius: 50px;
`;

const About = () => {
  return (
    <Aboutcontainer>
      <AboutContainerTop>
        <h1>Testing Made Easy</h1>
        <h4>Checkmark 1</h4>
        <h4>Checkmark 2</h4>
        <h4>Checkmark 2</h4>
      </AboutContainerTop>
      <AboutContainerBottom>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/55/000000/external-checkmark-chat-flatart-icons-outline-flatarticons.png" />
            </IconCircle>
          </IconContainer>
          <h3 style={{ color: "#013047" }}>Competitvely priced</h3>
          <h5 style={{ color: "#013047" }}>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle></IconCircle>
          </IconContainer>
          <h3>Fast service</h3>
          <h5>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/55/000000/external-medical-health-medicine-flatart-icons-outline-flatarticons-4.png" />
            </IconCircle>
          </IconContainer>
          <h3>Same Day Results</h3>
          <h5>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle></IconCircle>
          </IconContainer>
          <h3>Certified</h3>
          <h5>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
      </AboutContainerBottom>
    </Aboutcontainer>
  );
};

export default About;
