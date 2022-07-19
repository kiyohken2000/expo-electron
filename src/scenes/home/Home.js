import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()

  const onButtonPress = () => {
    navigation.navigate('Detail')
  }

  return (
    <View>
      <Text>Home</Text>
      <Button
        label='go detail'
        onPress={() => onButtonPress()}
      />
    </View>
  )
}