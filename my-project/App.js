import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Todo from './src/Components/Todo';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>My Todo App</Text>
      </View>
      <Todo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop : 30
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;