import { useState } from "react";

export const useHomeController = () => {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");

  return {
    gameName,
    setGameName,
    tagLine,
    setTagLine,
  };
};
