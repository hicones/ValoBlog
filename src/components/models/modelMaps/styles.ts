import styled from "styled-components";

type props = {
  background?: any;
};

export const Container = styled.div<props>`
  width: auto;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-color: var(--white);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  z-index: 0;
`;

export const MapsModel = styled.div`
  width: 80%;
  z-index: 1;

  div.text {
    p {
      font-family: var(--font-SourceSans);
      font-weight: 600;
      width: 500px;
    }
  }
`;

export const TitleStyled = styled.div`
  position: relative;
  font-family: var(--font-valofont);
  h2 {
    color: var(--gray01);
    font-size: 64px;
    font-weight: 700;
    position: relative;
    margin-left: 30px;
    z-index: 0;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 3.4rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2.8rem;
    }
    span {
      font-weight: 700;
      color: rgba(25, 29, 43, 0.44);
      font-size: 130px;
      position: absolute;
      left: -5%;
      top: -50%;
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
