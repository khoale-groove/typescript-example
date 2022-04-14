import { Reducer, AnyAction } from 'redux';
import * as constants from './constants';
import { ActionType, AuthState } from './types';

export const initialState: AuthState = {
  user: null,
  accessToken: '',
};

export const authReducer: Reducer<AuthState> = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case constants.USER_LOGIN: {
      return { ...state, accessToken: action.payload.accessToken, user: action.payload.user };
    }
    case constants.USER_LOGOUT: {
      return { ...state, user: null, accessToken: '' };
    }
    default:
      return state;
  }
};
