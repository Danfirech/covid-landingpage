import styled from 'styled-components';
import CallToActionShape from '../assets/images/CallToActionShape.png';
import Blob from '../assets/images/blob.png';
import Image from 'next/image';
import Home from '../assets/images/athometest2.png';

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
              position: 'absolute',
            }}
          >
            <Image
              className="home_img"
              src={Home}
              objectFit={'cover'}
              width={1920}
              height={650}
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
            color: '#243338',
            fontSize: 80,
            fontFamily: 'Montserrat-Bold',
            zIndex: 0,
            paddingLeft: 80,
            paddingTop: 90,
            marginBottom: -10,
          }}
        >
          Mobile COVID-19 Testing
        </h1>
        <h3
          style={{
            color: '#013047',
            fontSize: 20,
            zIndex: 0,
            paddingLeft: 100,
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
