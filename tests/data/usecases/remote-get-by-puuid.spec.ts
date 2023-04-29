import { RemoteGetByPuuid } from "@data/usecases";
import { HttpStatusCode } from "@data/protocols/http";
import { InvalidCredentialsError } from "@domain/errors/invalid-credentials-error";
import { HttpClientSpy } from "@tests/data/mocks";

import faker from "faker";

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

  it("Should throw InvalidCredentialsError if HttpClient returns 401", async () => {
    const { sut, httpClientSpy } = makeSut();

    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };

    const promise = sut.getPuuid();
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
});
