import React from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "@presentation/theme";

import { SignIn } from "@src/presentation/screens";
import { MakeHeader } from "@main/factories/screens";

export const Main: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MakeHeader />
    </ThemeProvider>
  );
};
