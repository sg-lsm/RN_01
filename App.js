import React, {useState, useEffect} from 'react';

import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Empty from './component/Empty';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import DateHead from './component/DateHead';
import AsyncStorage from '@react-native-community/async-storage';



function App(){
  const date = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: "text01", done: true },
    { id: 2, text: "text02", done: false },
    { id: 3, text: "text03", done: false },
  ]);
  // 불러오기 (AsyncStorage)
  // useEffect()는 등록된 순서대로 동작하는데 저장이 먼저 순서가 온다면 초기값을 저장하고 불러오기 때문에 원하는 정보를 얻을 수 없다.
  useEffect(() => {
    async function load() {
      try {
        const rawTodos = await AsyncStorage.getItem("todos");
        const saveTodos = JSON.parse(rawTodos);
        setTodos(saveTodos);
      } catch (e) {
        console.log("Failed to load todos");
      }
    }
    load();
  }, []);
  // 저장 (AsyncStorage)
  useEffect(() => {
    async function save() {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (e) {
        console.log("Failed to save todos");
        console.error(e);
      }
    }
    save();
  }, [todos]);
  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };
  const onToggle = (id) => {
    // todos를 분해 후 todo의 id와 param으로 받아온 id값이 동일하다면 {...todo, done: !todo.done}을 실행하고 아니면 todo 그대로 반환
    // {...todo, done : !todo.done}
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(nextTodos);
  };
  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id != id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.avoid}
        >
          <DateHead date={date} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block:{
    flex:1,
    backgroundColor:"white"
  },
  avoid:{
    flex:1
  }
});

export default App;