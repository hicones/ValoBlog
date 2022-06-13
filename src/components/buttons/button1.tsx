import React, { memo } from "react";

import * as S from "./styles";

import { IButton } from "../../interfaces/buttons.interface";

function Button1({ title, value, setValue }: IButton) {
  return (
    <S.buttonContainer>
      <S.button1 className="heading40" title={title}>
        {title}
      </S.button1>
    </S.buttonContainer>
  );
}

export default memo(Button1);
