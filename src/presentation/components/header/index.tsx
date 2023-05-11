import React from "react";

import { useTheme } from "styled-components/native";
import { AntDesign, Octicons } from "@expo/vector-icons";

import { Input } from "@presentation/components";

import * as S from "./styles";

type Props = {
  gameNameValue: string;
  onChangeGameNameText: (text: string) => void;
  tagLineValue: string;
  onChangeTagLineText: (text: string) => void;
  onSearchPlayer: () => void;
};

export const HeaderSearch: React.FC<Props> = ({
  gameNameValue,
  onChangeGameNameText,
  tagLineValue,
  onChangeTagLineText,
  onSearchPlayer,
}) => {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <S.Content>
        <Input
          placeholder="Search a Player"
          placeholderTextColor={theme.colors.gray100}
          onChangeText={onChangeGameNameText}
          value={gameNameValue}
          autoCapitalize="none"
          autoComplete="off"
          maxLength={30}
          width={50}
          icon={
            <AntDesign
              name="search1"
              size={20}
              color={theme.colors.gray200}
              testID="search-icon"
            />
          }
        />
        <Input
          placeholder="Tag"
          placeholderTextColor={theme.colors.gray100}
          onChangeText={onChangeTagLineText}
          value={tagLineValue}
          autoCapitalize="none"
          autoComplete="off"
          maxLength={5}
          width={28}
          icon={
            <Octicons
              name="hash"
              size={20}
              color={theme.colors.gray200}
              testID="tag-icon"
            />
          }
        />

        <S.SearchButton onPress={onSearchPlayer} testID="search-button">
          <S.TextButton>Search</S.TextButton>
        </S.SearchButton>
      </S.Content>
    </S.Wrapper>
  );
};
