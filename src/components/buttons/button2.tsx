import React, { memo } from "react";

import * as S from "./styles";

import { IButton } from "../../interfaces/buttons.interface";
import { NavLink } from "../NavLink";

function Button1({ title, value, setValue, href }: IButton) {
  return (
    <S.buttonContainer className="Button2">
      <NavLink href={href}>
        <S.button2 className="heading40">{title}</S.button2>
      </NavLink>
    </S.buttonContainer>
  );
}

export default memo(Button1);
