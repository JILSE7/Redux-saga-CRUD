import { UsersState } from "../Interfaces/Users";

export const selectUsers = (state: {data:UsersState}):UsersState => state.data;