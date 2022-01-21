import styled from "styled-components";
import Image from "next/image";
import GroupPhoto from "../../assets/images/GroupPhoto.png";

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100vw;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100px;
  background-color: #ffb703;
  color: #01304;
  z-index: 1;
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
              paddingLeft: 150,
              paddingTop: 50,
            }}
          >
            <Image
              className="home_img"
              src={GroupPhoto}
              objectFit={"cover"}
              width={680}
              height={550}
            />
          </div>
        </Imag>
        {/* <span className="orangeShape">
          <Image
            src={CallToActionShape}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </span>
        <span className="blobShape">
          <Image
            src={Blob}
            alt="Picture of the author"
            width={250}
            height={250}
          />
        </span> */}

        <h1
          style={{
            color: "#243338",
            fontSize: 36,
            fontFamily: "Montserrat-Bold",
            zIndex: 0,
            paddingLeft: 980,
            paddingTop: 60,
            paddingRight: 100,
            marginBottom: -10,
          }}
        >
          The most trusted COVID-19 testing solution for teams and businesses
        </h1>
        <h3
          style={{
            color: "#013047",
            fontSize: 20,
            zIndex: 0,
            paddingLeft: 985,
          }}
        >
          Let our team walk you through our test options! <br></br> A certified
          medical assistant will come to you, <br></br> making the proceess
          easy, fast, and comfortable.
        </h3>
        {/* <Button style={{ fontFamily: 'Montserrat-Regular' }}>
          Get Started
        </Button> */}
      </CallToActionContainer>
    </>
  );
};

export default CallToAction;
