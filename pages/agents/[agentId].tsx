import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { IAgents } from "../../src/interfaces/agents.interface";

interface AgentsProps {
  agent: IAgents;
}

interface Params extends ParsedUrlQuery {
  agentId: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get<IAgents[]>(`${process.env.BASE_URL}/agents`);

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

  const res = await axios.get<IAgents[]>(`${process.env.BASE_URL}/agents`);

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
  return <div>{agent?.displayName}</div>;
};
export default Agent;
