import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type Props = {
  title: string;
} & TouchableOpacityProps;

export const Button: React.FC<Props> = ({ title, ...rest }) => {
  const borders = [
    S.BorderTop,
    S.BorderTopRight,
    S.BorderBottomRight,
    S.BorderBottom,
    S.BorderTopLeft,
    S.BorderBottomLeft,
  ];
  return (
    <S.Wrapper testID="wrapper-button" {...rest}>
      {borders.map((Border, index) => (
        <Border key={index} />
      ))}
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
