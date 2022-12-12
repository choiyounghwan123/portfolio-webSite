import React from "react";
import styled from "styled-components";
import nameImg from "../image/다운로드.png";
import devImg from "../pngtree-mobile-application-software-developer-scene-illustration-png-image_3228760.jpg";
import projectImg from "../image/스크린샷 2022-12-12 오전 11.07.41.png";
import { Link } from "react-router-dom";
const StyledProject = styled.div`
  background-color: white;
  width: 100%;
  height: auto;
  background-image: url(${devImg});
  background-size: cover;
  .asd {
    margin: 0 auto;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    transition: all 0.5s;
    -webkit-user-select: none;
    user-select: none;
    width: 80%;
    height: auto;
    margin-bottom: 20px;
    img {
      width: 90%;
      margin: auto;
      padding-bottom: 40px;
    }

    h1 {
      color: black;
      font-size: 30px;
      font-weight: 700;
      margin: 8px 0;
      padding: 10px 0 5px 27px;
    }

    .content {
      padding: 20px;

      h3 {
        font-weight: 700;
      }
      p {
        display: block;
        font-family: "Black Han Sans", sans-serif;
        font-weight: 700;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-size: 20px;
      }

      span {
        font-weight: bold;
      }
    }
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  h1 {
    float: left;
    font-size: 50px;
    font-weight: 700;
    -webkit-text-decoration-color: #9e9e9e;
    text-decoration-color: #9e9e9e;
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
    -webkit-text-decoration-style: solid;
    text-decoration-style: solid;
    text-decoration-thickness: 3%;
    text-underline-position: under;
  }
  a {
    background-image: url(${nameImg});
    background-size: cover;
    float: left;
    height: 32px;
    margin: auto 0;
    width: 32px;
    z-index: 20;
  }
`;

const Project = () => {
  return (
    <StyledProject>
      <StyledTitle>
        <a></a>
        <h1>Project</h1>
      </StyledTitle>
      <div className="asd">
        <h1>portfolio</h1>
        <img src={projectImg}></img>
        <div className="content">
          <h3>React.js로 제작한 개인 포트폴리오 입니다.</h3>
          <p>제작기간</p>
          <span>6시간</span>
          <p>개발인원:1명</p>
          <p>Frontend</p>
          <span>React.js,styled-components</span>
          <p>Backend</p>
          <p>URL</p>
          <p>Github</p>
          <a href="https://github.com/choiyounghwan123/">GitHub Link</a>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
