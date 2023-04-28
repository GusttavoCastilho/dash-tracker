import { RemoteGetByPuuid } from "../../../src/data/usecases/get-by-puuid";
import { HttpClientSpy } from "../mocks/mock-http";

describe("RemoteGetByPuuid", () => {
  it("Should call HttpClient with correct URL", async () => {
    const url = "any_url";
    const httpClient = new HttpClientSpy();
    const sut = new RemoteGetByPuuid(url, httpClient);
    await sut.getPuuid();
    expect(httpClient.url).toBe(url);
  });
});
