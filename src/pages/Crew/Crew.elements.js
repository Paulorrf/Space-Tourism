import styled from "styled-components";

import bgCrew from "../../assets/crew/background-crew-mobile.jpg";

import { ContainerUtil } from "../../util/Container";

export const ContainerStyled = styled(ContainerUtil)`
  background-image: url(${bgCrew});
`;

export const InnerContainer = styled.div`
  margin-top: 4.4rem;
  margin-left: 1rem;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    padding-top: 1.4rem;

    span {
      opacity: 0.5;
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
