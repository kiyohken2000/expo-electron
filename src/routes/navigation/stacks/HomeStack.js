import React, { useState, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { lightProps, darkProps } from './navigationProps/navigationProps'

import Home from '../../../scenes/home/Home'
import Detail from '../../../scenes/detail/Detail'

const Stack = createStackNavigator()

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={lightProps}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  )
}