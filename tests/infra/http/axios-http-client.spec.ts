import { AxiosHttpClient } from "@infra/http";
import { mockHttpRequest } from "@tests/data/mocks";
import { mockAxios } from "@tests/infra/mock";

import axios from "axios";

jest.mock("axios");

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();

  return {
    mockedAxios,
    sut,
  };
};

describe("AxiosHttpClient", () => {
  it("Should call axios with correct values", async () => {
    const request = mockHttpRequest();
    const { sut, mockedAxios } = makeSut();

    await sut.request(request);

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method,
    });
  });
});
