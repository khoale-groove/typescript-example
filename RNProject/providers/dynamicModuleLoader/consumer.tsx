import React from 'react';
import { DynamicModuleLoader, IModuleTuple } from 'redux-dynamic-modules';

const withDynamicModuleLoader = (modules: IModuleTuple) => (
  WrappedComponent: (props: any) => JSX.Element,
) => {
  const modulesArray = Array.isArray(modules) ? modules : [modules];

  return (props: any) => (
    <DynamicModuleLoader modules={modulesArray}>
      <WrappedComponent {...props} />
    </DynamicModuleLoader>
  );
};

export default withDynamicModuleLoader;
