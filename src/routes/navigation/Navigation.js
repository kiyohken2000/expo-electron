import 'react-native-gesture-handler'
import React, { useEffect, useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './tabs/Tabs'

export default function Main() {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
