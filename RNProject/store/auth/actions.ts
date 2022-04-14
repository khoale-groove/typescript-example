import * as constants from './constants';
import { LoginPayloadType, RegisterPayloadType, UserInfoType } from './types';

export const login = (payload: LoginPayloadType) => ({
  type: constants.USER_LOGIN,
  payload,
});

export const register = (payload: RegisterPayloadType) => ({
  type: constants.USER_REGISTER,
  payload,
});

export const logout = () => ({
  type: constants.USER_LOGOUT,
});

export const setUserInfo = (payload: UserInfoType) => ({
  type: constants.SET_USER_INFO,
  payload,
});

