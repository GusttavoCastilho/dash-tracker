import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { renderWithTheme } from "@tests/presentation/mocks";

import { Input } from "@presentation/components";

type SutProps = {
  icon?: React.ReactNode;
};

jest.mock("@expo/vector-icons", () => "Icon");

const MockIcon = () => <></>;

const makeSut = (props?: SutProps) => {
  const onChangeTextMock = jest.fn();
  const sut = renderWithTheme(
    <Input width={100} placeholder="any placeholder" onChangeText={onChangeTextMock} {...props} />
  );

  return {
    sut,
    onChangeTextMock,
  };
};

describe("Input", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with icon", () => {
    const { sut } = makeSut({
      icon: <MockIcon />,
    });

    const icon = sut.getByTestId("wrapper-icon");
    const input = sut.getByPlaceholderText("any placeholder");

    expect(input).toBeDefined();
    expect(icon).toBeDefined();
  });

  it("should correctly without icon", () => {
    const { sut } = makeSut();

    const icon = sut.queryByTestId("wrapper-icon");
    const input = sut.getByPlaceholderText("any placeholder");

    expect(input).toBeDefined();
    expect(icon).toBeNull();
  });

  it("should calls onChangeText function when text is entered", () => {
    const { sut, onChangeTextMock } = makeSut();

    const input = sut.getByPlaceholderText("any placeholder");

    fireEvent.changeText(input, "any text");

    expect(onChangeTextMock).toHaveBeenCalledWith("any text");
  });
});
