import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 900px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 400px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LineContainer = styled.div`
  display: flex;
  height: 700;
  width: 2px;
`;

const Line = styled.div`
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 0.5px;
  background-color: black;
`;

const CardContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 130px;
  padding-left: 130px;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 75px;
  color: #0c234b;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  width: 240px;
  font-size: 25px;
  border: 1.5px solid #1e5288;
  color: #1e5288;
  background-color: white;
  border-radius: 20px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 15px;
`;
const ListItem = styled.li`
  margin: 30px 0;
  margin-top: -10px;
  padding-right: 30px;
  font-size: 25px;
  align-items: center;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: #0c234b;
  color: white;
  font-size: 25px;
  font-family: "Montserrat-Bold";
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;
  }
`;

const TestOptions = ({ price, type }) => {
  return (
    <Container>
      <CardContainer>
        <PriceContainer>
          <Price>$149</Price>
        </PriceContainer>
        <Type>Rapid Antigen</Type>
        <List>
          <ListItem style={{ marginBottom: 120 }}>
            Results in 10 minutes
          </ListItem>
        </List>
        <Button>Book Now</Button>
      </CardContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <CardContainer>
        <PriceContainer>
          <Price>$199</Price>
        </PriceContainer>
        <Type>RT-PCR</Type>
        <List>
          <ListItem>Results in 24 Hours</ListItem>
          <ListItem>Travel Certificate</ListItem>
          <ListItem>Not valid for Hawaii</ListItem>
        </List>
        <Button>Book Now</Button>
      </CardContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <CardContainer>
        <PriceContainer>
          <Price>$349</Price>
        </PriceContainer>
        <Type>Expedited RT-PCR</Type>
        <List>
          <ListItem>Results in 6 Hours</ListItem>
          <ListItem>Travel Certificate</ListItem>
          <ListItem>Not valid for Hawaii</ListItem>
        </List>
        <Button>Book Now</Button>
      </CardContainer>
    </Container>
  );
};

export default TestOptions;
