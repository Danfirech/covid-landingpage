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
  height: 50px;
  width: 120px;
  background-color: #1d5288;
  position: absolute;
  color: white;
  margin-top: 460px;
  margin-left: 240px;
  border-radius: 10px;
`;

const Button2 = styled.button`
  height: 50px;
  width: 120px;
  background-color: #1d5288;
  position: absolute;
  color: white;
  margin-top: 460px;
  margin-left: 490px;
  border-radius: 10px;
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
            color: "#243338",
            fontSize: 80,
            fontFamily: "Montserrat-Bold",
            zIndex: 0,
            paddingLeft: 180,
            paddingTop: 90,
            marginBottom: -10,
          }}
        >
          Mobile COVID-19 <br></br> Testing
        </h1>
        <h3
          style={{
            color: "#013047",
            fontSize: 20,
            zIndex: 0,
            paddingLeft: 185,
          }}
        >
          Let our team walk you through our test options! <br></br> A certified
          medical assistant will come to you, <br></br> making the proceess
          easy, fast, and comfortable.
        </h3>
        <Button1>At Home</Button1>
        <Button2>Group</Button2>
      </CallToActionContainer>
      <div></div>
    </>
  );
};

export default CallToAction;
