import React, { memo } from "react";

import * as S from "./styles";
import Image from "next/image";

import { IAgents } from "../../interfaces/agents.interface";
import { useRouter } from "next/router";

function AgentsCard({ displayIcon, displayName, uuid }: IAgents) {
  const router = useRouter();

  function handleMove() {
    router.push(`/agents/${uuid}`);
  }

  return (
    <S.Container onClick={handleMove}>
      <span className="body18">{displayName}</span>
      <div>
        <S.Thumbnail src={displayIcon} />
      </div>
    </S.Container>
  );
}

export default memo(AgentsCard);
