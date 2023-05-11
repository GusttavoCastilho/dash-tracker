import React from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

type Props = {
  icon?: React.ReactNode;
  width: number;
} & TextInputProps;

export const Input: React.FC<Props> = ({ icon, width, ...rest }) => {
  const hasIcon = !!icon;
  return (
    <S.Wrapper width={width}>
      {hasIcon && <S.WrapperIcon testID="wrapper-icon">{icon}</S.WrapperIcon>}
      <S.TextInput {...rest} />
    </S.Wrapper>
  );
};
