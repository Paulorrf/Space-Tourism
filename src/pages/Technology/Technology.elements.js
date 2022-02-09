import styled from "styled-components";

import { ContainerUtil } from "../../util/Container";

import techBg from "../../assets/technology/background-technology-mobile.jpg";

export const TechContainer = styled(ContainerUtil)`
  background-image: url(${techBg});
  padding-top: 8rem;
  color: #fff;
  //min-height: 100vh;
`;
