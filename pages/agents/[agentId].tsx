import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { IAgents } from "../../src/interfaces/agents.interface";

interface AgentsProps {
  agent: IAgents | undefined;
}

const StarWarsPerson: NextPage<AgentsProps> = ({ agent }) => {
  return <div>{agent?.displayName}</div>;
};

interface Params extends ParsedUrlQuery {
  agentId: string;
}

export const getStaticProps: GetStaticProps<AgentsProps, Params> = async (context) => {
  console.log("paths AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  const { agentId } = context.params!;
  const res = await axios.get<IAgents[]>(`/agents`);
  const agent = res.data.find((item) => {
    return item.uuid === agentId;
  });
  return {
    props: {
      agent
    }
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get<IAgents[]>(`/agents`);
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
export default StarWarsPerson;
