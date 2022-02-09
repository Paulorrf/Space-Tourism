import React from "react";

import { Moon, Mars } from "../index";

import { Link } from "@mui/material";

import { ContainerNav, Nav, LinkStyled } from "./PlanetsNav.elements";

const PlanetsNav = () => {
  return (
    <ContainerNav>
      <Nav>
        <LinkStyled to="/destination/moon" color={"d8e2dc"}>
          Moon
        </LinkStyled>
        <LinkStyled to="/destination/mars" color={"ae2012"}>
          Mars
        </LinkStyled>
        <LinkStyled to="/destination/europa" color={"e76f51"}>
          Europa
        </LinkStyled>
        <LinkStyled to="/destination/titan" color={"e9c46a"}>
          Titan
        </LinkStyled>
      </Nav>
    </ContainerNav>
  );
};

export default PlanetsNav;
