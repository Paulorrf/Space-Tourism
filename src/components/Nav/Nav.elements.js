import styled from "styled-components";
import { Container, Box } from "@mui/material/";
import { Link } from "react-router-dom";

export const ContainerStyled = styled(Container)`
  z-index: 10;
  position: relative;
  overflow-y: hidden;
`;

export const BoxStyled = styled(Box)`
  display: flex;
  //align-items: center;
  width: 100%;
  min-height: 4rem;
  justify-content: space-between;
  margin-top: 20px;
`;

//Logo and Hamb menu icons
export const Image = styled.img`
  height: ${({ altura }) => altura + "rem"};
  width: ${({ largura }) => largura + "rem"};
  cursor: pointer;
  color: #fff;
  margin: 0 2rem;

  @media (min-width: 700px) {
    display: ${({ isHamb }) => (isHamb ? "none" : "block")};
  }
`;

export const NavContainer = styled.nav`
  width: 80%;

  @media (max-width: 700px) {
  }
`;

//list items
export const NavList = styled.ul`
  display: ${({ hambActive }) => (hambActive ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  min-height: 600px;
  width: 64%;
  border-radius: 0 0 0 20px;

  position: fixed;
  top: 0;
  right: ${({ hambActive }) => (hambActive ? 0 : "-80%")};
  margin: 0;
  background: hsl(0 0% 0% / 0.96);

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;

    position: fixed;
    right: 0;

    width: 80%;
    min-height: 64px;
    background: ${({ scrollPosition }) =>
      scrollPosition > 30 ? "#000" : "hsl(0 0% 100% / 0.1)"};
  }
`;

export const NavItems = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
    text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  list-style: none;
`;

export const CloseContainer = styled.div`
  z-index: 10;
  position: absolute;
  right: 0rem;
  top: 1.4rem;
`;
