import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const MainContainer = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default MainContainer;
