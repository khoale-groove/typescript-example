import { AnyAction } from 'redux';

// actions
export type LoginPayloadType = {
  email: string;
  password: string;
};

export type RegisterPayloadType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export interface ActionType<T> extends AnyAction {
  payload: T;
}

export type UserInfoType = {
  user: { [s: string]: string };
  accessToken: string;
};

// reducers
export interface AuthState {
  user: any;
  accessToken: string;
}

export interface IAuthModuleState {
  auth: AuthState;
}
