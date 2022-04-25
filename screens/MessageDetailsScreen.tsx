import { FontAwesome } from '@expo/vector-icons'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Bubble from '../components/Bubble'
import { View, Text } from '../components/Themed'

const CONVERSATION_DATA = {
  oneFriend: {
    message: 'Hey, what are you up to?',
    options: {
      replyOne: {
        id: '1',
        text: 'Not much.',
        next: 'twoFriend',
        timeout: 500,
      },
      replyTwo: {
        id: '2',
        text: 'Doing some chores.',
        next: 'threeFriend',
        timeout: 700,
      },
    },
  },
}

export default function MessageDetailsScreen() {
  const currentConversation = [CONVERSATION_DATA.oneFriend]
  const [currentEvent, setCurrentEvent] = useState(CONVERSATION_DATA.oneFriend)

  const handleResponse = useCallback((reply) => {
    console.log({ reply })
  }, [])

  return (
    <View style={styles.container}>
      {currentConversation.map((bubbleData, index) => {
        console.log({ currentEvent, bubbleData })
        if (bubbleData !== currentEvent) setCurrentEvent(bubbleData)

        return <Bubble text={bubbleData.message} key={index} />
      })}

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>{currentEvent.options.replyOne.text}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleResponse(currentEvent.options.replyOne)}
        >
          <FontAwesome name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>OR</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>{currentEvent.options.replyTwo.text}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleResponse(currentEvent.options.replyTwo)}
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
    marginVertical: 12,
  },
  input: {
    flex: 2,
    justifyContent: 'center',
  },
})
