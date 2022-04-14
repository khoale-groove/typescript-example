import { authReducer } from './reducer';
import { defaultAuthSaga } from './saga';
import { IModule } from 'redux-dynamic-modules';
import { AuthState } from './types';

export const moduleName = 'auth';

interface IAuthModuleState {
  [moduleName]: AuthState;
}

export function getAuthModule(): IModule<IAuthModuleState> {
  return {
    id: moduleName,
    reducerMap: {
      [moduleName]: authReducer,
    },
    sagas: [defaultAuthSaga], //
  };
}
