import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 250px 0;

  @media screen and (max-width: 900px) {
    padding: 180px 15px;
    width: 95%;
  }
`;

export const Main = styled.main`
  width: 100%;

  div.mainElements {
    h1 {
      margin-left: 13.5%;
    }
  }

  @media screen and (max-width: 900px) {
    margin: 180px 15px;
    width: 95%;
  }
`;
