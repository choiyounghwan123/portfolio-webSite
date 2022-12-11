import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  background-color: white;
  display: flex;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    text-decoration: none;
    text-align: center;
    list-style: none;
  }
  li {
    text-decoration: none;
    text-align: center;
    margin-left: 100px;
    font-size: 20px;
    margin-top: 10px;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
