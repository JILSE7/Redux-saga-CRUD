export interface IUser {
    id     :number;
    name   :string;
    email  :string;
    phone  :string;
    address:string;
}

export interface UsersState {
    users   : [] | IUser[];
    loading : boolean;
    error?   : string;
}