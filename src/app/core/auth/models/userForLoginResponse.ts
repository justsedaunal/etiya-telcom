import { ResultModel } from "../../models/resultModel";

export interface UserForLoginResponse extends ResultModel {
  accessToken: string;
}
