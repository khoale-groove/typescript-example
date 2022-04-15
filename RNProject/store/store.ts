import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getAuthModule } from './index';
import { AuthState } from './auth/types';

export type RootState = {
  auth: AuthState;
};
export type Selector<S> = (state: RootState) => S

export const store: IModuleStore<RootState> = createStore(
  {
    initialState: {},
    enhancers: [],
    extensions: [getSagaExtension()],
  },
  getAuthModule(),
);
