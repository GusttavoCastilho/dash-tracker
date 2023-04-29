export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

export type HttpMethod = "post" | "get" | "put" | "delete";

export enum HttpStatusCode {
  ok = 200,
  badRequest = 400,
  unauthorized = 401,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data?: T;
};
