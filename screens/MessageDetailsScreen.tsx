import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Bubble from '../components/Bubble'
import { View, Text } from '../components/Themed'

const CONVERSATION_DATA = [
  {
    message: 'Hey, what are you up to?',
    options: {
      replyOne: {
        id: '1',
        text: 'Not much.',
      },
      replyTwo: {
        id: '2',
        text: 'Doing some chores.',
      },
    },
    timeout: 500,
  },
]

export default function MessageDetailsScreen() {
  const [conversationIndex, setConversationIndex] = useState(0)

  return (
    <View style={styles.container}>
      {CONVERSATION_DATA.map((bubbleData) => (
        <Bubble text={bubbleData.message} />
      ))}

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>Message</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setConversationIndex(conversationIndex + 1)
          }}
        >
          <FontAwesome name="send" size={24} color="black" />
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
