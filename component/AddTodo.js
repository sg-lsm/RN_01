import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

function AddTodo({onInsert}) {
  const [text, setText] = useState("");
  const whitePlusButton = require("../picture/icons/add_white/add_white.png");
  const button = (
    <View style={styles.buttonStyle}>
      <Image source={whitePlusButton} />
    </View>
  );
  const onPress = () =>{
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  }
  console.log(text);
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력해주세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        returnKeyType="done"
      />
      {Platform.select({
        ios: <TouchableOpacity activeOpacity={0.5} onPress={onPress}>{button}</TouchableOpacity>,
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    flex: 1,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    backgroundColor: "#26a69a",
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: "hidden",
    borderRadius: 24,
  },
});

export default AddTodo;
