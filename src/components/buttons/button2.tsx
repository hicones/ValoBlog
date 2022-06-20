import React, { memo } from "react";

import * as S from "./styles";

import { IButton } from "../../interfaces/buttons.interface";
import { NavLink } from "../NavLink";

function Button1({ title, value, setValue, href }: IButton) {
  return (
    <NavLink href={href}>
      <S.button2Container className="Button2">
        <S.button2 className="heading40">{title}</S.button2>
      </S.button2Container>
    </NavLink>
  );
}

export default memo(Button1);
