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
