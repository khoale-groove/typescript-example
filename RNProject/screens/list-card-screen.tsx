import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorParamList } from '../navigation/stack-navigation';
import { DynamicModuleLoader } from 'redux-dynamic-modules';

interface ListCardScreenNavigationProp
  extends StackScreenProps<StackNavigatorParamList, 'listCardScreen'> {}

export function ListCardScreen(props: ListCardScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text style={TEXT}>ListCardScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const TEXT: TextStyle = {
  color: 'blue',
};
