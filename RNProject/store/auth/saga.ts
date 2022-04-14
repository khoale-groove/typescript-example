import * as constants from './constants';
import * as actions from './actions';

import { takeLatest } from 'redux-saga/effects';
import { ActionType, LoginPayloadType, RegisterPayloadType } from './types';

export function* loginSaga(action: ActionType<LoginPayloadType>) {
  try {
    //
  } catch (error) {
    console.warn(error);
  }
}

export function* registerSaga(action: ActionType<RegisterPayloadType>) {
  try {
    //
  } catch (error) {
    console.warn(error);
  }
}
export function* logoutSaga() {
  try {
    //
  } catch (error) {
    console.warn(error);
  }
}

export function* defaultAuthSaga() {
  yield takeLatest(constants.USER_LOGIN, loginSaga);
  yield takeLatest(constants.USER_REGISTER, registerSaga);
  yield takeLatest(constants.USER_LOGOUT, logoutSaga);
}
