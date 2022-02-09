import styled from "styled-components";

export const CrewContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
`;

export const Profession = styled.p`
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.7;
  line-height: 1rem;
`;

export const Name = styled.p`
  font-size: 1.4rem;
  color: #fff;
  line-height: 1rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  width: 60%;
  margin: 0 auto;

  @media (min-width: 700px) {
    font-size: 1.2rem;
  }
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
  height: 0.8rem;
  width: 0.8rem;
  background-color: ${({ cor }) => (cor ? "#fff" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  opacity: ${({ cor }) => (cor ? 1 : 0.7)};
`;

export const Imagem = styled.img`
  width: 14rem;
`;
