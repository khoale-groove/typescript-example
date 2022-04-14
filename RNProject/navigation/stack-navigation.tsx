import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ListCardScreen, CardDetailScreen } from '../screens';

export type StackNavigatorParamList = {
  homeScreen: undefined;
  listCardScreen: undefined;
  cardDetailScreen: { cardId: string };
};

export const Stack = createNativeStackNavigator<StackNavigatorParamList>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="listCardScreen" component={ListCardScreen} />
      <Stack.Screen name="cardDetailScreen" component={CardDetailScreen} />
    </Stack.Navigator>
  );
};
