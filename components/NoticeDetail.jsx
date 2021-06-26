import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
} from 'react-native';

export default function NoticeDetail(props) {
  //
  return (
    <SafeAreaView>
        <Text>标题:{props.route.params.id}</Text>
        <Text>Notice Deatil</Text>
        <Image source={require('../assets/jhc_news001.jpg')}/>
    </SafeAreaView>
  );
}