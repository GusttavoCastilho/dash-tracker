import styled from "styled-components/native";

type WrapperProps = {
  width: number;
};

export const Wrapper = styled.View<WrapperProps>`
  width: ${(props) => props.width}%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray800};
  padding: 16px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const WrapperIcon = styled.View`
  margin-right: 10px;
`;

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.gray0};
`;
