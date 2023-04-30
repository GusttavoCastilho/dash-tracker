import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const OverlayImage = styled.Image`
  flex: 1;
  opacity: 0.4;
  position: absolute;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextValorantImage = styled.Image`
  flex: 1;
  position: absolute;
  right: 5px;
  z-index: 1;
`;

export const WrapperButton = styled.View`
  width: 100%;
  position: absolute;
  bottom: 50px;

  align-items: center;
`;
