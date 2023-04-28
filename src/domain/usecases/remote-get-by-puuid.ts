import { AccountModel } from "../models";

export interface GetByPuuid {
  getPuuid(): Promise<AccountModel>;
}
