import React from 'react'
import { FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../components/Themed'
import { FontAwesome } from '@expo/vector-icons'

export default function AudioControlScreen() {
  return (
    <View style={styles.container}>
      <Text>Audio Controls</Text>
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
