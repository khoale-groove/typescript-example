import { Selector } from '../store';

export const selectUser: Selector<any> = state => state.auth.accessToken;
export const selectAccessToken: Selector<string> = state => state.auth.accessToken;
