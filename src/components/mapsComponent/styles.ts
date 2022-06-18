import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 400px;
  border: 2px solid var(--gray02);
  background: var(--gray01);
  border-radius: 8px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    width: 600px;
    height: 400px;
    background: var(--gray01);

    :hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  :hover {
    animation: bounce 1s ease-in-out;

    span {
      opacity: 1;
      display: block;
    }

    @keyframes bounce {
      20% {
        transform: translateY(-6px);
      }
      40% {
        transform: translateY(0px);
      }

      80% {
        transform: translateY(-2px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  span {
    position: absolute;
    display: none;
    text-transform: uppercase;
    color: var(--white);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Thumbnail = styled.img`
  padding: 3px;
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.2);
  width: 600px;
  height: 400px;
  border-radius: 8px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Splash = styled.img`
  padding: 3px;
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.2);
  width: 600px;
  height: 400px;
  border-radius: 8px;
`;
