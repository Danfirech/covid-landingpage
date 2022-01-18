import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import reviews from '../assets/data/reviews';
import Image from 'next/image';
import dotBlob from '../assets/images/dotBlob.png';
import sideBlob from '../assets/images/sideBlob.png';
import reviewsBox from '../assets/images/reviewsbox (7).png';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ReviewsStyles = styled.div`
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  padding-top: 280px;
  text-align: center;

  .header {
    max-width: 500px;
    margin: 0 auto;
    font-size: 2rem;
    line-height: 1.3em;

    @media only screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  .review__wrapper {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }
  .review__info {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    margin-top: 5rem;
    padding-top: 1rem;
    padding-left: 4rem;
    padding-right: 2rem;
    font-size: 1.2rem;
  }
  .review__desc {
    .para {
      text-align: center;
    }
  }
  .review__name {
    margin-top: 4rem;

    font-size: 1.4rem;
  }
  .review__title {
    font-size: 1.2rem;
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
      background-color: #023047;
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

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
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
        <div className="review__wrapper">
          <span className="reviewBox">
            <Image src={reviewsBox} alt="review box" />
          </span>
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="review__info">
                <h1 className="header">Reviews</h1>
                <h2 className="review__name">{activeSlide.name}</h2>
                <div className="review__desc">
                  <div>{activeSlide.desc}</div>
                  <div className="arrows">
                    <div
                      className="prev"
                      onClick={handlePrev}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handlePrev}
                    >
                      <MdArrowBack style={{ color: 'white' }} />
                    </div>
                    <div
                      className="next"
                      onClick={handleNext}
                      role="button"
                      tabIndex={0}
                      onKeyDown={handleNext}
                    >
                      <MdArrowForward style={{ color: 'white' }} />
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <span className="sideBlob">
        <Image src={sideBlob} alt="side blob shape" />
      </span>
      <span className="dotBlob">
        <Image src={dotBlob} alt="dotted and blob shape" />
      </span>
    </ReviewsStyles>
  );
};

export default Reviews;
