import faker from "faker";

export const mockAccountModel = () => ({
  puuid: faker.random.uuid(),
  gameName: faker.random.word(),
  tagLine: faker.random.word(),
});
