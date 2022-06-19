import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: 1100px;
  display: flex;

  iframe {
    position: absolute;
    right: 20%;
    top: 1380px;
  }

  h3 {
    font-size: 100px;
    font-family: var(--font-SourceSans);
    text-shadow: 2px 0px 5px #ff8540;
    color: var(--gray01);
    position: absolute;
    right: 100px;
    top: 2350px;
    transform: rotate(90deg);
  }
`;

export const ModelAgent = styled.div`
  width: 100%;
  height: auto;
  color: var(--white);
  padding: 100px 0 0 150px;

  h1 {
    font-size: 64px;
    color: white;
    font-family: var(--font-valofont);
    margin: 30px;
  }

  div.text {
    max-width: 1900px;
    margin: auto;

    .Button2 {
      margin-left: 150px;
    }

    p {
      margin-left: 20px;
      max-width: 500px;
    }

    ::before {
      content: "";
      display: block;
      width: 5px;
      height: 700px;
      background: var(--white);
      border-radius: 3px;
      top: 40%;
      position: absolute;
    }
  }

  ul {
    list-style: none;
    position: absolute;
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
`;

export const Phoenix = styled.img`
  width: 1080px;
  margin: 0;
  position: absolute;
  right: 15%;
  top: 1920px;
`;

export const TitleStyled = styled.div`
  position: relative;
  font-family: var(--font-valofont);
  h2 {
    color: var(--white);
    font-size: 64px;
    font-weight: 700;
    position: relative;
    margin-left: 30px;
    z-index: 0;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 10em;
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
      @media screen and (max-width: 620px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 496px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    }
  }
`;
