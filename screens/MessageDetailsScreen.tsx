import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../components/Themed'

export default function MessageDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Message Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
