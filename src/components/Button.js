import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button(props) {
  const { onPress, label } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red'
  },
  label: {
    fontSize: 17,
    color: 'white'
  }
})