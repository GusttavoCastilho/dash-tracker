import React from "react";

import { Button } from "@presentation/components";

import ValorantBackgroundImage from "@presentation/assets/images/background.png";
import ValorantOverlayImage from "@presentation/assets/images/overlay.png";
import ValorantImageText from "@presentation/assets/images/valorant.png";
import Logo from "@presentation/assets/images/logo.svg";

import * as S from "./styles";

export const SignIn: React.FC = () => {
  return (
    <S.Wrapper>
      <S.TextValorantImage source={ValorantImageText} />

      <S.BackgroundImage source={ValorantBackgroundImage}>
        <S.OverlayImage source={ValorantOverlayImage} />

        <Logo />

        <S.WrapperButton>
          <Button title="CONNECT RIOT ACCOUNT" />
        </S.WrapperButton>
      </S.BackgroundImage>
    </S.Wrapper>
  );
};
