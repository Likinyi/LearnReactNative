import React from 'react';
import {
  Text,
  Button,
  SafeAreaView,
} from 'react-native';

export default function Mypage(props) {
  //
  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
        <Text>This is My Page</Text>
        <Button title={'LogOut'} onPress={()=>{props.navigation.navigate('LoginScreen')}}/>
    </SafeAreaView>
  );
}