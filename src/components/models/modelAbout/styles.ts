import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: 900px;
  background: var(--primary);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  z-index: 1;
`;

export const ModelAbout = styled.div`
  width: 90%;
  height: auto;
  margin: 0;
  color: var(--white);
  z-index: 1;

  h1 {
    font-size: 48px;
    color: white;
    font-family: var(--font-valofont);
    margin: 0;
  }

  div.text {
    max-width: 1900px;
    margin: auto;

    p {
      max-width: 250px;
    }
  }
`;

export const Jett = styled.img`
  width: 30%;
`;

export const Lines = styled.img`
  width: 100%;
  position: absolute;
`;
