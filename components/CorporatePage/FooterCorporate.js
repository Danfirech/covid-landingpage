import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: white;
  color: #0c234b;
`;

const Wrapper = styled.div`
  padding: 120px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ListItemTitle = styled.li`
  margin-right: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const ListItem = styled.li`
  margin-right: 150px;
  padding-bottom: 5px;
  font-size: 15px;
  @media only screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const FooterCorporate = () => {
  return (
    <Container>
      <Wrapper>
        LOGO HERE
        <List>
          <ListItemTitle>Contact</ListItemTitle>
          <ListItem>(123) 765-2678</ListItem>
          <ListItem>covidtesting@covid.com</ListItem>
        </List>
        <List>
          <ListItemTitle>About CovidTesting</ListItemTitle>
          <ListItem>Doctors</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>Press</ListItem>
          <ListItem>Blog</ListItem>
        </List>
        <List>
          <ListItemTitle>Info</ListItemTitle>
          <ListItem>Terms & Conditions </ListItem>
          <ListItem>HIPAA-Notice</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Post-Testing Guidance</ListItem>
          <ListItem>Refund Policy</ListItem>
        </List>
      </Wrapper>
    </Container>
  );
};

export default FooterCorporate;
