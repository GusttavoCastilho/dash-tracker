import { HttpClient, HttpStatusCode } from "@data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@domain/errors";
import { GetByPuuid } from "@domain/usecases";

export class RemoteGetByPuuid implements GetByPuuid {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteGetByPuuid.Model>
  ) {}

  async execute(): Promise<GetByPuuid.Model> {
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

export namespace RemoteGetByPuuid {
  export type Model = GetByPuuid.Model;
}
