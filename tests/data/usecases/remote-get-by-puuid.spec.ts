import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "../../../src/data/protocols/http";
import { RemoteGetByPuuid } from "../../../src/data/usecases/get-by-puuid";

describe("RemoteGetByPuuid", () => {
  it("Should call HttpClient with correct URL", async () => {
    class HttpClientSpy implements HttpClient {
      url?: string;

      async request(data: HttpRequest): Promise<HttpResponse<void>> {
        this.url = data.url;
        return {
          statusCode: 200,
        };
      }
    }

    const url = "any_url";
    const httpClient = new HttpClientSpy();
    const sut = new RemoteGetByPuuid(url, httpClient);
    await sut.getPuuid();
    expect(httpClient.url).toBe(url);
  });
});
