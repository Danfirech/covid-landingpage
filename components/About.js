import styled from 'styled-components';
import covidTestPic from '../assets/images/covidTestPic.jpeg';
import stockTester from '../assets/images/stockTester.png';
import Line from '../assets/images/Line.png';
import Image from 'next/image';

const Aboutcontainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  width: 100vw;
  padding-top: 200px;
  background-color: #dfe5e5;
  @media (max-width: 376px) {
    flex-direction: column;
    height: 800px;
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
  @media (max-width: 376px) {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
    height: 400px;
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
  background-color: #8ecae6;
  border-radius: 65px;
`;

const About = () => {
  return (
    <Aboutcontainer>
      <AboutContainerTop>
        <h1
          style={{
            color: 'black',
            fontSize: 50,
            zIndex: 1,
            marginBottom: -90,
          }}
        >
          WE COME TO YOU
        </h1>
      </AboutContainerTop>
      <AboutContainerBottom>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/85/000000/external-dollar-sign-commerce-dreamstale-lineal-dreamstale.png" />
            </IconCircle>
          </IconContainer>
          <h1
            style={{
              color: '#013047',
              fontFamily: 'Montserrat-Bold',
              paddingTop: 13,
            }}
          >
            1. Book Apointment
          </h1>
          <h4 style={{ color: '#013047' }}>
            Register online and choose your preferred time window (morning,
            afternoon, evening and night).
          </h4>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/ios/85/000000/car--v1.png" />
            </IconCircle>
          </IconContainer>
          <h1
            style={{
              fontFamily: 'Montserrat-Bold',
              paddingTop: 10,
            }}
          >
            2. Get Tested at Home
          </h1>
          <h4 style={{ color: '#013047' }}>
            We dispatch a medical assistant to the location of your choice.
            Track our location in real time!
          </h4>
        </BottomContainerBoxes>
        <BottomContainerBoxes>
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/85/000000/external-medical-health-medicine-flatart-icons-outline-flatarticons-4.png" />
            </IconCircle>
          </IconContainer>
          <h1
            style={{
              fontFamily: 'Montserrat-Bold',
              paddingTop: 10,
            }}
          >
            3. Get Results, Fast!
          </h1>
          <h4 style={{ color: '#013047' }}>
            Receive emailed results fast. RT – PCR results in 24 Hrs Rapid
            Antigen Results in 10 Min
          </h4>
        </BottomContainerBoxes>
      </AboutContainerBottom>
    </Aboutcontainer>
  );
};

export default About;
