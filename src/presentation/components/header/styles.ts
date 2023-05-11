import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 32px 16px 16px;
  border-radius: 8px;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const SearchButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 0 10px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.gray0};
`;
