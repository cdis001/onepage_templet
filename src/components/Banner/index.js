import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Slide from "./Slide";

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    //   if (currentSlide >= TOTAL_SLIDES) {
    //     setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
    //   } else {
    //     setCurrentSlide(currentSlide + 1);
    //   }
    // }, 10000);

    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <PrevButton onClick={prevSlide}>Previous Slide</PrevButton>
      <SliderContainer ref={slideRef}>
        <Slide color={"#FF5733"} order={"0"} />
        <Slide color={"#DAF7A6"} order={"1"} />
        <Slide color={"#FFC300"} order={"2"} />
      </SliderContainer>
      <NextButton onClick={nextSlide}>Next Slide</NextButton>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
  position: relative;
`;
const Button = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  z-index: 10;
  height: 70vh;
  transition: all 0.2s ease-in-out;
  padding: 0.5em 2em;
  background-color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #000;
    color: #fff;
  }
`;
const PrevButton = styled(Button)``;
const NextButton = styled(Button)`
  right: 0;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex; //이미지들을 가로로 나열합니다.
`;
