import React from "react";
import styled from "styled-components";

export default function Slide({ color, order }) {
  const SlideContents = styled.div`
    width: 100%;
    height: 70vh;
    background-color: ${color};
    position: absolute;
    right: -${Number(order) * 100}%;
  `;
  //   return <IMG src={img} />;
  return <SlideContents />;
}

const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
