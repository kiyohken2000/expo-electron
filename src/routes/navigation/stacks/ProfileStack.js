import React, { useState, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Profile from '../../../scenes/profile/Profile'
import Detail from '../../../scenes/detail/Detail'

const Stack = createStackNavigator()

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  )
}