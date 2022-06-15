import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  padding: 250px 0;
`;

export const Main = styled.main`
  width: 100%;

  div.text {
    width: 75%;
    margin: auto;
  }

  @media screen and (max-width: 900px) {
    margin: 180px 15px;
    width: 95%;
  }
`;

export const Button = styled.a`
  width: 400px;
  height: 80px;
  cursor: pointer;
  color: var(--gray02);
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  margin: 80px auto;
  border-radius: 1px;

  a {
    margin-left: 10px;
  }

  :hover {
    animation: up 0.4s ease-in;
    opacity: 0.9;
  }

  @keyframes up {
    0% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

export const MainMaps = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
