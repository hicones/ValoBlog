import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid var(--gray01);
  border-radius: 2px;
  max-width: 600px;
  height: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  :hover {
    background: var(--primary);
    h3 {
      color: var(--white);
    }
    p {
      display: flex;
      width: 30%;
      margin-left: 15px;
      flex-wrap: wrap;
      position: absolute;
      color: var(--white);

      @media screen and (max-width: 600px) {
        width: 60%;
      }
    }
    img {
      opacity: 0.2;
    }
  }

  div {
    display: flex;
    height: 50px;
    width: 600px;
    justify-content: center;
    align-items: center;
  }

  p {
    display: none;
  }

  h3 {
    width: 100%;
    margin-left: 15px;
    color: var(--gray01);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 180px;

    h3 {
      font-size: 30px !important;
    }
    p {
      font-size: 12px !important;
      width: 300px;
      margin-left: 0;
    }
  }
`;

export const Thumbnail = styled.img`
  padding: 3px;
  border-radius: 8px;
  max-width: 500px;
  max-height: 150px;
  margin-top: 80px;
  position: absolute;

  @media screen and (max-width: 600px) {
    max-width: 200px;
    max-height: 100px;
    margin-top: 0;
  }
`;
