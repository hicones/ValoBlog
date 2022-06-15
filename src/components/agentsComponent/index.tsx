import React, { memo } from "react";

import * as S from "./styles";
import Image from "next/image";

import { IAgents } from "../../interfaces/agents.interface";

function AgentsCard({ displayIcon, displayName }: IAgents) {
  return (
    <S.Container>
      <span className="body18">{displayName}</span>
      <div>
        <S.Thumbnail src={displayIcon} />
      </div>
    </S.Container>
  );
}

export default memo(AgentsCard);
