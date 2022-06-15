import React, { memo, useContext, useState } from "react";

import * as S from "./styles";
import Image from "next/image";

import { IGuns } from "../../interfaces/guns.interface";

function GunsCard({ displayName, displayIcon, description }: IGuns) {
  return (
    <S.Container>
      <h3 className="heading40">{displayName}</h3>
      <div>
        <S.Thumbnail src={displayIcon} />
        <p className="heading20">{description}</p>
      </div>
    </S.Container>
  );
}

export default memo(GunsCard);
