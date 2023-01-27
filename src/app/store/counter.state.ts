import { User } from "../users-service.service";

export interface CounterState {
    count: number;
    userList: User[];
  }
  
export const initialState: CounterState = {
  count: 0,
  userList: []
};