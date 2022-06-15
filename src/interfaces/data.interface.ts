interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface MediaList {
  id: number;
  wwise: string;
  wave: string;
}

interface VoiceLine {
  minDuration: number;
  maxDuration: number;
  mediaList: MediaList[];
}

export interface IAgents {
  uuid: string;
  displayName: string;
  description: string;
  characterTags?: any;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  role: Role;
  abilities: Ability[];
  voiceLine: VoiceLine;
}
