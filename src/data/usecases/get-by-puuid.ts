import { HttpClient } from "../protocols/http";

export class RemoteGetByPuuid {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async getPuuid(): Promise<void> {
    await this.httpClient.request({ method: "get", url: this.url });
  }
}
