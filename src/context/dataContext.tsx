import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

//Interfaces
import { IAgents } from "../interfaces/agents.interface";
import { IMaps } from "../interfaces/maps.interface";
import { IGuns } from "../interfaces/guns.interface";
import axios from "axios";

type props = {
  children: React.ReactNode;
};

type IDataContext = {
  agents: IAgents[];
  maps: IMaps[];
  guns: IGuns[];
};

//Context
const DataContext = createContext({} as IDataContext);

function DataProvider({ children }: props) {
  const [agents, setAgents] = useState<IAgents[]>([]);
  const [maps, setMaps] = useState<IMaps[]>([]);
  const [guns, setGuns] = useState<IGuns[]>([]);

  useEffect(() => {
    api.get(`/agents`).then((res) => {
      const resData: IAgents[] = res.data;
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
    });
    api.get(`/maps`).then((res) => {
      const resDataMaps: IMaps[] = res.data;
      const maps = resDataMaps.map((map) => ({
        uuid: map.uuid,
        displayName: map.displayName,
        displayIcon: map.displayIcon,
        description: map.description,
        listViewIcon: map.listViewIcon,
        splash: map.splash,
        callouts: map.callouts
      }));
      setMaps(maps);
    });
    api.get(`/guns`).then((res) => {
      const resDataGuns: IGuns[] = res.data;
      const guns = resDataGuns.map((gun) => ({
        uuid: gun.uuid,
        displayName: gun.displayName,
        description: gun.description,
        category: gun.category,
        displayIcon: gun.displayIcon,
        killStreamIcon: gun.killStreamIcon,
        weaponStats: gun.weaponStats,
        shopData: gun.shopData
      }));
      setGuns(guns);
    });
  }, []);

  return <DataContext.Provider value={{ agents, maps, guns }}>{children}</DataContext.Provider>;
}

export { DataProvider, DataContext };
