import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorParamList } from '../navigation/stack-navigation';
import { getAuthModule } from '../store';
import withDynamicModuleLoader from '../providers/dynamicModuleLoader/consumer';

interface CardDetailScreenNavigationProp
  extends StackScreenProps<StackNavigatorParamList, 'cardDetailScreen'> {}

function CardDetail(props: CardDetailScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text style={TEXT}>CardDetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const TEXT: TextStyle = {
  color: 'blue',
};

export const CardDetailScreen = withDynamicModuleLoader([getAuthModule()])(CardDetail);
