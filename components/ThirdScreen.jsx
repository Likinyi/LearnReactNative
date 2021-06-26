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
    title: '社外１',
    image: '../assets/jhc_news001.jpg',
  },
  {
    id: 2,
    title: '社外２',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: '社外３',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: '社外４',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    title: '社外５',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    title: '社外６',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    title: '社外７',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    title: '社外８',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 9,

    title: '社外９',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    title: '社外１０',
    image: 'https://picsum.photos/200/300',
  }
];

export default function ThirdScreen(props) {
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