import React, { memo } from "react";

import * as S from "./styles";
import Image from "next/image";
import thumb from "../../assets/footer/backgroundFooter.png";

import { IAgents } from "../../interfaces/data.interface";

function AgentsCard({ displayIcon, description, displayName }: IAgents) {
  return (
    <S.Container>
      <S.Thumbnail src={displayIcon} />
    </S.Container>
  );
}

export default memo(AgentsCard);
