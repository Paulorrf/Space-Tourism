import styled from "styled-components";
import { Box } from "@mui/material/";
import { ContainerUtil } from "../../util/Container";

import bgMobile from "../../assets/home/background-home-mobile.jpg";
import bgTablet from "../../assets/home/background-home-tablet.jpg";
import bgDesktop from "../../assets/home/background-home-desktop.jpg";

export const ContainerStyled = styled(ContainerUtil)`
  background-image: url(${bgMobile});

  @media (min-width: 700px) {
    background-image: url(${bgTablet});
  }
  @media (min-width: 1200px) {
    background-image: url(${bgDesktop});
    min-height: 100vh;
    width: 100%;
  }
`;

export const BoxStyled = styled(Box)`
  text-align: center;
  //margin-top: 6.4rem;
  padding: 0.4rem;
  color: ${(props) => props.theme.colors.secondary};
  max-width: 400px;
  margin: 7rem auto 0 auto;

  h1 {
    font-size: 1.1rem;

    span {
      font-size: 4rem;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const BtnExplore = styled.button`
  width: 150px;
  height: 150px;
  outline-style: initial;
  border-radius: 100px;
  cursor: pointer;
  border-style: none;
  margin-top: 4rem;
  background-color: #f1f1f1;
  font-size: 1.4rem;

  &:hover {
    background-color: #fff;
  }
  /* padding: 3rem 2.4rem;
  border-radius: 50%;
  outline: none;
  border-style: none; */
`;
