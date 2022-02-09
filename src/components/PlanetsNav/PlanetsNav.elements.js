import styled from "styled-components";

import { Link } from "react-router-dom";

export const ContainerNav = styled.div`
  width: 60%;
  margin: 1rem auto;
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  color: #${(props) => props.color};
  font-size: 1rem;
`;
