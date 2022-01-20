import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 1100px;
  width: 100vw;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  padding-right: 250px;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 600px;
  padding: 16px;
  margin-top: 35px;
  font-family: 'Montserrat-Bold';
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 600px;
  padding: 40px;
  margin-top: 35px;
  font-family: 'Montserrat-Bold';
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #0c234b;
  color: white;
  font-size: 20px;
  font-family: 'Montserrat-Bold';
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>Questions? Let us contact you.</Title>
          <Text>
            Interested in learning more about the Sameday offering or would like
            to set up a corporate account? Please provide your details here and
            our team is available 7 days a week to help you mitigate COVID-19
            risks through efficient, tailor-made testing solutions
          </Text>
        </InfoContainer>
        <FormContainer>
          <Form>
            <LeftForm>
              <Input placeholder="Name *" />
              <Input placeholder="Email *" />
              <Input placeholder="Phone" />
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </LeftForm>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
