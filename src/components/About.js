import React from "react";
import styled from "styled-components";
import nameImg from "../image/다운로드.png";
import userImg from "../image/user.33e7df0963941edbeb70.png";
import seImg from "../image/다운로드 (1).png";
import thImg from "../image/pin.64af410c6a5f32b5fd4f.png";
import callImg from "../image/다운로드 (2).png";
import emailImg from "../image/다운로드 (3).png";
import cellImg from "../image/다운로드 (4).png";
const StyledAbout = styled.div`
  padding-bottom: 30px;
  padding-top: 71px;
  width: 100%;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  a {
    background-image: url(${nameImg});
    background-size: cover;
    float: left;
    height: 32px;
    margin: auto 0;
    width: 32px;
    z-index: 20;
  }

  p {
    font-family: Georgia, Serif;
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
`;

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  width: 100%;
  .wrap {
    flex: 1 1 50%;
    margin: 0 auto;
  }
  .innerwrap {
    height: 50px;
    margin: 0 auto 60px;
    width: 250px;

    img {
      float: left;
      height: 32px;
      width: 32px;
    }
  }

  .innerinner {
    float: left;
    margin-left: 20px;
  }
  .p1 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 2px;
  }
  .p2 {
    color: #686868;
    font-size: 19px;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <StyledTitle>
        <a></a>
        <p>ABOUT</p>
      </StyledTitle>
      <StyledMain>
        <div className="wrap">
          <div className="innerwrap">
            <img src={userImg}></img>
            <div className="innerinner">
              <p className="p1">이름</p>
              <p className="p2">최영환</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          {" "}
          <div className="innerwrap">
            {" "}
            <img src={seImg}></img>
            <div className="innerinner">
              <p className="p1">생년월일</p>
              <p className="p2">01.09.29</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          {" "}
          <div className="innerwrap">
            <img src={thImg}></img>
            <div className="innerinner">
              <p className="p1">주소지</p>
              <p className="p2">양산시</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          {" "}
          <div className="innerwrap">
            <img src={callImg}></img>
            <div className="innerinner">
              <p className="p1">연락처</p>
              <p className="p2">010-8565-9786</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          {" "}
          <div className="innerwrap">
            <img src={emailImg}></img>
            <div className="innerinner">
              <p className="p1">이메일</p>
              <p className="p2">fdgdfgdgf123@</p>
              <p className="p2">gmail.com</p>
            </div>
          </div>
        </div>
        <div className="wrap">
          {" "}
          <div className="innerwrap">
            <img src={cellImg}></img>
            <div className="innerinner">
              <p className="p1">학력</p>
              <p className="p2">
                경상국립대학교 <br></br>2022.03~
              </p>
            </div>
          </div>
        </div>
      </StyledMain>
    </StyledAbout>
  );
};

export default About;
