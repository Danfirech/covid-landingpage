import styled from "styled-components";

const QuestionsPageContainer = styled.div`
  height: 800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionsBox = styled.div`
  width: 100vw;
  height: 120px;
  background-color: white;
  padding-top: 30px;
`;

const Top = styled.div`
  height: 60px;
  width: 1200px;

  background-color: pink;
`;

const Bottom = styled.div`
  height: 60px;
  width: 1200px;
  background-color: blue;
`;

const Questions = () => {
  return (
    <>
      <QuestionsPageContainer>
        <h1>Frequently Asked Questions (FAQ)</h1>
        <QuestionsBox>
          <Top></Top>
          <Bottom></Bottom>
          <QuestionsBox>
            <Top></Top>
            <Bottom></Bottom>
          </QuestionsBox>
        </QuestionsBox>
      </QuestionsPageContainer>
    </>
  );
};

export default Questions;
