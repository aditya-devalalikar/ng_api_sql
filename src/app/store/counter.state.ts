import { User } from "../users-service.service";

export interface CounterState {
    count: number;
    singleUser: User;
    userList: User[];
  }
  
export const initialState: CounterState = {
  count: 0,
  singleUser: {
    Email:"",
    Id: 0,
    Password: "",
    Role: "",
    UserName: ""
  },
  userList: []
};