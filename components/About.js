import styled from "styled-components";

const AboutContainerTop = styled.div`
  height: 300px;
  width: 100vw;
  background-color: blue;
`;

const AboutContainerBottom = styled.div`
  height: 300px;
  width: 100vw;
  background-color: green;
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

const About = () => {
  return (
    <>
      <AboutContainerTop />
      <AboutContainerBottom />
    </>
  );
};

export default About;
