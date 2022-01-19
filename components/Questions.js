import styled from "styled-components";

const QuestionsPageContainer = styled.div`
  height: 1100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const QuestionsBox = styled.div`
  background-color: black;
  width: 1200px;
  height: 100px;
  background-color: white;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  /* background-color: #fefefe; */
  background-color: #dfe5e5;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 1200px;
  /* background-color: #fefefe; */
  background-color: white;
  color: gray;
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
                color: "#0c234b",
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
        </QuestionsBox>
        <QuestionsBox>
          <Top>
            <h1
              className="boxBorderTop"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
                color: "#0c234b",
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
        </QuestionsBox>
        <QuestionsBox>
          <Top>
            <h1
              className="boxBorderTop"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
                color: "#0c234b",
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
        </QuestionsBox>
        <QuestionsBox>
          <Top>
            <h1
              className="boxBorderTop"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
                color: "#0c234b",
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
        </QuestionsBox>
        <QuestionsBox>
          <Top>
            <h1
              className="boxBorderTop"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
                color: "#0c234b",
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
        </QuestionsBox>
        <QuestionsBox>
          <Top>
            <h1
              className="boxBorderTop"
              style={{
                paddingRight: 20,
                paddingLeft: 15,
                color: "#0c234b",
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
        </QuestionsBox>
      </QuestionsPageContainer>
    </>
  );
};

export default Questions;
