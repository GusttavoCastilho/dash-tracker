import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { renderWithTheme } from "@tests/presentation/mocks";

import { HeaderSearch } from "@presentation/components";

const makeSut = () => {
  const mockOnSearchPlayer = jest.fn();
  const mockOnChangeGameNameText = jest.fn();
  const mockOnChangeTagLineText = jest.fn();

  const defaultProps = {
    gameNameValue: "any game name",
    onChangeGameNameText: mockOnChangeGameNameText,
    tagLineValue: "tag",
    onChangeTagLineText: mockOnChangeTagLineText,
    onSearchPlayer: mockOnSearchPlayer,
  };

  const sut = renderWithTheme(<HeaderSearch {...defaultProps} />);

  return {
    sut,
    mockOnSearchPlayer,
    mockOnChangeGameNameText,
    mockOnChangeTagLineText,
  };
};

describe("HeaderSearch", () => {
  it("should call onChangeNameText when game name input changes", () => {
    const { sut, mockOnChangeGameNameText } = makeSut();

    const gameNameInput = sut.getByPlaceholderText("Search a Player");

    fireEvent.changeText(gameNameInput, "Player");

    expect(mockOnChangeGameNameText).toHaveBeenCalledWith("Player");
  });

  it("should call onChangeTaglineText when game name input changes", () => {
    const { sut, mockOnChangeTagLineText } = makeSut();

    const gameNameInput = sut.getByPlaceholderText("Tag");

    fireEvent.changeText(gameNameInput, "12345");

    expect(mockOnChangeTagLineText).toHaveBeenCalledWith("12345");
  });

  it("should call onSearchPlayer when search button is pressed", () => {
    const { sut, mockOnSearchPlayer } = makeSut();

    const searchButton = sut.getByTestId("search-button");

    fireEvent.press(searchButton);

    expect(mockOnSearchPlayer).toHaveBeenCalled();
  });
});
