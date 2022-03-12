import { histelement } from "./histelement-model";

export interface User {
    id?: any;
    mail: string;
    admin: boolean;
    manager: boolean;
    isBanned: boolean;
    hist: histelement[];
}