import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 30px auto;
  border-radius: 8px;
  height: 250px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  border: 2px solid var(--primary);

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  :hover {
    opacity: 0.5;
  }
`;

export const MainNews = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px;
  color: var(--white);

  p,
  span {
    margin: 0;
    color: var(--gray05);
  }

  h2,
  h3 {
    margin: 0;
  }
`;

export const Thumbnail = styled.img`
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 200px;
  margin-top: 10px;
  height: 200px;
`;
