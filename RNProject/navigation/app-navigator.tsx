import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stack-navigation';

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <StackNavigator />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
