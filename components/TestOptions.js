import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  margin-right: 50px;
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
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  width: 150px;
  border: 1.5px solid #358e9d;
  color: #358e9d;
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

  align-items: center;
  @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: #ffb703;
  color: #013047;
  font-size: 16px;
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
          <ListItem style={{ marginBottom: 104 }}>
            Results in 10 minutes
          </ListItem>
        </List>
        <Button>Book Now</Button>
      </CardContainer>
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
