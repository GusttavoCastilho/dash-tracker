import { AccountModel } from "@domain/models";

export interface GetByPuuid {
  execute(): Promise<GetByPuuid.Model>;
}

export namespace GetByPuuid {
  export type Model = AccountModel;
}
