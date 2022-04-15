import { Selector } from '../store';

export const selectUser: Selector<any> = state => state.auth.user;
export const selectAccessToken: Selector<string> = state => state.auth.accessToken;
