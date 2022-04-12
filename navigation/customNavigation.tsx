import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MessageListScreen from '../screens/MessageListScreen'
import MessageDetailsScreen from '../screens/MessageDetailsScreen'

const Stack = createStackNavigator()

export default function MessageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessageList"
        component={MessageListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageDetailsScreen"
        component={MessageDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
