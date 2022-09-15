import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'green', padding: 12}}>
        <Text>search</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          padding: 8,
        }}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
