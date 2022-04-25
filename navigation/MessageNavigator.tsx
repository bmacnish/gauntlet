import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessageListScreen from '../screens/MessageListScreen'
import MessageDetailsScreen from '../screens/MessageDetailsScreen'

const Stack = createStackNavigator()

export default function MessageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messages"
        component={MessageListScreen}
      />
      <Stack.Screen
        name="Name"
        component={MessageDetailsScreen}
        options={{
          title: 'xxx'
        }}
      />
    </Stack.Navigator>
  )
}
