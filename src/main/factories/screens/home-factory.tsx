import React from "react";

import { Home } from "@presentation/screens";
import { makeRemoteGetByPuuid } from "../usecases";
import { useHomeController } from "@src/presentation/screens/home/useHomeController";

export const MakeHeader: React.FC = () => {
  const { gameName, setGameName, tagLine, setTagLine } = useHomeController();

  const handleSearchPlayer = async () => {
    const remoteGetByPuuid = makeRemoteGetByPuuid(gameName, tagLine);
    const account = await remoteGetByPuuid.execute();
  };

  return (
    <Home
      gameName={gameName}
      setGameName={setGameName}
      tagLine={tagLine}
      setTagLine={setTagLine}
      handleSearchPlayer={handleSearchPlayer}
    />
  );
};
