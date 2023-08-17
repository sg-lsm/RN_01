import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({ id, text, done, onToggle,onRemove }) {
  const checkImg = require("../picture/icons/check_white/check_white.png");
  return (
    <View style={styles.item}>
      {/* onPress={onToggle(id)} 형식으로 작성하면 렌더링마다 호출되고 리렌더링하고 결국 에러를 부른다. */}
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <Image source={checkImg} />}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={()=>onRemove(id)}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "#26a69a",
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#212121",
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough:{
    color: '#9e9e9e',
    textDecorationLine: 'line-through'
  },
  removePlaceholder:{
    width: 32,
    height: 32
  }
});

export default TodoItem;
