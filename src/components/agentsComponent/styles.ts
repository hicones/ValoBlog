import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  background: var(--primary);
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;

  :hover {
    opacity: 0.1;
  }
`;

export const Thumbnail = styled.img`
  box-shadow: 0px 8px 22px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 150px;
`;
