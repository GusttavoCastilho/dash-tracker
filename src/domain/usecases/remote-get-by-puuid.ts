import { AccountModel } from "@domain/models";

export interface GetByPuuid {
  getPuuid(): Promise<AccountModel>;
}

export namespace GetByPuuid {
  export type Model = AccountModel;
}
