import { RemoteGetByPuuid } from "../../../src/data/usecases/get-by-puuid";
import { HttpClientSpy } from "../mocks/mock-http";

type SutTypes = {
  sut: RemoteGetByPuuid;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = "any_url"): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteGetByPuuid(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteGetByPuuid", () => {
  it("Should call HttpClient with correct URL", async () => {
    const url = "other_url";
    const { sut, httpClientSpy } = makeSut(url);

    await sut.getPuuid();
    expect(httpClientSpy.url).toBe(url);
  });
});
