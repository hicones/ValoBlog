import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: 900px;
  background: var(--primary);
  display: flex;

  @media screen and (max-width: 1500px) {
    height: 1550px;
  }
`;

export const ModelAbout = styled.div`
  width: 100%;
  height: auto;
  color: var(--white);
  padding: 0 150px;
  display: flex;
  flex-direction: column;

  iframe {
    position: absolute;
    width: 720px;
    height: 480px;
  }

  div.Images {
    overflow: hidden;
    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  .DivisorContainer {
    display: flex;

    ::before {
      content: "";
      display: block;
      width: 5px;
      height: 650px;
      background: var(--white);
      border-radius: 3px;
      top: 22%;
    }
  }

  div.text {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    p {
      max-width: 500px;
      margin-left: 20px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      font-family: var(--font-SourceSans);
      display: flex;
      align-items: center;
      font-weight: 700;
      justify-content: center;
      span {
        position: relative;
        display: flex;
        font-size: 96px;
        color: var(--primary);
        text-shadow: -1px 0 rgba(236, 232, 225, 0.9), 0 1px rgba(236, 232, 225, 0.9), 1px 0 rgba(236, 232, 225, 0.9),
          0 -1px rgba(236, 232, 225, 0.9);
      }
      p {
        font-size: 36px;
        position: absolute;
        z-index: 1;
        color: var(--gray02);
      }
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

        iframe {
          width: 90%;
          max-height: 480px;
        }
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

export const Jett = styled.img`
  max-width: 720px;
  overflow: hidden;
`;

export const TitleStyled = styled.div`
  position: relative;
  font-family: var(--font-valofont);
  height: 150px;
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
      z-index: 0;
      left: -3%;
      top: -45%;
      z-index: -1;
      @media screen and (max-width: 1200px) {
        font-size: 78px;
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
