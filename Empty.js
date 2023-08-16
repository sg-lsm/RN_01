import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Empty() {
    const source = require('./picture/images/young_and_happy.png')
  return (
    <View style={styles.block}>
    <Image source={source} style={styles.image} />
      <Text style={styles.description}>현재 할 일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
  image:{
    width:300,
    height:200,
    resizeMode:'contain'
  }
});

export default Empty;
