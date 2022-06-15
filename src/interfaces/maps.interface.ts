interface Callout {
  regionName: string;
  superRegionName: string;
}

export interface IMaps {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  listViewIcon: string;
  splash: string;
  callouts: Callout[];
}
