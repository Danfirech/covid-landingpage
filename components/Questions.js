import styled from "styled-components";

const QuestionsPageContainer = styled.div`
  height: 800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionsBox = styled.div`
  background-color: black;
  width: 1200px;
  height: 100px;
  background-color: white;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  /* background-color: #fefefe; */
  background-color: Pink;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  /* background-color: #fefefe; */
  background-color: black;
  color: white;
`;

const Questions = () => {
  return (
    <>
      <QuestionsPageContainer>
        <h1>Frequently Asked Questions (FAQ)</h1>
        <QuestionsBox>
          <Top>
            <h1
              className="boxBorderTop"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
              }}
            >
              Q.
            </h1>
            <h4
              style={{
                paddingTop: 10,
              }}
            >
              Please ask your first question here. It may be any lenght you
              chose?
            </h4>
          </Top>
          <Bottom>
            <h1
              className="boxBorderBottom"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
              }}
            >
              A.
            </h1>
            <h4
              style={{
                paddingTop: 10,
              }}
            >
              Please Answer your first question here. It may be any lenght you
              chose?
            </h4>
          </Bottom>
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
