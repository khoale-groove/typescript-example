import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ListCardScreen, CardDetailScreen } from '../screens';
//
export type BottomTabNavigatorParamList = {
  homeScreen: undefined;
  listCardScreen: undefined;
  cardDetailScreen: { cardId: string };
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const BottomNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="homeScreen" component={HomeScreen} />
      <BottomTab.Screen name="listCardScreen" component={ListCardScreen} />
      <BottomTab.Screen name="cardDetailScreen" component={CardDetailScreen} />
    </BottomTab.Navigator>
  );
};
