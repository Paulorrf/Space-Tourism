import styled from "styled-components";

import { Container } from "@mui/material";

export const PlanetDiv = styled.div``;

export const PlanetImg = styled.img`
  width: 14rem;
`;

export const PlanetInfo = styled.div``;

export const ContainerStyled = styled(Container)`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.8rem;
  margin-top: 2rem;
  overflow-y: hidden;
`;

export const RowDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Description = styled.h2`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
`;
