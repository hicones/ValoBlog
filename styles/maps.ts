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

    @media screen and (max-width: 600px) {
      width: 100%;
    }

    h1,
    h2 {
      letter-spacing: 2rem;

      font-family: var(--font-valofont);
      font-size: 3rem;
      line-height: 130%;

      @media screen and (max-width: 600px) {
        font-size: 1.75rem;
        letter-spacing: 1rem;
      }
    }

    .resumeMap {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        width: 50%;
        margin: 50px;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, 1fr);
        list-style: circle;
        li {
          margin: 20px;
          font-weight: 600;
        }

        @media screen and (max-width: 1300px) {
          display: flex;
        }
      }
    }
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

  @media screen and (max-width: 600px) {
    width: 80%;

    a {
      margin: 0;
    }
  }
`;

export const MainMaps = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1300px) {
    justify-content: center;
  }
`;

export const Splash = styled.img`
  padding: 3px;
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  max-height: 400px;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
