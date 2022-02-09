import styled from "styled-components";
import { Container } from "@mui/material/";

export const ContainerUtil = styled(Container)`
  //background-image: url();
  min-height: 100%;
  min-width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;

  @media (min-width: 700px) {
    //background-image: url();
  }
`;
