import React from "react";

import { Home } from "@presentation/screens";
import { makeRemoteGetByPuuid } from "../usecases";
import { useHomeController } from "@src/presentation/screens/home/useHomeController";

export const MakeHeader: React.FC = () => {
  const { gameName, tagLine } = useHomeController();

  return <Home puuid={makeRemoteGetByPuuid(gameName, tagLine)} />;
};
