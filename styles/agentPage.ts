import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const MainAgent = styled.section`
  width: 100%;

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
    padding: 250px;

    div.RoleSec {
      display: flex;
      align-items: center;

      h2 {
        font-size: 64px;
        font-family: var(--font-valofont);
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
`;

export const SkillsSection = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: 80px 250px;

  .agentSkill {
    display: flex;

    .active {
      border: 3px solid var(--primary);
    }
  }
  .iframeDiv {
    position: absolute;
    right: 200px;
    width: 720px;
    height: 480px;
    top: 42%;
    overflow: hidden;
  }

  @media screen and (max-width: 1500px) {
    padding: 0;
    align-items: center;

    .iframeDiv {
      right: auto;
      bottom: auto;
    }
  }

  @media screen and (max-width: 600px) {
    .iframeDiv {
      width: 320px;
      height: 180px;
      justify-content: center;
      right: auto;
    }
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
  position: absolute;
  margin-top: 80px;
  p {
    max-width: 500px;
  }
`;
