import styled from "styled-components";
import covidTestPic from "../assets/images/covidTestPic.jpeg";
import stockTester from "../assets/images/stockTester.png";
import Line from "../assets/images/Line.png";
import Image from "next/image";
import IphoneIcon from "../assets/images/IphoneIcon.png";
import HouseIcon from "../assets/images/HouseIcon.png";
import MedicalHistoryIcon from "../assets/images/MedicalHistoryIcon.png";

const Aboutcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  width: 100vw;
  padding-top: 200px;
  background-color: #dfe5e5;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 2000px;
    width: 100vw;
  }
`;

const AboutContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100vw;
  background-color: #dfe5e5;
`;

const AboutContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
  width: 100vw;
  background-color: #dfe5e5;
  align-items: center;
  padding-left: 320px;
  padding-right: 320px;
  padding-top: 50px;

  .h1bottom {
    color: #0c234b;
    font-family: "Montserrat-Bold";
    padding-top: 13px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
    height: 1400px;
    width: 100vw;
    padding-top: 50px;
    align-items: center;
    justify-content: space-between;
  }
`;

const BottomContainerBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 260px;
  width: 300px;
  background-color: #dfe5e5;
  padding-top: 70px;
  @media (max-width: 376px) {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  background-color: #dfe5e5;
  z-index: 1;
  padding-bottom: 80px;
`;

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 130px;
  background-color: #1e5288;
  border-radius: 65px;
`;

const About = () => {
  return (
    <Aboutcontainer>
      <AboutContainerTop>
        <h1 className="h1bottom">WE COME TO YOU</h1>
      </AboutContainerTop>
      <AboutContainerBottom>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <Image src={IphoneIcon} width="64" height="64" />
            </IconCircle>
          </IconContainer>
          <h1 className="h1bottom">1. Book Apointment</h1>
          <h4 style={{ color: "#013047" }}>
            Register online and choose your preferred time window (morning,
            afternoon, evening and night).
          </h4>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <Image src={HouseIcon} width="64" height="64" />
            </IconCircle>
          </IconContainer>
          <h1 className="h1bottom">2. Get Tested at Home</h1>
          <h4 style={{ color: "#0c234b" }}>
            We dispatch a medical assistant to the location of your choice.
            Track our location in real time!
          </h4>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <Image src={MedicalHistoryIcon} width="64" height="64" />
            </IconCircle>
          </IconContainer>
          <h1 className="h1bottom">3. Get Results, Fast!</h1>
          <h4 style={{ color: "#0c234b" }}>
            Receive emailed results fast. RT – PCR results in 24 Hrs Rapid
            Antigen Results in 10 Min
          </h4>
        </BottomContainerBoxes>
      </AboutContainerBottom>
    </Aboutcontainer>
  );
};

export default About;
