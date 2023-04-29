import { HttpClient, HttpStatusCode } from "@data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@domain/errors";

export class RemoteGetByPuuid {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async getPuuid(): Promise<void> {
    const httpResponse = await this.httpClient.request({
      method: "get",
      url: this.url,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.data;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
