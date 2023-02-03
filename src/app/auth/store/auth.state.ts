export interface AuthState {
    email: string;
    password: string;
  }
  
  export const initialAuthState: AuthState = {
    email: '',
    password: ''
  };
  