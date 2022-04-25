import React from 'react'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View } from '../components/Themed'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const DATA = [
  {
    id: '4eaa50d9-5289-4d68-8c9d-11f7cd4c5175',
    title: '🤍',
    subtitle: 'Hey will you be home for dinner?',
    time: 'Just now',
  },
  {
    id: '324e4852-9f54-49e1-ac9c-bf3924fb1fa1',
    title: '💅🏽',
    subtitle: 'Great',
    time: '10:20am',
  },
  {
    id: '63576c7f-9594-4522-a877-9529a91450da',
    title: '🏡',
    subtitle: '😆',
  },

  {
    id: '42a3761c-e6fa-4717-ab4c-420d90fe23a8',
    title: '🏢',
    subtitle:
      'No problem, we will see you on Wednesday. This is a very long reply. It just keeps going',
  },
  {
    id: '20cf280e-cdc7-4365-8b6b-1e2a7a194269',
    title: '👞',
    subtitle: 'Lovely to meet you yesterday.',
  },
]

interface ItemProps {
  title: string
  subtitle: string
}

const Item = ({ title, subtitle }: ItemProps) => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('Root', {
      screen: 'MessageNavigator',
      params: {
        screen: 'Name',
      },
    })
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handleNavigation}>
      <View style={styles.row}>
        <View style={styles.circleIcon}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View style={styles.arrowContainer}>
            <FontAwesome name='angle-right' size={16} color='black' />
          </View>
        </View>
      </View>

      <View style={styles.separator} lightColor='#F5F5F5' />
    </TouchableOpacity>
  )
}

export default function MessageListScreen() {
  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item title={item.title} subtitle={item.subtitle} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
  },
  circleIcon: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginRight: 16,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  arrowContainer: {
    paddingLeft: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    fontSize: 16,
  },
  separator: {
    alignSelf: 'center',
    height: 1,
    width: '90%',
    marginVertical: 8,
  },
})
