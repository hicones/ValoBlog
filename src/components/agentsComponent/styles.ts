import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid var(--primary-light);
  border-radius: 8px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    width: 150px;
    height: 150px;
    background: var(--primary);

    :hover {
      opacity: 0.1;
    }
  }

  :hover {
    animation: bounce 1s ease-in-out;

    span {
      opacity: 1;
      display: block;
    }

    @keyframes bounce {
      20% {
        transform: translateY(-6px);
      }
      40% {
        transform: translateY(0px);
      }

      80% {
        transform: translateY(-2px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  span {
    position: absolute;
    display: none;
    color: var(--white);
  }
`;

export const Thumbnail = styled.img`
  padding: 3px;
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.2);
  width: 150px;
  border-radius: 8px;
  height: 150px;
`;
