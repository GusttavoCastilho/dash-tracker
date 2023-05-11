import { RemoteGetByPuuid } from "@src/data/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "../http";
import { API_KEY } from "@env";

export const makeRemoteGetByPuuid = (
  gameName: string,
  tagLine: string
): RemoteGetByPuuid => {
  return new RemoteGetByPuuid(
    makeApiUrl(
      `/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`
    ),
    makeAxiosHttpClient()
  );
};
