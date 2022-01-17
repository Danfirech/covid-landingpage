import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import reviews from '../assets/data/reviews';
import Image from 'next/image';
import dotBlob from '../assets/images/dotBlob.png';
import sideBlob from '../assets/images/sideBlob.png';

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
  background-color: white;

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
    background-color: #219ebc;
    border-radius: 12px;
    margin-top: 5rem;
    font-size: 1.3rem;
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

const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  background-color: #8ecae6;
  border-radius: 50px;
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
          <IconContainer>
            <IconCircle>
              <img src="https://img.icons8.com/external-linector-lineal-linector/64/000000/external-medical-mask-virus-linector-lineal-linector.png" />{' '}
            </IconCircle>
          </IconContainer>
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="review__info">
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
        <Image src={sideBlob} alt="Picture of the author" />
      </span>
      <span className="dotBlob">
        <Image src={dotBlob} alt="Picture of the author" />
      </span>
    </ReviewsStyles>
  );
};

export default Reviews;
