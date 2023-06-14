import React from "react";
import { StatusBar } from "expo-status-bar";

import { HeaderSearch } from "@presentation/components";
import { HomeView } from "./model";

import * as S from "./styles";

export const Home: React.FC<HomeView> = ({
  gameName,
  setGameName,
  setTagLine,
  tagLine,
  handleSearchPlayer,
}) => {
  return (
    <S.Wrapper>
      <StatusBar style="light" />

      <HeaderSearch
        gameNameValue={gameName}
        onChangeGameNameText={setGameName}
        tagLineValue={tagLine}
        onChangeTagLineText={setTagLine}
        onSearchPlayer={handleSearchPlayer}
      />
    </S.Wrapper>
  );
};
