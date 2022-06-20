import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--white);
  padding: 250px 0;
`;

export const Main = styled.main`
  width: 100%;

  h1 {
    color: var(--gray01);
  }
  div.text {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 0;

    .gunsSection {
      align-items: center;
      padding: 0;
      margin: 0;
    }
  }

  .gunsSection {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
