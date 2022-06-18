import styled from "styled-components";

const QuestionsPageContainer = styled.div`
  height: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  @media (max-width: 768px) {
    .margin {
      margin-left: 55px;
    }
  }
`;

const QuestionsBox = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  background-color: white;
  margin-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 80%;
  /* background-color: #fefefe; */
  background-color: #dfe5e5;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 80%;
  /* background-color: #fefefe; */
  background-color: white;
  color: gray;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Questions = () => {
  return (
    <>
      <QuestionsPageContainer>
        <div className="margin">
          <h1>Frequently Asked Questions (FAQ)</h1>
        </div>
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
