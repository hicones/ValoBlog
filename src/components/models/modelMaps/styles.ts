import styled from "styled-components";

type props = {
  background?: any;
};

export const Container = styled.div<props>`
  width: auto;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-color: var(--white);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  z-index: 0;
`;

export const MapsModel = styled.div`
  width: 80%;
  z-index: 1;

  div.text {
    color: var(--gray02);
    p {
      font-family: var(--font-SourceSans);
      font-weight: 600;
      max-width: 480px;
    }
  }
`;

export const TitleStyled = styled.div`
  position: relative;
  font-family: var(--font-valofont);
  height: 150px;

  @media screen and (max-width: 1500px) {
    justify-content: center;
    display: flex;
    align-items: center;

    h2 {
      ::before,
      ::after {
        display: none;
      }
    }
  }

  h2 {
    color: var(--white);
    font-size: 64px;
    font-weight: 700;
    position: relative;
    margin-left: 30px;
    z-index: 0;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 42px;
    }
    @media screen and (max-width: 370px) {
      font-size: 32px;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 8em;
      height: 0.33rem;
      background-color: var(--white);
      opacity: 0.7;
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: var(--white);
      border-radius: 15px;
      left: 0;
    }
    span {
      font-weight: 700;
      color: rgba(25, 29, 43, 0.44);
      font-size: 130px;
      position: absolute;
      left: -3%;
      top: -45%;
      z-index: 0;
      @media screen and (max-width: 1500px) {
        font-size: 78px;
        left: -10%;
        top: 2%;
      }
      @media screen and (max-width: 496px) {
        font-size: 42px;
      }
      @media screen and (max-width: 370px) {
        font-size: 32px;
      }
    }
  }
`;
