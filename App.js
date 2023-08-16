import React from 'react';
import DateHead from './DateHead';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './AddTodo';
import Empty from './Empty';

function App(){
const date = new Date();
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={date} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block:{
    flex:1,
    backgroundColor:"white"
  }
});

export default App;