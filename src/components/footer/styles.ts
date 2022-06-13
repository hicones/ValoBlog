import styled from "styled-components";

export const Container = styled.footer`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainFooter = styled.div`
  max-width: 100%;
  min-height: 180px;
  height: 800px;
  display: flex;
  background: var(--white);

  @media screen and (max-width: 900px) {
    height: 350px;
  }
`;

export const Social = styled.div`
  max-width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--gray02);
  margin-left: 20%;
  align-items: center;
  justify-content: end;

  h2 {
    font-family: var(--font-SourceSans);

    :hover {
      color: var(--primary);
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      margin: 20px;
      align-items: center;
      :hover {
        color: var(--primary);
      }
    }
  }

  div.censure {
    margin-top: 15px;
  }

  ul.Termos {
    margin-top: 50px;
  }

  div.logos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 900px) {
    margin-left: 0;
    max-width: 100%;
    flex-direction: row;

    ul.Termos {
      flex-direction: column;
      font-size: 10px;
    }

    div.logo2 {
      display: none;
    }

    h2 {
      display: none;
    }

    div.censure {
      order: 3;
    }

    div.logo1,
    div.logo3 {
      width: 40%;
    }

    div.logos {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Copy = styled.div`
  max-width: 100%;
  width: 100%;
  min-height: 80px;
  background: var(--gray01);
  color: var(--white);
  display: flex;
  justify-content: center;

  p {
    display: flex;
    width: 33%;

    @media screen and (max-width: 1100px) {
      width: 50%;
    }
  }
`;

export const FooterBg = styled.div`
  width: 1423px;
  left: 800px;
  overflow-x: hidden;
  position: absolute;

  @media screen and (max-width: 1500px) {
    display: none;
  }
`;
