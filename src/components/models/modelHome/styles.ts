import styled from "styled-components";

type props = {
  background?: any;
};

export const Container = styled.section<props>`
  width: auto;
  height: 800px;
  background-size: cover;
  mix-blend-mode: color-dodge;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  z-index: 0;
`;

export const ModelHome = styled.div`
  width: 90%;
  height: auto;
  margin: 0;
  color: var(--white);
  z-index: 1;

  span {
    letter-spacing: 0.25em;
    margin: 0;
  }

  h1 {
    font-size: 140px;
    color: white;
    font-family: var(--font-valofont);
    margin: 0;
  }

  h2 {
    font-size: 36px;
    font-family: var(--font-SourceSans);
    letter-spacing: 0.25em;
    max-width: 450px;
  }

  div.text {
    max-width: 1900px;
    margin: auto;

    p {
      max-width: 700px;
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 32px;
    }
  }
`;
