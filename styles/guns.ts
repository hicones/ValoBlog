import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  padding: 250px 0;
`;

export const Main = styled.main`
  width: 100%;
  margin-left: 15%;

  h1 {
    color: var(--gray01);
  }
  div.text {
    width: 75%;
    margin: auto;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }

  .gunsSection {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
  }
`;
