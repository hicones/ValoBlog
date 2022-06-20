import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: 900px;
  background: var(--gray01);
  display: flex;

  @media screen and (max-width: 1500px) {
    height: 1550px;
  }
`;

export const ModelAgent = styled.div`
  width: 100%;
  height: auto;
  color: var(--white);
  padding: 0 150px;
  display: flex;
  flex-direction: column;

  .DivisorContainer {
    display: flex;

    ::before {
      content: "";
      display: block;
      width: 5px;
      height: 700px;
      background: var(--white);
      border-radius: 3px;
      top: 22%;
    }

    div.Images {
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 80px;
        font-family: var(--font-SourceSans);
        text-shadow: 2px 0px 5px #ff8540;
        color: var(--gray01);
        position: absolute;
        z-index: 0;
        right: -5%;
        transform: rotate(90deg);

        @media screen and (max-width: 900px) {
          font-size: 48px;
        }
        @media screen and (max-width: 400px) {
          font-size: 36px;
        }
      }
    }
  }

  div.text {
    display: flex;
    flex-direction: column;
    p {
      max-width: 500px;
      margin-left: 20px;
    }

    .Button2 {
      margin: 25px;
    }
  }

  @media screen and (max-width: 1500px) {
    flex-direction: column;
    padding: 0;

    .DivisorContainer {
      flex-direction: column;
      padding: 10px;
      height: 100%;

      .Images {
        order: 0;
      }
      .text {
        order: 1;
        align-items: center;

        p {
          max-width: 100%;
          margin-left: 0;
        }
      }

      ::before {
        display: none;
      }
    }
  }
`;

export const Phoenix = styled.img`
  max-width: 720px;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 1500px) {
    margin-bottom: 80px;
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
      z-index: -1;
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
