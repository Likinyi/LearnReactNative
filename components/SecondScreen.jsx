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
    title: '社内１',
    image: '../assets/jhc_news001.jpg',
  },
  {
    id: 2,
    title: '社内２',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: '社内３',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: '社内４',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    title: '社内５',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    title: '社内６',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    title: '社内７',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    title: '社内８',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 9,
    title: '社内９',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    title: '社内１０',
    image: 'https://picsum.photos/200/300',
  }
];

export default function SecondScreen(props) {
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