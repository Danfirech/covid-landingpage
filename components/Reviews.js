import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import reviews from '../assets/data/reviews';

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(50% 0%, 100% 0, 100% 27%, 71% 32%, 30% 22%, 0 28%, 0 0);
  background-color: #96a480;
`;

const ReviewsStyles = styled.div`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  padding: 10rem 0;
  text-align: center;

  .header {
    max-width: 500px;
    margin: 0 auto;
    font-size: 3rem;
    line-height: 1.3em;
    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .review__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .review__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: white;
    border-radius: 12px;
    margin-top: 5rem;
  }
  .review__desc {
    .para {
      text-align: center;
    }
  }
  .review__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }
  .review__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: #8ecae6;
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = reviews[activeIndex];

  function handleNext() {
    if (activeIndex >= reviews.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }
  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(reviews.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }

  return (
    <ReviewsStyles>
      <div className="container">
        <h1 className="header">Reviews</h1>
        <div className="review__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="review__info">
                <div className="review__desc">
                  <div>{activeSlide.desc}</div>
                </div>
                <h2 className="review__name">{activeSlide.name}</h2>
                <p className="review__title">
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </ReviewsStyles>
  );
};

export default Reviews;
