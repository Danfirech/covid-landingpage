import styled from "styled-components";
import covidTestPic from "../assets/images/covidTestPic.jpeg";

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
  padding-left: 300px;
  padding-top: 60px;
  background-size: cover;
  background-image: url("https://t4.ftcdn.net/jpg/04/75/05/61/240_F_475056100_hZthb2HwFa3qy9NY1nKgWLDEu7XH0gFS.jpg");
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
  padding-top: 50px;
`;

const BottomBorderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2px;
  width: 100vw;
`;

const BottomBorderLine = styled.div`
  height: 2px;
  width: 1150px;
  background-color: black;
`;

const BottomContainerBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 260px;
  width: 200px;
  background-color: white;
  padding-top: 70px;
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
        <h1 style={{ fontFamily: "Montserrat-Bold" }}>Testing Made Easy</h1>
        <h3>
          <img src="https://img.icons8.com/emoji/28/000000/check-mark-emoji.png" />
          A licensed medical assistant will come to you.
        </h3>
        <h3>
          <img src="https://img.icons8.com/emoji/28/000000/check-mark-emoji.png" />
          Our sign up process is simple.
        </h3>
        <h3>
          <img src="https://img.icons8.com/emoji/28/000000/check-mark-emoji.png" />
          Certified travel documents.
        </h3>
      </AboutContainerTop>
      <AboutContainerBottom>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/55/000000/external-dollar-sign-commerce-dreamstale-lineal-dreamstale.png" />
            </IconCircle>
          </IconContainer>
          <h3
            style={{
              color: "#013047",
              fontFamily: "Montserrat-Bold",
              paddingTop: 10,
            }}
          >
            Competitvely priced
          </h3>
          <h5 style={{ color: "#013047" }}>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/ios/55/000000/car--v1.png" />
            </IconCircle>
          </IconContainer>
          <h3 style={{ fontFamily: "Montserrat-Bold", paddingTop: 10 }}>
            Fast service
          </h3>
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
          <h3 style={{ fontFamily: "Montserrat-Bold", paddingTop: 10 }}>
            Same Day Results
          </h3>
          <h5>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/55/000000/external-checkmark-chat-flatart-icons-outline-flatarticons.png" />
            </IconCircle>
          </IconContainer>
          <h3 style={{ fontFamily: "Montserrat-Bold", paddingTop: 10 }}>
            Certified
          </h3>
          <h5>
            We have competitive pricing <br></br>
            that wont break the bank.
          </h5>
        </BottomContainerBoxes>
      </AboutContainerBottom>
      {/* <BottomBorderContainer>
        <BottomBorderLine />
      </BottomBorderContainer> */}
    </Aboutcontainer>
  );
};

export default About;
