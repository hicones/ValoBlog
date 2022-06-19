import styled from "styled-components";

export const NavbarStyled = styled.div`
  z-index: 2;
  @media screen and (max-width: 900px) {
    transform: translateX(-100%);
    height: 1000px;
    width: 100%;
    position: fixed;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
  }
`;
