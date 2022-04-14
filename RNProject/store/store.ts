import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getAuthModule } from './index';

type IState = {};

export const store: IModuleStore<IState> = createStore(
  {
    initialState: {},
    enhancers: [],
    extensions: [getSagaExtension()],
  },
  getAuthModule(),
);
