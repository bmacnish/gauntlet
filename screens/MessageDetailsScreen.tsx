import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Bubble from '../components/Bubble'
import { View, Text } from '../components/Themed'

const CONVERSATION_DATA = [
  {
    text: 'This is a message. Hello!',
  },
  {
    text: 'A reply to the inital message. What are you up to?',
    reply: true,
  },
  {
    text: 'Planning out some designs for this messaging app! What do you think?',
  },
  {
    text: 'Looking good, looking forward to seeing the final thing',
    reply: true,
  },
  {
    text: 'Good luck!',
    reply: true,
  },
  {
    text: 'Thanks',
  },
]

export default function MessageDetailsScreen() {
  const [conversationIndex, setConversationIndex] = useState(0)

  return (
    <View style={styles.container}>
      {CONVERSATION_DATA.map((bubbleData, index) => {
        if (index <= conversationIndex) {
          return (
            <Bubble
              text={bubbleData.text}
              reply={bubbleData.reply}
              key={index}
            />
          )
        }
      })}

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>Message</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setConversationIndex(conversationIndex + 1)
          }}
        >
          <FontAwesome name='send' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  input: {
    flex: 2,
    justifyContent: 'center',
  },
})
