export type HomeView = {
  gameName: string;
  tagLine: string;
  setGameName: React.Dispatch<React.SetStateAction<string>>;
  setTagLine: React.Dispatch<React.SetStateAction<string>>;
  handleSearchPlayer: () => Promise<void>;
};
