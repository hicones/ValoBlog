import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 250px 0;
`;

export const Main = styled.main`
  width: 100%;
  h1 {
    color: var(--white);
  }

  div.text {
    width: 25%;
    margin: auto;
  }

  @media screen and (max-width: 900px) {
    margin: 180px 15px;
    width: 95%;
  }

  div.agentSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
