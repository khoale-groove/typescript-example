import { authReducer } from './reducer';
import { defaultAuthSaga } from './saga';
import { IModule } from 'redux-dynamic-modules';
import { IAuthModuleState } from './types';

export const moduleName = 'auth';

export function getAuthModule(): IModule<IAuthModuleState> {
  return {
    id: moduleName,
    reducerMap: {
      [moduleName]: authReducer,
    },
    sagas: [defaultAuthSaga], //
  };
}
