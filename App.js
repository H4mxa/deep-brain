import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Text>search</Text>
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: 'green',
    padding: 12,
  },

  list: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 8,
  },
});

export default App;
