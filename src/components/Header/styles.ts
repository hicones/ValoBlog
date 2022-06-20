import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    transition: visibility 0s, opacity 0.5s linear;
    li {
      margin-right: 80px;
      color: var(--gray05);
      :hover {
        color: var(--primary);
      }

      .active {
        color: var(--primary);
      }
      a {
        font-family: var(--font-SourceSans);
        font-weight: 600;
        line-height: 118%;
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    padding: 80px 10px;

    nav {
      width: 100%;
      height: 70%;
    }

    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      li {
        margin-right: 0;
        a {
          font-size: 48px;
        }
      }
    }

    a.Logo {
      display: none;
    }
  }
`;
