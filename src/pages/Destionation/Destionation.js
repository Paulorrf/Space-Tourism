import React from "react";

import { Outlet } from "react-router-dom";

import { ContainerStyled, InnerContainer } from "./Destionation.elements";

const Destionation = () => {
  return (
    <ContainerStyled>
      <InnerContainer>
        <h2>
          <span>01</span> PICK YOUR DESTINATION
        </h2>
      </InnerContainer>

      <Outlet />
    </ContainerStyled>
  );
};

export default Destionation;
