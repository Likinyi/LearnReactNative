import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

//dummy data
const list = [
  {
    id: 1,
    title: 'すべて１',
    image: '../assets/jhc_news001.jpg',
  },
  {
    id: 2,
    title: 'すべて２',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'すべて３',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: 'すべて４',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    title: 'すべて５',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    title: 'すべて６',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    title: 'すべて７',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    title: 'すべて８',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 9,
    title: 'すべて９',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    title: 'すべて１０',
    image: 'https://picsum.photos/200/300',
  }
];

export default function HomeScreen(props) {
  //
  return (
    <SafeAreaView>
      <ScrollView>
      {list.map((item, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() =>
              props.navigation.navigate('NoticeDetail', { id: item.id })
            }>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <Avatar source={{ uri: item.image }} />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});