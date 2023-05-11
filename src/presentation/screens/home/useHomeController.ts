import { useState } from "react";
import { GetByPuuid } from "@src/domain/usecases";

export const useHomeController = () => {
  const [searchPlayer, setSearchPlayer] = useState("");
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");

  async function handleGetPuuid(puuid: GetByPuuid) {
    const account = await puuid.execute();
    console.log(account);
  }

  return {
    searchPlayer,
    setSearchPlayer,
    gameName,
    setGameName,
    tagLine,
    setTagLine,
    handleGetPuuid,
  };
};
