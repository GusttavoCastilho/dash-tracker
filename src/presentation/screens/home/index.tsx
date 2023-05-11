import React from "react";
import { StatusBar } from "expo-status-bar";

import { HeaderSearch } from "@presentation/components";
import { useHomeController } from "./useHomeController";
import { HomeView } from "./model";

import * as S from "./styles";

export const Home: React.FC<HomeView> = ({ puuid }) => {
  const { gameName, setGameName, tagLine, setTagLine, handleGetPuuid } =
    useHomeController();

  handleGetPuuid(puuid);

  return (
    <S.Wrapper>
      <StatusBar style="light" />

      <HeaderSearch
        gameNameValue={gameName}
        onChangeGameNameText={setGameName}
        tagLineValue={tagLine}
        onChangeTagLineText={setTagLine}
        onSearchPlayer={() => {}}
      />
    </S.Wrapper>
  );
};
