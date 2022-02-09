import styled from "styled-components";

import { ContainerUtil } from "../../util/Container";

import bgMobile from "../../assets/destination/background-destination-mobile.jpg";

export const ContainerStyled = styled(ContainerUtil)`
  background-image: url(${bgMobile});
`;

export const InnerContainer = styled.div`
  margin-top: 6rem;
  margin-left: 1rem;

  h2 {
    color: ${(props) => props.theme.colors.primary};

    span {
      opacity: 0.5;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const NavStyled = styled.nav``;
