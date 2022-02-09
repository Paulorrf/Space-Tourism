import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

import Logo from "../../assets/shared/logo.svg";
import Hamb from "../../assets/shared/icon-hamburger.svg";
import CloseHamb from "../../assets/shared/icon-close.svg";

import {
  ContainerStyled,
  BoxStyled,
  Image,
  NavContainer,
  NavList,
  NavItems,
  LinkStyled,
  CloseContainer,
} from "./Nav.elements";

const Nav = ({ showModal, setShowModal }) => {
  const [hambActive, setHambActive] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ContainerStyled maxWidth="xl" sx={{ padding: "0" }}>
      <BoxStyled>
        <Image
          src={Logo}
          alt="Logo"
          altura="2.4"
          paddingTop="0.4"
          paddingLeft="2"
          color="red"
        />

        {hambActive ? (
          <div></div>
        ) : (
          <Image
            src={Hamb}
            alt="Menu"
            altura="1.4"
            largura="1.8"
            marginTop="20"
            isHamb={true}
            onClick={() => setHambActive((prev) => !prev)}
          />
        )}

        <>
          {hambActive ? (
            <CloseContainer>
              <Image
                src={CloseHamb}
                alt="Menu"
                altura="1.4"
                largura="1.8"
                marginRight="2"
                isHamb={true}
                onClick={() => setHambActive((prev) => !prev)}
              />
            </CloseContainer>
          ) : null}

          <NavList hambActive={hambActive} scrollPosition={scrollPosition}>
            <NavItems>
              <LinkStyled to="/" onClick={() => setHambActive((prev) => !prev)}>
                Home
              </LinkStyled>
            </NavItems>
            <NavItems>
              <LinkStyled
                to="/destination"
                onClick={() => setHambActive((prev) => !prev)}
              >
                Destination
              </LinkStyled>
            </NavItems>
            <NavItems>
              <LinkStyled
                to="/crew"
                onClick={() => setHambActive((prev) => !prev)}
              >
                Crew
              </LinkStyled>
            </NavItems>

            <NavItems>
              <LinkStyled
                to="/technology"
                onClick={() => setHambActive((prev) => !prev)}
              >
                Technology
              </LinkStyled>
            </NavItems>
          </NavList>
        </>
      </BoxStyled>
    </ContainerStyled>
  );
};

export default Nav;
