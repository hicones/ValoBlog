/* eslint-disable react/jsx-no-comment-textnodes */
import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { useState } from "react";
import { IAgents } from "../../src/interfaces/agents.interface";
import * as S from "../../styles/agentPage";

interface AgentsProps {
  agent: IAgents;
}

interface Params extends ParsedUrlQuery {
  agentId: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get<IAgents[]>(`https://valorantapiv1.mocklab.io/agents`);

  const paths = res.data.map((agent) => ({
    params: {
      agentId: agent.uuid
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<AgentsProps, Params> = async (context) => {
  const { agentId } = context.params!;

  const res = await axios.get<IAgents[]>(`https://valorantapiv1.mocklab.io/agents`);

  const agent = res.data.find((item) => {
    return item.uuid === agentId;
  });

  if (agent) {
    return {
      props: {
        agent
      }
    };
  }

  return {
    notFound: true
  };
};

const Agent: NextPage<AgentsProps> = ({ agent }) => {
  const [index, setIndex] = useState("Q");

  return (
    <S.Container>
      <S.MainAgent>
        <div className="AgentDescription">
          <span className="body20">// ROLE</span>
          <div className="RoleSec">
            <h2>{agent?.role.displayName}</h2>
            <S.RoleImage src={agent?.role.displayIcon} alt="" />
          </div>
          <span className="body20">// BIOGRAPHY</span>
          <p className="body24">{agent?.description}</p>
        </div>
        <S.AgentImage src={agent?.fullPortraitV2} alt="" />
        <h1>{agent?.displayName}</h1>
      </S.MainAgent>
      <S.SkillsSection>
        <h2 className="heading48">SPECIAL ABILITIES</h2>

        <div className="DivisorContainer">
          <div className="contentSkill">
            <div className="agentSkill">
              {agent?.abilities.map((skill) => (
                <S.SkillCard
                  key={skill.slot}
                  onClick={() => {
                    setIndex(skill.slot);
                  }}
                  className={index == skill.slot ? "active" : ""}
                >
                  <S.SkillCardImg src={skill.displayIcon} alt="" />
                </S.SkillCard>
              ))}
            </div>
            <div>
              {agent?.abilities.map((skill) => (
                <S.SkillCardContent hidden={index !== skill.slot} key={skill.slot}>
                  <h3 className="body36">
                    {skill.slot} - {skill.displayName}
                  </h3>

                  <p className="body30">{skill.description}</p>
                </S.SkillCardContent>
              ))}
            </div>
          </div>
          {agent?.abilities.map((skill) => (
            <div className="iframeDiv VideoSkill" key={skill.slot}>
              <video muted loop autoPlay hidden={index !== skill.slot} style={{ width: "100%", height: "100%" }}>
                <source src={skill.videoUrl} />
              </video>
            </div>
          ))}
        </div>
      </S.SkillsSection>
    </S.Container>
  );
};
export default Agent;
