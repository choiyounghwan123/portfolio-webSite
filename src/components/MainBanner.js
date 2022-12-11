import React from "react";
import styled from "styled-components";
import mainImg from "../image/laptop-notebook-computer-screen-apple-table-914874-pxhere.com.ba9c8e25eae1f28a0426.jpg";

const StyledMainBanner = styled.div`
  background-image: url(${mainImg});
  background-blend-mode: multiply;
  background-color: rgba(112, 93, 80, 0.8);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  opacity: 0.9;
  padding: 90px;
  align-items: center;
  img {
    background-color: rgba(112, 93, 80, 0.8);
    opacity: 0.9;
  }
  p {
    color: azure;
    font-family: ELAND;
    font-size: 60px;
    text-align: center;
    display: block;
  }
`;

const MainBanner = () => {
  return (
    <StyledMainBanner>
      <p>Hello, My name is Cyh</p>
      <p>My name is Cyh</p>
      <p>Web developer portfolio</p>
    </StyledMainBanner>
  );
};

export default MainBanner;
