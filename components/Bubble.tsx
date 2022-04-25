import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'

interface BubbleProps {
  text: string
  reply?: boolean
}

export default function Bubble({text, reply }: BubbleProps) {
  return (
    <View style={[styles.bubble, { 
      alignSelf: reply ? 'flex-start' : 'flex-end', 
      backgroundColor: reply ? 'yellow' : 'violet',
    }]}>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 20,
    padding: 10,
    maxWidth: '75%',
    margin: 10,
  },
})
