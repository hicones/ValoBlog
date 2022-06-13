import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 80px;
  display: flex;
  align-items: center;
  position: absolute;
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
