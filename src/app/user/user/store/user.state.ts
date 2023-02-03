import { User } from "../users-service.service";

export interface UserState {
  singleUser: User;
  userList: User[];
  displayMessage: DisplayMessage;
}

export interface HttpRes {
  isSuccess: boolean,
  data: any,
  errorMessages: string[]
}

export enum MessageType {
  DEFAULT, 
  ERROR,
  INFO,
  SUCCESS
}

export interface DisplayMessage {
  type: MessageType,
  message: string
}


export const initialState: UserState = {
  singleUser: {
    Id: 0,
    UserName: "",
    Email: "",
    Role: "",
    Password: "",
    CollegeName: "",
    UniversityName: ""
  },
  userList: [],
  displayMessage: {
    type: MessageType.DEFAULT,
    message: ''
  }
};