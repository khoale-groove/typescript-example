import { StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorParamList } from '../navigation/stack-navigation';
import { useBackHandler } from '../hooks';
import { TextField } from '../components';

interface HomeScreenNavigationProp
  extends StackScreenProps<StackNavigatorParamList, 'homeScreen'> {

  }

export function HomeScreen(props: HomeScreenNavigationProp) {
  useBackHandler(true);
  props.
  return (
    <View style={styles.container}>
      {/* <Text style={TEXT}>HomeScreen</Text> */}
      <TextField style={TEXT} />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const TEXT: TextStyle = {
  color: 'blue',
};
