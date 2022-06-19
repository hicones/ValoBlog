import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const MainAgent = styled.section`
  width: 100%;
  display: flex;
  padding: 250px 0 0 20px;

  h1 {
    font-family: var(--font-valofont);
    font-size: 124px;
    color: var(--white);
    position: absolute;
    top: 12%;
    right: 100px;
    left: auto;
    transform: rotate(90deg);
  }

  div.AgentDescription {
    color: var(--white);
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0 250px;

    div.RoleSec {
      display: flex;
      align-items: center;

      h2 {
        font-size: 64px;
        font-family: var(--font-valofont);
      }
    }
  }

  @media screen and (max-width: 1600px) {
    flex-direction: column;
    align-items: center;
    h1 {
      position: unset;
      transform: rotate(0);
      order: 0;
      width: 100%;
      font-size: 78px;
    }
    div.AgentDescription {
      order: 3;
      width: 100%;
      padding: 0;

      div.RoleSec {
        h2 {
          font-size: 48px;
        }
      }
    }
  }
`;

export const RoleImage = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 25px;
  margin-bottom: 10px;
`;

export const AgentImage = styled.img`
  position: absolute;
  width: 40%;
  top: 5%;
  right: 300px;
  left: auto;

  @media screen and (max-width: 1600px) {
    position: unset;
    order: 2;
    width: 50%;
  }

  @media screen and (max-width: 900px) {
    position: unset;
    order: 2;
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    position: unset;
    order: 2;
    width: 100%;
  }
`;

// - - - - - - - - - - - - - - - - - -- - - - - - -

export const SkillsSection = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background: var(--white);
  max-height: 110vh;

  h2 {
    color: var(--gray01);
  }

  .DivisorContainer {
    display: flex;
    color: var(--gray01);

    .contentSkill {
      display: flex;
      flex-direction: column;
      width: 50%;
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;

      .contentSkill {
        order: 1;
        width: 100%;
        align-items: center;
      }
    }
  }

  .agentSkill {
    display: flex;
    flex-direction: row;
    position: relative;
    .active {
      border: 3px solid var(--primary);
    }
  }

  .iframeDiv {
    display: block;
    max-width: 960px;
  }
`;

export const SkillCard = styled.div`
  width: 75px;
  height: 75px;
  border: 2px solid var(--gray01);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin: 15px;
  background: var(--gray01);
  cursor: pointer;
  transition: ease-out 0.4s;

  :hover {
    box-shadow: inset 75px 0 0 0 var(--primary);

    span {
      opacity: 1;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    width: 55px;
    height: 55px;
  }
`;

export const SkillCardImg = styled.img`
  width: 75px;
  height: 75px;
  padding: 10px;
  border-radius: 2px;

  @media screen and (max-width: 600px) {
    width: 55px;
    height: 55px;
  }
`;

export const SkillCardContent = styled.div`
  max-width: 500px;
  p {
    max-width: 500px;
  }
`;
