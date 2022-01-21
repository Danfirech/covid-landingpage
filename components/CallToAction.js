import styled from "styled-components";
import CallToActionShape from "../assets/images/CallToActionShape.png";
import Blob from "../assets/images/blob.png";
import Image from "next/image";
import Home from "../assets/images/athometest2.png";

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100vw;
`;

const Button1 = styled.button`
  border: none;
  height: 50px;
  width: 180px;
  background-color: #0c234b;
  position: absolute;
  color: white;
  margin-top: 440px;
  margin-left: 200px;
  border-radius: 10px;
  font-size: 17px;
  font-family: "Montserrat-Bold";
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const Button2 = styled.button`
  border: none;
  height: 50px;
  width: 180px;
  background-color: #0c234b;
  position: absolute;
  color: white;
  margin-top: 440px;
  margin-left: 450px;
  border-radius: 10px;
  font-size: 17px;
  font-family: "Montserrat-Bold";
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const Imag = styled.div`
  width: 100vw;
  height: 10%;
  display: flex;
`;

const CallToAction = (props) => {
  return (
    <>
      <CallToActionContainer>
        <Imag>
          <div
            style={{
              position: "absolute",
            }}
          >
            <Image
              className="home_img"
              src={Home}
              objectFit={"cover"}
              width={1920}
              height={650}
            />
          </div>
        </Imag>

        <h1
          style={{
            color: "#0c234b",
            fontSize: 80,
            fontFamily: "Montserrat-Bold",
            zIndex: 0,
            paddingLeft: 180,
            paddingTop: 60,
            marginBottom: -10,
          }}
        >
          Mobile COVID-19 <br></br> Testing
        </h1>
        <h3
          style={{
            color: "white",
            fontSize: 20,
            zIndex: 0,
            paddingLeft: 195,
            paddingTop: 20,
          }}
        >
          Let our team walk you through our test options! <br></br> A certified
          medical assistant will come to you, <br></br> making the proceess
          easy, fast, and comfortable.
        </h3>
        <Button1>Mobile Testing</Button1>
        <Button2>Corporate Testing</Button2>
      </CallToActionContainer>
      <div></div>
    </>
  );
};

export default CallToAction;
