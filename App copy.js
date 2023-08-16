import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet } from "react-native";
import Counter from './Counter';

function App () {
  const [visible, setVisible] = useState(true);
  const [counter, setCounter] = useState(0);
  const onPress = () => {
    setVisible(!visible)
  }
  const onIncrease = () => setCounter(counter + 1);
  const onDecrease = () => underZero();

  const underZero = () =>{
    if(counter < 1){
      return 0;
    }
    return setCounter(counter-1)
  }
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <Counter count={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
      </SafeAreaView>
    </>
  );
};

const screenDiv = ()=> {
  return <div style={styles.screen}></div>;
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor: "cyan"
  },
  button:{
    width: 64,
    height: 64,
    fontSize:32
  }
})

export default App;