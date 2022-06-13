import styled from "styled-components";

export const Container = styled.header`
  max-width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    li {
      margin-right: 80px;
      color: var(--white);
      :hover {
        color: var(--primary);
      }

      .active {
        color: var(--primary);
      }
    }
  }
`;

export const Logo = styled.h1`
  font-size: 40px;
  margin: 20px;
  font-family: var(--font-valofont);
  color: var(--primary);
`;
