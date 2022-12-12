import React from "react";
import styled from "styled-components";
import nameImg from "../image/다운로드.png";
import skillImg from "../image/frontend.0019f41ec01f4b128e9d.png";
import serverSkillImg from "../image/server.fe04abd9ae6297e3738a.png";
import databaseImg from "../image/mysql.png";
import scmImg from "../image/git.6bdad36b75cd5f47e1a6.png";
const StyledSkills = styled.div`
  background-color: #ffd000;
  padding-top: 71px;
  position: relative;
  height: 150vh;
`;

const StyleTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  h2 {
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
const StyleClick = styled.p`
  font-size: 20px;
  font-weight: 700;
  left: 5%;
  position: absolute;
  top: 110px;
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
`;

const StyleClickMoveDIv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1300px;
  padding-top: 50px;
  .box {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px 30px;
    position: relative;
    transition: all 0.5s;
    -webkit-user-select: none;
    user-select: none;
    width: 300px;
    margin: 0 auto;
    h3 {
      color: #ec530c;
      font-size: 30px;
      font-weight: 700;
      margin: 8px 0;
      padding: 10px 0 5px 27px;
    }

    img {
      margin: 0 auto;
      padding: 20px;
      width: 224px;
    }
  }

  .server-box {
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
    width: 300px;
    height: 400px;

    h3 {
      color: #ec530c;
      font-size: 30px;
      font-weight: 700;
      margin: 8px 0;
      padding: 10px 0 5px 27px;
    }

    img {
      margin: 0 auto;
      padding: 20px;
      width: 224px;
    }
  }

  .database {
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
    width: 300px;
    height: 280px;
    margin-top: 10px;
    h3 {
      color: #ec530c;
      font-size: 30px;
      font-weight: 700;
      margin: 8px 0;
      padding: 10px 0 5px 27px;
    }

    img {
      margin: 0 auto;
      padding: 20px;
      width: 224px;
    }
  }

  .scm {
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
    width: 300px;
    height: 340px;

    h3 {
      color: #ec530c;
      font-size: 30px;
      font-weight: 700;
      margin: 8px 0;
      padding: 10px 0 5px 27px;
    }

    img {
      margin: 0 auto;
      padding: 20px;
      width: 224px;
    }
  }
`;

const Skills = () => {
  return (
    <StyledSkills>
      <StyleTitle>
        <a></a>
        <h2>SKILLS</h2>
      </StyleTitle>
      <StyleClick>Click items!!</StyleClick>
      <StyleClickMoveDIv>
        <div className="box">
          <h3>Front End</h3>
          <hr></hr>
          <img src={skillImg}></img>
        </div>
        <div className="server-box">
          <h3>Server</h3>
          <hr></hr>
          <img src={serverSkillImg}></img>
        </div>
        <div className="database">
          <h3>DataBase</h3>
          <hr></hr>
          <img src={databaseImg}></img>
        </div>
        <div className="scm">
          <h3>SCM</h3>
          <hr></hr>
          <img src={scmImg}></img>
        </div>
      </StyleClickMoveDIv>
    </StyledSkills>
  );
};

export default Skills;
