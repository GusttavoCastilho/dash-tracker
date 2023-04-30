import React from "react";
import { renderWithTheme } from "@tests/presentation/mocks";

import { SignIn } from "@presentation/screens";

const makeSut = () => {
  const sut = renderWithTheme(<SignIn />);

  return {
    sut,
  };
};

describe("SignIn", () => {
  it("Should render screen", () => {
    const { sut } = makeSut();

    const buttonTitle = sut.getByText("CONNECT RIOT ACCOUNT");

    expect(buttonTitle).toBeDefined();
  });
});
