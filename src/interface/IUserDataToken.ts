import { User } from "src/Users/user.model";
import { iUserData } from "./IUserData";

export interface iUserDataLogin {
    token: string,
    userData: iUserData
}