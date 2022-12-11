import React from "react";
import styled from "styled-components";
import nameImg from "../image/다운로드.png";
import devImg from "../pngtree-mobile-application-software-developer-scene-illustration-png-image_3228760.jpg";
const StyledProject = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;

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
    margin: 20 10px 30px;
    position: relative;
    transition: all 0.5s;
    -webkit-user-select: none;
    user-select: none;
    width: 80%;
    height: 500px;

    h3 {
      color: #ec530c;
      font-size: 30px;
      font-weight: 700;
      margin: 8px 0;
      padding: 10px 0 5px 27px;
    }
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

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
        <h3>Exaple</h3>
      </div>
    </StyledProject>
  );
};

export default Project;
