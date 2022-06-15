import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

//Interfaces
import { IAgents } from "../interfaces/data.interface";

type props = {
  children: React.ReactNode;
};

type IDataContext = {
  agents: IAgents[];
};

//Context
const DataContext = createContext({} as IDataContext);

function DataProvider({ children }: props) {
  const [agents, setAgents] = useState<IAgents[]>([]);

  useEffect(() => {
    api.get(`/agents`).then((res) => {
      const resData: IAgents[] = res.data.data;
      const agents = resData.map((agent) => ({
        uuid: agent.uuid,
        displayName: agent.displayName,
        description: agent.description,
        characterTags: agent.characterTags,
        displayIcon: agent.displayIcon,
        displayIconSmall: agent.displayIconSmall,
        bustPortrait: agent.bustPortrait,
        fullPortrait: agent.fullPortrait,
        fullPortraitV2: agent.fullPortraitV2,
        killfeedPortrait: agent.killfeedPortrait,
        background: agent.background,
        role: agent.role,
        abilities: agent.abilities,
        voiceLine: agent.voiceLine
      }));
      setAgents(agents);
      console.log("Agentes aqui", agents);
    });
  }, []);

  return <DataContext.Provider value={{ agents }}>{children}</DataContext.Provider>;
}

export { DataProvider, DataContext };
