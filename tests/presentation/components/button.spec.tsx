import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { renderWithTheme } from "@tests/presentation/mocks";

import { Button } from "@presentation/components";

const makeSut = () => {
  const mockedOnPress = jest.fn();
  const sut = renderWithTheme(
    <Button title="any title" onPress={mockedOnPress} />
  );

  return {
    sut,
    mockedOnPress,
  };
};

describe("Button", () => {
  it("Should return title correctly", () => {
    const { sut } = makeSut();

    const title = sut.getByText("any title");

    expect(title).toBeTruthy();
  });

  it("Should call onPress function when button is pressed", () => {
    const { sut, mockedOnPress } = makeSut();

    const button = sut.getByTestId("wrapper-button");

    fireEvent.press(button);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});
