import { AccountModel } from "@domain/models";

export interface GetByPuuid {
  getPuuid(): Promise<AccountModel>;
}
