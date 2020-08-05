import * as React from 'react';
import {View, ScrollView, Text} from 'react-native';
import listStyles from './listStyle';

const ListScreen = () => (
  <ScrollView style={[listStyles.scene]}>
    <Text>Hola</Text>
  </ScrollView>
);

export default ListScreen;
