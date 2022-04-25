import React, { useState } from 'react'
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
    text: 'Plannign out some designs for this messaging app! What do you think?',
  },
  {
    text: 'Looking good, looking forward to seeing the final thing',
    reply: true,
  },
  {
    text: 'Good luck!',
    reply: true,
  },
]

export default function MessageDetailsScreen() {
  const [conversationIndex, setConversationIndex] = useState(0)

  const advanceConversation = () => {
    setConversationIndex(conversationIndex + 1)
    console.log(conversationIndex)
  }

  return (
    <View style={styles.container}>
      {CONVERSATION_DATA.map((bubbleData, index) => {
        if (index <= conversationIndex) {
          return <Bubble text={bubbleData.text} reply={bubbleData.reply} />
        }
      })}

      <TouchableOpacity style={styles.advance} onPress={advanceConversation}>
        <Text>Advance</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  advance: {
    borderRadius: 50,
    marginVertical: 20,
    backgroundColor: 'lightblue',
    padding: 20,
    alignItems: 'center',
  },
})
