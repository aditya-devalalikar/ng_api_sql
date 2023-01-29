import { User } from "../users-service.service";

export interface CounterState {
  count: number;
  singleUser: User;
  userList: User[];
}

export interface HttpRes {
  isSuccess: boolean,
  data: any,
  errorMessages: string[]
}



export const initialState: CounterState = {
  count: 0,
  singleUser: {
    Id: 0,
    UserName: "",
    Email: "",
    Role: "",
    Password: "",
    CollegeName: "",
    UniversityName: ""
  },
  userList: []
};