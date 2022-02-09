import styled from "styled-components";
import { Link } from "react-router-dom";

export const CrewContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  min-height: 60vh;
`;

export const Name = styled.p`
  font-size: 1.4rem;
  color: #fff;
  line-height: 1rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1rem;

  li {
    list-style: none;
    padding: 1rem;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Circle = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  background-color: ${({ cor }) => (cor ? "#fff" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  opacity: ${({ cor }) => (cor ? 1 : 0.7)};
  color: ${({ cor }) => (cor ? "#e85d04" : "#fff")};
  font-weight: ${({ cor }) => (cor ? "bold" : "normal")};
`;

export const Imagem = styled.img`
  width: ${({ widthInner }) => (widthInner > 700 ? "70%" : "50%")};
`;
