import React from "react";

import { Box } from "@mui/material";

import { ContainerStyled, BoxStyled, BtnExplore } from "./Home.elements";

import { Container } from "@mui/material";

const Home = ({ showModal }) => {
  return (
    <ContainerStyled maxWidth={false} disableGutters={true}>
      <Container>
        <BoxStyled>
          <div>
            <h1>
              SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
            <BtnExplore>EXPLORE</BtnExplore>
          </div>
        </BoxStyled>
      </Container>
    </ContainerStyled>
  );
};

export default Home;
