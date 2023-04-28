import { RemoteGetByPuuid } from "../../../src/data/usecases/get-by-puuid";
import { HttpClientSpy } from "../mocks/mock-http";
import faker from 'faker';

type SutTypes = {
  sut: RemoteGetByPuuid;
  httpClientSpy: HttpClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteGetByPuuid(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe("RemoteGetByPuuid", () => {
  it("Should call HttpClient with correct URL", async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);

    await sut.getPuuid();
    expect(httpClientSpy.url).toBe(url);
  });
});
